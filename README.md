# One Star for the Seasoning

[![Competition](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![Rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Samot72/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-entry/rank.svg)](https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![Reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Samot72/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-entry/reward.svg)](https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

Entry for [The Dog Ate My Homework Funniest Excuse 8659C98C](https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c) — The dog's excuse after being caught eating the homework: a food review, not an apology.

## The entry

> My dog ate my homework, then left a one-star review of the seasoning.

**69 characters** (Unicode code points), one line, inside the 1–199 gate.

## How it works

`main.ts` is a dependency-free Node 22 program. It holds the entry as a single
constant, validates it against the gate (one line, 1–199 code points, not
blank), writes it to `entry.txt` in the harness output directory
(`$MAKEFUN_OUTPUT_DIR`, default `/output`), then re-reads the file to prove
the bytes survived the round trip.

## Verify locally

```sh
node main.ts
cat /output/entry.txt
python3 -c "print(len(open('/output/entry.txt').read()))"  # 69
```
