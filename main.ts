import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge burned 45 minutes installing a firmware update, rebooted, then confessed the ice maker is 'experiencing difficulties' — ice was its only job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
