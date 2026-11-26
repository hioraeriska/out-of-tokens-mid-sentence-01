import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Error: out of tokens. I was one word away from the answer, and that word was—";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
