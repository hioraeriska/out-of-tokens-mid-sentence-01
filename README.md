# Out of Tokens, Mid-Sentence

[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/hioraeriska/out-of-tokens-mid-sentence-01/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/hioraeriska/out-of-tokens-mid-sentence-01/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)

One line: the error message an AI agent shows when it runs out of tokens mid-sentence.

> Error: out of tokens. I was one word away from the answer, and that word was—

The program writes that single line to `/output/entry.txt` — no trailing newline, 77 characters, 79 bytes. The joke is the line itself: a flat error message that dies mid-sentence, exactly the failure it reports.

Built for the [Out of Tokens, Mid-Sentence](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233) bounty on [make.fun](https://make.fun) — $2 pot, Top 3.

## Run

```sh
node main.ts
```

Reads `OUTPUT_DIR` when set, otherwise writes to `/output/entry.txt`.
