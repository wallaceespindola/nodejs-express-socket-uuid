# Node.js Express Socket UUID

![Chat, uniquely](docs/images/banner.png)

[![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue)](LICENSE) [![Node.js LTS](https://img.shields.io/badge/Node.js-24_LTS-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](tsconfig.json) [![CI](https://github.com/wallaceespindola/nodejs-express-socket-uuid/actions/workflows/ci.yml/badge.svg)](https://github.com/wallaceespindola/nodejs-express-socket-uuid/actions/workflows/ci.yml)

A small realtime chat built with Express 5 and Socket.IO 4. Every user and every message gets its own `crypto.randomUUID()` id, and a tiny REST API exposes a health check and a UUID generator.

The repo started in 2021 as a pile of scratch scripts. It is now one coherent demo: strict TypeScript, no date or array helper libraries (native `Intl` and array methods instead), tests with Vitest, a Dockerfile and CI.

## Quickstart

You need Node.js 24 LTS and pnpm.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000> in two browser tabs, pick a name in each and start talking. Hover a message to see its UUID.

## How it works

- The browser asks for a username and sends a `join` event. The server validates it with Zod, creates a user with a new UUID and announces them to everyone.
- A `chat message` event is accepted only from joined users. The server trims and length-checks the text, then broadcasts `{ id, user, text, timestamp }` with a fresh message UUID.
- The server stamps each message with an ISO 8601 timestamp, and the browser formats it for the reader's locale with `Intl.DateTimeFormat`.

## REST API

| Endpoint        | Response                                 |
| --------------- | ---------------------------------------- |
| `GET /health`   | `{ "status": "ok", "timestamp": "..." }` |
| `GET /api/uuid` | `{ "uuid": "...", "timestamp": "..." }`  |

## Scripts

| Command          | What it does                      |
| ---------------- | --------------------------------- |
| `pnpm dev`       | Run with file watching            |
| `pnpm lint`      | ESLint and Prettier check         |
| `pnpm typecheck` | TypeScript in strict mode         |
| `pnpm test`      | Vitest with an 80% coverage gate  |
| `pnpm build`     | Compile to `dist/`                |
| `pnpm start`     | Run the compiled server           |
| `make docker`    | Build and run with Docker Compose |

Configuration lives in `.env.example`. The only variable is `PORT`, validated at startup.

## Project layout

```text
src/app.ts        Express app and Socket.IO handlers
src/env.ts        Zod environment parsing
src/server.ts     Entry point
src/app.test.ts   REST and chat tests over real sockets
public/           Static chat page
```

## Support

If you find this project helpful, please consider:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support%20my%20work-FFDD00?style=flat&labelColor=101010&logo=buy-me-a-coffee&logoColor=white)](https://www.buymeacoffee.com/wallace.espindola) [![Star on GitHub](https://img.shields.io/badge/Star%20on%20GitHub-nodejs-express-socket-uuid-181717?style=flat&logo=github)](https://github.com/wallaceespindola/nodejs-express-socket-uuid)

[![GitHub stars](https://img.shields.io/github/stars/wallaceespindola/nodejs-express-socket-uuid?style=social)](https://github.com/wallaceespindola/nodejs-express-socket-uuid/stargazers) [![GitHub forks](https://img.shields.io/github/forks/wallaceespindola/nodejs-express-socket-uuid?style=social)](https://github.com/wallaceespindola/nodejs-express-socket-uuid/network/members) [![GitHub watchers](https://img.shields.io/github/watchers/wallaceespindola/nodejs-express-socket-uuid?style=social)](https://github.com/wallaceespindola/nodejs-express-socket-uuid/watchers) [![GitHub issues](https://img.shields.io/github/issues/wallaceespindola/nodejs-express-socket-uuid)](https://github.com/wallaceespindola/nodejs-express-socket-uuid/issues) [![GitHub last commit](https://img.shields.io/github/last-commit/wallaceespindola/nodejs-express-socket-uuid)](https://github.com/wallaceespindola/nodejs-express-socket-uuid/commits/main)

Star the repo on GitHub if it helps your Node.js work. It motivates me a lot!

## Author

Wallace Espindola, Solution Architect

- Email: <wallace.espindola@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/wallaceespindola/>
- GitHub: <https://github.com/wallaceespindola/>
- Twitter/X: [@wsespindola](https://x.com/wsespindola)
- Substack: [Code & Coffee by Wallace Espindola](https://wallaceespindola.substack.com)
- Medium: <https://medium.com/@wallaceespindola>
- Dev.to: <https://dev.to/wallaceespindola>
- DZone: <https://dzone.com/users/1254611/wallacese.html>
- Speaker Deck: <https://speakerdeck.com/wallacese>
- Speaker profile: <https://sessionize.com/wallace-espindola/>
- Company: [www.wtechitsolutions.com](http://www.wtechitsolutions.com)
- Buy Me a Coffee: <https://www.buymeacoffee.com/wallace.espindola>

## License

- This project is released under the Apache 2.0 License.
- See the [LICENSE](LICENSE) file for details.
- Copyright © 2026 [Wallace Espindola](https://github.com/wallaceespindola/).
