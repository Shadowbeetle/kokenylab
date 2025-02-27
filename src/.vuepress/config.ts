import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Kοkenylab",
  description:
    "Kidney Research Group at Semmeleweis University, Institute of Translational Medicine",

  theme: hopeTheme({
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

  // Enable it with pwa
  // shouldPrefetch: false,
});
