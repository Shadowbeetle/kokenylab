import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from "vuepress/utils";
import { memberDataPlugin } from "./plugins/memberDataPlugin.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Kοkenylab",
  description:
    "Kidney Research Group at Semmeleweis University, Institute of Translational Medicine",

  plugins: [memberDataPlugin()],

  theme: hopeTheme({
    markdown: {
      component: true,
    },
    
    sidebar: false,

    plugins: {
      blog: {
        filter: ({ frontmatter, filePathRelative }) => {
          console.log(frontmatter, filePathRelative);
          return (
            filePathRelative?.startsWith("news/") &&
            frontmatter.layout !== "BlogHome"
          );
        },
      },
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "News", link: "/news/" },
      { text: "Members", link: "/members/" },
      { text: "Publications", link: "/publications/" },
    ],
  }),

  alias: {
    "@TeamMembers": path.resolve(__dirname, "components/TeamMembers.vue"),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
