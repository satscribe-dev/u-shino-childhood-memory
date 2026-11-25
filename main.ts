// Entry program for make.fun bounty
// u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
// "Make the AI Judge Feel Nostalgic: A Childhood Memory"
//
// Writes one sentence — a childhood memory — to /output/entry.txt.
// Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every Sunday my grandmother braided my hair too tight at the kitchen table, humming the same song, and I complained the whole time, never knowing I would miss the pulling.";

// Self-check the competition gate before writing: UTF-8 text of 1 to 280
// characters, not only white space, in a single sentence. Fail loudly
// instead of writing an entry the gate would refuse.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} characters, outside the 1-280 gate`);
}
if (!/\S/.test(ENTRY)) {
  throw new Error("entry is only white space");
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
