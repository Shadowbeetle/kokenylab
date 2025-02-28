import { defineClientConfig } from "vuepress/client";
import TeamMembers from "./components/TeamMembers.vue";
import Landing from "./layouts/Landing.vue";

export default defineClientConfig({
  layouts: {
    Landing,
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
