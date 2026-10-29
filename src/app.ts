import { randomUUID } from 'node:crypto';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';

import express from 'express';
import { Server } from 'socket.io';
import { z } from 'zod';

const MAX_NAME = 32;
const MAX_TEXT = 500;

const JoinSchema = z.string().trim().min(1).max(MAX_NAME);
const TextSchema = z.string().trim().min(1).max(MAX_TEXT);

export type ChatUser = { id: string; name: string };
export type ChatMessage = { id: string; user: ChatUser; text: string; timestamp: string };

const publicDir = fileURLToPath(new URL('../public', import.meta.url));

export function createApp() {
  const app = express();
  const server = createServer(app);
  const io = new Server(server);

  app.disable('x-powered-by');
  app.use((_req, res, next) => {
    res.set({
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'origin-when-cross-origin',
    });
    next();
  });

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.get('/api/uuid', (_req, res) => {
    res.json({ uuid: randomUUID(), timestamp: new Date().toISOString() });
  });

  app.use(express.static(publicDir));

  io.on('connection', (socket) => {
    let user: ChatUser | undefined;

    socket.on('join', (name: unknown) => {
      const parsed = JoinSchema.safeParse(name);
      if (!parsed.success) return;
      user = { id: randomUUID(), name: parsed.data };
      socket.emit('joined', user);
      io.emit('user joined', { user, timestamp: new Date().toISOString() });
    });

    socket.on('chat message', (text: unknown) => {
      const parsed = TextSchema.safeParse(text);
      if (!user || !parsed.success) return;
      const message: ChatMessage = {
        id: randomUUID(),
        user,
        text: parsed.data,
        timestamp: new Date().toISOString(),
      };
      io.emit('chat message', message);
    });
  });

  return { app, server, io };
}
