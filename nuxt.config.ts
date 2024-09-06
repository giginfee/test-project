import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Новини",
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],

  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
      inputStyle: "filled",
    },
    components: {
      include: ["Button", "InputText", "Editor", "Card", "Divider"],
    },
  },

  compatibilityDate: "2024-09-04",
  css: [
    "primeflex/primeflex.css",
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "~/assets/main.css",
  ],
});
