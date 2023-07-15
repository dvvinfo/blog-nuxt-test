// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'blog',
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700",
        },
      ],
      script: [
        {src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"} 
      ],
    },
  },
  css: [
    "@/assets/css/font-awesome.min.css",
    "@/assets/css/style.css",
    "@/assets/css/easy-responsive-shortcodes.css",
  ],
});
