// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Nuxt Pinia Template"
        },
        layoutTransition: { name: "layout", mode: "out-in" },
        pageTransition: { name: "page", mode: "out-in" },
    },
    css: ["~/assets/css/main.css"],
    devServer: {
        port: +(process.env.PORT || 3000),
    },
    devtools: { enabled: false },
    telemetry: false,
});
