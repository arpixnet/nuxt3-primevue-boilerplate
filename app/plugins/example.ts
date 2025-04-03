export default defineNuxtPlugin(async (nuxtApp) => {
    console.log('From example plugin:', nuxtApp.$config.public.exampleConfig);
})
