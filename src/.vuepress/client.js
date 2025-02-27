import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
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