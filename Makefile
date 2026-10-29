.PHONY: install dev lint typecheck test build docker

install:
	pnpm install --frozen-lockfile

dev:
	pnpm dev

lint:
	pnpm lint

typecheck:
	pnpm typecheck

test:
	pnpm test

build:
	pnpm build

docker:
	docker compose up --build
