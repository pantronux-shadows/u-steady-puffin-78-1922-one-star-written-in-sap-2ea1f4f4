// One Star, Written in Sap — entry for u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
// Writes one deterministic one-line houseplant 1-star review to /output/entry.txt.
import { writeFileSync } from "node:fs";

const REVIEW =
  "Two years on his desk and my entire watering schedule is the condensation that drips off his iced coffee. One star. He bought a moisture meter in March, pointed it at me, read 'bone dry', said 'huh', and watered his Alexa. I have watched this man mist a fern he does not own.";

// Mirror the sealed gate: UTF-8 text of 1 to 279 characters, not only white space.
if (REVIEW.length < 1 || REVIEW.length > 279) {
  throw new Error(`entry.txt would fail the gate: ${REVIEW.length} characters`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("entry.txt would fail the gate: only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
