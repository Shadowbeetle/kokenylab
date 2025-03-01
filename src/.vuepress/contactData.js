import { readFileSync } from "fs";
import { resolve } from "path";
import { getDirname } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export function getContactData() {
  try {
    const contactFile = resolve(__dirname, "../data/contact/contact.json");
    const content = readFileSync(contactFile, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error loading contact data:", error);
    return [];
  }
}
