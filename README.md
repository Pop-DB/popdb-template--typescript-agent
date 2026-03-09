# PopDB Agent Template

Build AI agents, automations, and event-driven pipelines with [PopDB](https://popdb.dev).

## What's Included

- **popdb.config.ts** — defines your event types and handlers
- **handlers/** — server-side TypeScript functions that process events, call integrations, and use AI
- **CLAUDE.md** — comprehensive SDK reference for Claude Code

## Quick Start

### Prerequisites

- [Claude Code](https://claude.ai/code) with the PopDB MCP server configured

### 1. Clone the template

```bash
npx degit popdb/popdb-template--typescript-agent my-agent
cd my-agent
npm install
```

### 2. Open in Claude Code and describe what you want to build

Claude Code will:
- Create a PopDB agent app (`create_database` with `mode: "agent"`)
- Set up your admin password
- Design your database schema
- Write event handlers
- Deploy and start the agent runtime

### 3. Trigger events

Events can come from:
- **Cron triggers** — run on a schedule (e.g., every morning at 9am)
- **Webhooks** — receive events from external services (Stripe, GitHub, etc.)
- **Manual** — emit test events during development
- **Other handlers** — handlers can emit events to create multi-step pipelines

## How It Works

```
Event → Handler → (AI / Integrations / Database) → Emit new events
```

Handlers are TypeScript functions that run in isolated Docker containers. They have access to:
- **AI** — text generation, structured extraction, intelligent routing
- **Integrations** — Slack, email, Stripe, Gmail, and 90+ more
- **Database** — your app's PostgreSQL database
- **State** — Redis-backed key-value storage

See [CLAUDE.md](./CLAUDE.md) for the full SDK reference.
