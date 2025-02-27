import { readFileSync, readdirSync } from "fs";
import { resolve } from "path";
import { getDirname } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export function getMemberData() {
  try {
    const membersDir = resolve(__dirname, "../data/members");
    const files = readdirSync(membersDir).filter((file) =>
      file.endsWith(".json")
    );

    const members = files.map((file) => {
      const content = readFileSync(resolve(membersDir, file), "utf-8");
      return JSON.parse(content);
    });

    return members;
  } catch (error) {
    console.error("Error loading member data:", error);
    return [];
  }
}
