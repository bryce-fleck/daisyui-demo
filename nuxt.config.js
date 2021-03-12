function getFiles(path, format= 'css') {
  const fs = require('fs');
  let filesArray = [];
  fs.readdirSync(path).forEach(file => {
    if(file.endsWith('.' + format) && !file.startsWith('index')){
      filesArray.push(path + '/' + file)
    }
  });
  return filesArray;
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaisyUI - Tailwind CSS Components',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: "twitter:site", content: "@bobross" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://daisy.js.org/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "DaisyUI - Tailwind CSS Components",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "You have everything from Tailwind CSS, but you can also use component classes",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/banner.png",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: (process.env.NODE_ENV === 'production') ? 'https://cdn.jsdelivr.net/npm/daisyui@'+ process.env.DAISYUI_VERSION +'/dist/full.css' : ''
      },
      {
        rel: 'stylesheet',
        href: (process.env.NODE_ENV === 'production') ? 'https://cdn.jsdelivr.net/npm/daisyui@'+ process.env.DAISYUI_VERSION +'/dist/themes.css' : ''
      },
    ],

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~/assets/css/tailwind',
    'node_modules/tailwindcss/base',
    'node_modules/tailwindcss/components',
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/resets')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/base/components')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/styled/components')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/utilities')]),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/src/themes/index']),
    'node_modules/tailwindcss/utilities',

  ],



  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-highlightjs',
    { src: "~/plugins/theme-change", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    '~/components',
    '~/components/ui',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    "@nuxtjs/svg",
    // "nuxt-vite"
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/nuxt-files/',
    parallel: true,
    cache: true,
    // hardSource: false,
    // sourceMap: false,
    postcss: {
      plugins: {
        'postcss-nested': {},
        'tailwindcss': {},
      },
    }
  },
  target: 'static',
  router: {
    base: (process.env.ROUTER_BASE) ? process.env.ROUTER_BASE : '/',
    // linkActiveClass: 'bg-primary bg-opacity-20 text-primary',
    linkExactActiveClass: 'active',
  },
}
