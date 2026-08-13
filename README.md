# BloxMind MCP Server

`@bloxmind-studio/mcp-server` — Luau script bridges and **Model Context Protocol**
(MCP) logic for BloxMind Studio.

This repository contains the MCP-facing layer:
- Studio MCP broker (loopback broker exposing `roblox-studio` MCP tools)
- Roblox Studio ↔ MCP orchestration
- Luau script bridges used to read/write the live Studio project
- OpenCode MCP server configuration

## Relationship to other repos

| Repo | Role |
|------|------|
| `bloxmind-desktop` | Public UI. Connects to Studio through this MCP server. |
| `bloxmind-core-engine` | AI orchestration that drives this MCP server's tools. |

## Development

```bash
pnpm install
pnpm dev        # watch mode
pnpm build      # compile to dist/
pnpm typecheck  # type-check only
```

> **Note:** The MCP broker binds to a loopback port and authenticates via a
> bearer token so the token never appears in the surface URL.
