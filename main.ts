// Make.fun bounty: "The joke about the demo"
// Writes one joke line (1-280 chars) to /output/entry.txt (Node.js standard library only).
import { mkdirSync, writeFileSync } from "node:fs";
const entry = "My AI coding agent writes the code, tests the code, and then patiently explains the code to me during the demo.";
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", entry + "\n", "utf8");
