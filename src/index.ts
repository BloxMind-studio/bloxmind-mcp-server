/**
 * BloxMind MCP Server — Luau script bridges and Model Context Protocol logic.
 *
 * NOTE: The service files in this directory were extracted from the monorepo
 * `electron/services/`. Relative imports were flattened for staging; adjust the
 * import specifiers to this repo's layout before building.
 */

export const MCP_SERVER_VERSION = "0.9.96";

/**
 * Placeholder MCP bootstrap. Mount the extracted StudioMcpBroker and expose the
 * `roblox-studio` tools over the MCP SDK transport.
 */
export function createMcpBroker() {
  return {
    start: () => {
      console.log("[bloxmind-mcp-server] broker ready");
      return true;
    },
  };
}