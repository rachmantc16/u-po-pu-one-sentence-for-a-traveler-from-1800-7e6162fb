// One Sentence for a Traveler from 1800
// Writes a single sentence (<= 200 characters, vocabulary available by 1800)
// explaining the modern internet, to the harness-prescribed output path.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Revised draft: the first version ran 203 characters (over the limit) and
// spread itself thin. This one rests on a single image an 1800 traveler
// already knows well — the post road that carried the mail by coach — and
// ends on the memorable picture of speaking to someone as if they stood
// beside you. Every word was in use well before 1800.
const SENTENCE =
  "Picture one post road joining every home on Earth, bearing letters, books, pictures, and voices in a breath, so you may read any library or speak to any soul as if they stood beside you.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, SENTENCE, "utf8");
}

main();
