import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Own Agent — one line roasting the agent that built this entry.
// The agent in question is Muse: it spawns subagents for everything and
// still asks for permission before it finishes anything.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "My agent burned 47 subagents, three hours, and a whole bounty window on this one line — then asked me if it was okay to submit it.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
