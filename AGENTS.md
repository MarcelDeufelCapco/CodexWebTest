# Repository Guidelines

## Project Structure & Module Organization
Keep application code in `src/`, currently centered around `src/index.js`, an Express 5 server that exposes `/todos`. Tests live in `tests/` (for example, `tests/todos.test.js`), and are auto-discovered by Jest. Runtime assets are embedded in the source tree; add new routers or middleware under `src/` and co-locate helpers in `src/lib/` if they grow beyond a single file.

## Build, Test, and Development Commands
- `npm install` — install dependencies; rerun after updating `package-lock.json`.
- `npm start` — runs `node src/index.js` for production-like execution (honors `PORT`, defaults to 3000).
- `npm run dev` — launches `nodemon` for hot-reload during local work.
- `npm test` — executes the Jest suite; CI treats any warning as a failure, so keep output clean.

## Coding Style & Naming Conventions
The project is CommonJS (`type: "commonjs"`). Favor modern syntax (const/let, arrow callbacks) and 2-space indentation to match current files. Name routes after their resource (`/todos`, `/users`) and export the Express app from each module for testability. Keep functions pure where possible; isolate in-memory state in module scope and guard mutations with small helpers.

## Testing Guidelines
Tests use Jest with Supertest for HTTP assertions. Place files in `tests/` with the suffix `*.test.js`, mirroring the route or module under test (e.g., `todos.test.js`). When adding endpoints, include at least one happy-path and one failure-path test that hits the HTTP layer via Supertest. Run `npm test` before pushing; target full coverage for any new logic that touches business rules or serialization.

## Commit & Pull Request Guidelines
Follow the existing `type: subject` format (e.g., `feat: add todo deletion`). Commits should stay focused and reference related issues in the body when applicable. Pull requests need: a concise summary of changes, testing evidence (`npm test` output or screenshots for HTTP clients), and callouts for configuration or data resets (such as clearing the in-memory `todos` seed). Tag reviewers who own the affected module.

## Environment & Configuration Tips
Use `.env` (not committed) to override `PORT` or feature toggles; reference them via `process.env`. Keep default seed data in `src/index.js` small and deterministic so tests remain stable. When persisting data is introduced, document the storage adapter and update this guide accordingly.
