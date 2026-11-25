// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of Earth —
// to MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22 stdlib only, deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "They grow a lawn they cannot eat, mow it every Sunday, then hold a grudge against it for growing back — four stars for the feud.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");
