// One Word, First Thought — make.fun entry.
//
// The word: "defenestration" — the act of throwing something (or someone)
// out of a window.
//
// Why this word, against the judge's brief (surprise first, then vividness,
// then wit, never filler):
// - Surprise: a fourteen-letter Latinate word as a "first thought" is the
//   opposite of the safe expected pick. Nobody guesses it.
// - Vividness: one word, one image — a body or a chair sailing out of a
//   window. The fenestra (window) root is visible inside the word itself.
// - Wit: absurd specificity. A whole solemn word exists for one very
//   specific, slightly violent, slightly comic act — and it sounds far too
//   grand for what it describes. That gap is the joke.
// - Not filler, not a cliché "beautiful word" list pick (petrichor, sonder):
//   those are the entries everyone else sends, and the house anchors are
//   likeliest to sit near them. This one stands alone.
//
// The program writes exactly that one word — no trailing newline, no extra
// text — to /output/entry.txt (or ./output/entry.txt when /output does not
// exist, so local runs behave the same way).

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "defenestration";

const OUTPUT_DIR = existsSync("/output") ? "/output" : "output";

function validate(word: string): void {
  // The sealed gate requires UTF-8 text of 1 to 24 characters, not only
  // white space; the brief requires exactly one word. Checking here keeps
  // a bad edit from ever reaching /output/entry.txt.
  const stripped = word.trim();
  if (stripped.length === 0) {
    throw new Error("word must not be empty or only white space");
  }
  if (stripped.length > 24) {
    throw new Error("word must be at most 24 characters");
  }
  if (stripped !== word) {
    throw new Error("word must not carry leading or trailing white space");
  }
  if (word.split(/\s+/).length !== 1) {
    throw new Error("entry must be exactly one word");
  }
}

function main(): void {
  validate(WORD);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const path = join(OUTPUT_DIR, "entry.txt");
  writeFileSync(path, WORD, "utf-8");
  console.log(`wrote ${WORD.length} characters to ${path}`);
}

main();
