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
    modules: ["@pinia/nuxt", "@vueuse/nuxt"],
    ssr: false,
    telemetry: false,
});
