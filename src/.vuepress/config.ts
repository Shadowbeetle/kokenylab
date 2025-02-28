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
    author: {
      name: "Anna Manzeger",
    },
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
    lastUpdated: false,
    contributors: false,
    sidebar: false,

    plugins: {
      blog: {
        filter: ({ frontmatter, filePathRelative }) => {
          return (
            filePathRelative?.startsWith("news/") &&
            frontmatter.layout !== "BlogHome"
          );
        },
      },
      icon: {
        assets: ["fontawesome", "fontawesome-with-brands", "iconify"],
        type: "fontawesome",
      },
      components: {
        components: ["Badge", "VPCard"],
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
