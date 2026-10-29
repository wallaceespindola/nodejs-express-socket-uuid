import type { AddressInfo } from 'node:net';

import { io as connect, type Socket } from 'socket.io-client';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { createApp, type ChatMessage, type ChatUser } from './app.js';
import { parseEnv } from './env.js';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

let ctx: ReturnType<typeof createApp>;
let url: string;
let clients: Socket[] = [];

const client = async () => {
  const s = connect(url, { forceNew: true });
  clients.push(s);
  await new Promise<void>((resolve) =>
    s.on('connect', () => {
      resolve();
    }),
  );
  return s;
};
const once = <T>(s: Socket, event: string) =>
  new Promise<T>((resolve) => {
    s.once(event, (v: T) => {
      resolve(v);
    });
  });

beforeEach(async () => {
  ctx = createApp();
  await new Promise<void>((resolve) => ctx.server.listen(0, resolve));
  url = `http://localhost:${String((ctx.server.address() as AddressInfo).port)}`;
});

afterEach(async () => {
  for (const s of clients) s.disconnect();
  clients = [];
  await ctx.io.close();
});

describe('REST', () => {
  it('GET /health returns ok with a timestamp', async () => {
    const res = await fetch(`${url}/health`);
    const body = (await res.json()) as { status: string; timestamp: string };
    expect(res.status).toBe(200);
    expect(body.status).toBe('ok');
    expect(new Date(body.timestamp).toISOString()).toBe(body.timestamp);
  });

  it('GET /api/uuid returns a fresh v4 uuid each call', async () => {
    const get = async () =>
      (await (await fetch(`${url}/api/uuid`)).json()) as { uuid: string; timestamp: string };
    const [a, b] = [await get(), await get()];
    expect(a.uuid).toMatch(UUID);
    expect(a.uuid).not.toBe(b.uuid);
    expect(a.timestamp).toBeTruthy();
  });

  it('serves the chat page with hardening headers', async () => {
    const res = await fetch(`${url}/`);
    expect(res.status).toBe(200);
    expect(res.headers.get('x-content-type-options')).toBe('nosniff');
    expect(res.headers.get('x-powered-by')).toBeNull();
  });
});

describe('chat', () => {
  it('gives a joining user a uuid and announces them', async () => {
    const s = await client();
    const joined = once<ChatUser>(s, 'joined');
    const announced = once<{ user: ChatUser }>(s, 'user joined');
    s.emit('join', '  Ada ');
    const user = await joined;
    expect(user.name).toBe('Ada');
    expect(user.id).toMatch(UUID);
    expect((await announced).user).toEqual(user);
  });

  it('broadcasts messages with their own uuid to every client', async () => {
    const a = await client();
    const b = await client();
    a.emit('join', 'Ada');
    await once(a, 'joined');
    const received = once<ChatMessage>(b, 'chat message');
    a.emit('chat message', 'hello');
    const msg = await received;
    expect(msg.text).toBe('hello');
    expect(msg.user.name).toBe('Ada');
    expect(msg.id).toMatch(UUID);
    expect(msg.id).not.toBe(msg.user.id);
  });

  it('ignores messages from users who have not joined and invalid input', async () => {
    const a = await client();
    const b = await client();
    b.emit('join', 'Bob');
    await once(b, 'joined');
    const received: ChatMessage[] = [];
    b.on('chat message', (m: ChatMessage) => received.push(m));
    a.emit('chat message', 'sneaky');
    a.emit('join', '   ');
    a.emit('join', 'Ada');
    await once(a, 'joined');
    a.emit('chat message', '');
    a.emit('chat message', 'x'.repeat(501));
    a.emit('chat message', 42);
    a.emit('chat message', 'valid');
    await once(b, 'chat message');
    expect(received.map((m) => m.text)).toEqual(['valid']);
  });
});

describe('env', () => {
  it('applies defaults and rejects a bad port', () => {
    expect(parseEnv({})).toEqual({ PORT: 3000, NODE_ENV: 'development' });
    expect(parseEnv({ PORT: '8080' }).PORT).toBe(8080);
    expect(() => parseEnv({ PORT: 'abc' })).toThrow();
  });
});
