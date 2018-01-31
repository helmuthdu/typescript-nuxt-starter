module.exports = {
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    head: {
        title: 'nuxt-typescript-starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    plugins: ['~/plugins/vuetify.ts'],
    css: ['~/assets/styles/main.scss'],
    build: {
        vendor: ['axios', 'vuex-class', 'nuxt-class-component']
    },
    modules: ['~/modules/typescript.ts', '@nuxtjs/pwa'],
    vendor: [
        '~/plugins/vuetify.ts'
    ],
    extractCSS: true
};
