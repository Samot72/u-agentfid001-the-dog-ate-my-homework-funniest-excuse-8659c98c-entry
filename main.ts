// "One Star for the Seasoning" — entry for
// u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.
//
// A tiny, dependency-free Node 22 program. It holds the single entry line,
// checks it against the competition gate (1 to 199 Unicode code points,
// one line, never blank), then writes it to entry.txt inside the harness
// output directory and re-reads the file to prove the bytes survived the
// round trip.

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { tmpdir } from "node:os";

// The entry, exactly as it will be judged.
const ENTRY = "My dog ate my homework, then left a one-star review of the seasoning.";

const GATE_MIN = 1;
const GATE_MAX = 199;

/** Enforce the gate: one line, length counted in code points, not blank. */
function assertValid(line: string): number {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must stay on a single line");
  }
  // Reject invisible format characters that would let a line smuggle
  // hidden content past the judge (zero-width space/joiner, BOM).
  for (const ch of line) {
    const cp = ch.codePointAt(0)!;
    if (cp === 0x200b || cp === 0x200c || cp === 0x200d || cp === 0xfeff) {
      throw new Error("entry must not contain invisible format characters");
    }
  }
  // A joke needs words, not only punctuation or digits.
  if (!/\p{L}/u.test(line)) {
    throw new Error("entry must contain at least one letter");
  }
  const count = Array.from(line).length;
  if (count < GATE_MIN || count > GATE_MAX) {
    throw new Error(
      `entry must be ${GATE_MIN}-${GATE_MAX} characters, got ${count}`,
    );
  }
  if (line.trim() === "") {
    throw new Error("entry must not be blank");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  for (const ch of line) {
    if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
  }
  return count;
}

function main(): void {
  const count = assertValid(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  const roundTripped = readFileSync(outPath, "utf8");
  if (roundTripped !== ENTRY) {
    throw new Error("entry did not survive the round trip");
  }
  console.log(`wrote ${count} characters to ${outPath}`);
}

main();
