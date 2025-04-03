export default defineNuxtRouteMiddleware((to, from) => {
    console.log('middleware example.client.ts', to.path, from.path)
})
