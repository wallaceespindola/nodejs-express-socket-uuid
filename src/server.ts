import { createApp } from './app.js';
import { parseEnv } from './env.js';

const env = parseEnv(process.env);
const { server, io } = createApp();

server.listen(env.PORT, () => {
  process.stdout.write(`Listening on http://localhost:${String(env.PORT)}\n`);
});

const shutdown = () => {
  void io.close(() => {
    process.exit(0);
  });
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
