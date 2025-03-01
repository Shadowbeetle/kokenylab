import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { getContactData } from "../contactData.js";

export const contactDataPlugin = () => ({
  name: "contact-data-plugin",

  onPrepared: async (app) => {
    // Create temp directory if it doesn't exist
    const tempDir = resolve(app.dir.temp(), "contact-data");
    mkdirSync(tempDir, { recursive: true });

    // Get contact data
    const contact = getContactData();

    // Write to a JavaScript file that exports the data
    writeFileSync(
      resolve(tempDir, "contact.js"),
      `export const contact = ${JSON.stringify(contact, null, 2)};`
    );
  },
});
