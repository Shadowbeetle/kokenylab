import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { getMemberData } from "../memberData.js";

export const memberDataPlugin = () => ({
  name: "member-data-plugin",

  onPrepared: async (app) => {
    // Create temp directory if it doesn't exist
    const tempDir = resolve(app.dir.temp(), "member-data");
    mkdirSync(tempDir, { recursive: true });

    // Get member data
    const members = getMemberData();

    members.map((member) => {
      if (member.bio) {
        member.renderedBio = app.markdown.render(member.bio);
      }

      return member;
    });

    // Write to a JavaScript file that exports the data
    writeFileSync(
      resolve(tempDir, "members.js"),
      `export const members = ${JSON.stringify(members, null, 2)};`
    );
  },
});
