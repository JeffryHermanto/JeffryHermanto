export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    bodyAttrs: {
      id: "body"
    },
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900"
      },

      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/simple-line-icons.css" },
      { rel: "stylesheet", href: "/assets/css/slicknav.css" },
      { rel: "stylesheet", href: "/assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/slick.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" }
    ],
    script: [
      { src: "/assets/js/jquery-3.2.0.min.js" },
      { src: "/assets/js/popper.min.js" },
      { src: "/assets/js/bootstrap.min.js" },
      { src: "/assets/js/jquery.slicknav.min.js" },
      { src: "/assets/js/isotope.pkgd.min.js" },
      { src: "/assets/js/owl.carousel.min.js" },
      { src: "/assets/js/slick.min.js" },
      { src: "/assets/js/typed.js" },
      { src: "/assets/js/jquery.scrollUp.min.js" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-164523420-1"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
