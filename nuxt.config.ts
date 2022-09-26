export default defineNuxtConfig({
  head: {
    title: "Michael Resume",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      {
        href: "https://kit.fontawesome.com/3d750a575c.js",
        crossorigin: "anonymous",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;1,400;1,500&family=Oswald:wght@200;300;400&display=swap",
      },
    ],
  },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/font.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  publicRuntimeConfig: {
    EMAILSERVICE: process.env.EMAILSERVICE,
    EMAILTEMPLATE: process.env.EMAILTEMPLATE,
    EMAILKEY: process.env.EMAILKEY,
  },
});
