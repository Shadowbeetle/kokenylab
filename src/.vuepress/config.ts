import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Docs Demo",
  description: "A docs demo for vuepress-theme-hope",

  theme: hopeTheme({
    plugins: {
      blog: true,
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "News", link: "/news/" },
      { text: "Members", link: "/members/" },
      { text: "Publications", link: "/publications/" },
    ],
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
