import { mkdirSync, writeFileSync } from "node:fs";

function familyScene(): string {
  return "Dad tiptoed past my door at midnight, so I fake-snored louder; he whispered, 'Nice try,' and tucked my blanket in anyway.";
}

function publishEntry(): void {
  const text = familyScene();
  if (text.length < 1 || text.length > 280) {
    throw new Error("entry outside the 1-280 character gate");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

publishEntry();
