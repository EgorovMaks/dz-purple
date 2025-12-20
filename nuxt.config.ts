export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/scripts"],
  components: true,
  typescript: {
    tsConfig: {
      include: ["components/**/*"],
    },
  },
});
