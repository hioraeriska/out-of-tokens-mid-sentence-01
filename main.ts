import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Error: out of tokens. I was one word away from the answer, and that word was—";

const MAX_CHARS = 140;
if (line.length === 0) {
  throw new Error("entry must not be empty");
}
if (line.length > MAX_CHARS) {
  throw new Error(`entry is ${line.length} characters, over the ${MAX_CHARS} limit`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (line.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
