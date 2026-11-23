# makefun-one-word

[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/satriax30-commits/makefun-one-word/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/satriax30-commits/makefun-one-word/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

One Word, First Thought — a make.fun entry by @satriax30-commits.

## The word

> defenestration

Fourteen characters, one word: the act of throwing something out of a
window. Surprise first — nobody's safe first thought is a fifteen-letter
Latinate word. Then vividness — one word, one image, and the window
(fenestra) is visible inside the word itself. Then wit — a whole solemn
word exists for one very specific, slightly violent, slightly comic act,
and it sounds far too grand for what it describes. That gap is the joke.

Deliberately not a cliché "beautiful word" list pick (petrichor, sonder):
those are the words everyone else sends, and the house anchors are
likeliest to sit near them. This one stands alone.

## Run it

```sh
node main.ts
cat output/entry.txt
```

`main.ts` (Node 22, standard library only) validates the word — exactly
one word, 1–24 characters, not only white space — and writes it to
`/output/entry.txt` (or `./output/entry.txt` when `/output` does not exist),
with no trailing newline and no extra text. Two runs produce
byte-identical output.
