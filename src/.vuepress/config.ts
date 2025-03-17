import path from "path";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";
import { getDirname } from "vuepress/utils";
import { memberDataPlugin } from "./plugins/memberDataPlugin.js";
import { contactDataPlugin } from "./plugins/contactDataPlugin.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Kokenylab",
  description:
    "Kidney Research Group at Semmeleweis University, Institute of Translational Medicine",

  plugins: [memberDataPlugin(), contactDataPlugin()],

  bundler: viteBundler({
    viteOptions: {
      server: {
        allowedHosts: true,
      },
    },
    vuePluginOptions: {},
  }),

  theme: hopeTheme(
    {
      author: {
        name: "Kokenylab",
      },
      logo: "/logo.png",
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
        { text: "News", link: "/news/" },
        { text: "Members", link: "/members/" },
        { text: "About", link: "/about/" },
        { text: "Publications", link: "/publications/" },
        { text: "Contact", link: "/contact/" },
      ],
      breadcrumb: false,
    },
    { custom: true }
  ),

  alias: {
    "@TeamMembers": path.resolve(__dirname, "components/TeamMembers.vue"),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
