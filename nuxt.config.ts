// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/nuxt-pinia-template/",
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "nuxt-pinia-template/favicon.ico",
                },
            ],
            htmlAttrs: {
                style: "background-color: #111; color: #ddd",
            },
            title: "Nuxt Pinia Template",
        },
        layoutTransition: { name: "layout", mode: "out-in" },
        pageTransition: { name: "layout", mode: "out-in" },
    },

    css: ["~/assets/css/main.css"],

    devServer: {
        port: +(process.env.PORT || 3000),
    },

    devtools: { enabled: false },

    future: {
        compatibilityVersion: 4,
    },

    modules: ["@pinia/nuxt", "@vueuse/nuxt"],
    ssr: false,
    telemetry: false,
    compatibilityDate: "2024-07-19",
});
