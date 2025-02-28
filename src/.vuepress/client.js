import { defineClientConfig } from "vuepress/client";
import TeamMembers from "./components/TeamMembers.vue";
import Landing from "./layouts/Landing.vue";
import BlogHome from "./layouts/BlogHome.vue";

export default defineClientConfig({
  layouts: {
    Landing,
    BlogHome,
  },
  enhance({ app, router, siteData }) {
    app.component("TeamMembers", TeamMembers);
  },
  setup() {
    // Add Netlify Identity script
    if (typeof window !== "undefined") {
      const document = window.document;
      const script = document.createElement("script");
      script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
      document.head.appendChild(script);
    }
  },
  rootComponents: [],
});
