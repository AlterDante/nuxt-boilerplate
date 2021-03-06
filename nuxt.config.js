module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-boilerplate',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: ' nuxt-boilerplate', },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
    ],
  },
  srcDir: 'src/',
  //Подключение глобальных стилей
  css: [
    { src: '~/assets/scss/global.scss', lang: 'scss', },
  ],
  router: {
    linkExactActiveClass: 'active-link',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070', },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient, }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}

