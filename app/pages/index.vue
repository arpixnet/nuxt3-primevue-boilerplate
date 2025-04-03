<script setup lang="ts">
    // definePageMeta({
    //     colorMode: 'dark',
    // })
</script>

<template>
    <div class="container mx-auto mt-8 px-4">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold mb-6 dark:text-primary-500 text-primary-600">Nuxt 3 + Tailwind CSS + PrimeVue Boilerplate</h1>

            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                <h2 class="text-2xl font-semibold mb-4">What is this project?</h2>
                <p class="mb-4">A starter template with Nuxt 3, Tailwind CSS 4, PrimeVue 4, and dark mode support.</p>

                <h3 class="text-xl font-semibold mt-6 mb-3">Main features:</h3>
                <ul class="list-disc pl-6 space-y-2">
                    <li><span class="font-medium">Nuxt 3</span> - The progressive Vue framework</li>
                    <li><span class="font-medium">Tailwind CSS 4</span> - Utility-first CSS framework</li>
                    <li><span class="font-medium">PrimeVue 4</span> - UI component library for Vue</li>
                    <li><span class="font-medium">Integrated dark mode</span> - Easily switch between themes</li>
                    <li><span class="font-medium">Internationalization</span> - Support for multiple languages</li>
                    <li><span class="font-medium">Image optimization</span> - With @nuxt/image</li>
                </ul>
            </div>

            <div class="flex flex-col md:flex-row gap-6">
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex-1">
                    <h3 class="text-xl font-semibold mb-4">Example Components</h3>
                    <Example />

                    <div class="mt-6">
                        <h4 class="font-medium mb-2">PrimeVue Buttons:</h4>
                        <div class="flex flex-wrap gap-2">
                            <Button label="Primary" />
                            <Button label="Secondary" severity="secondary" />
                            <Button label="Success" severity="success" />
                            <Button label="Info" severity="info" />
                            <Button label="Warning" severity="warning" />
                            <Button label="Help" severity="help" />
                            <Button label="Danger" severity="danger" />
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex-1">
                    <h3 class="text-xl font-semibold mb-4">Navigation</h3>
                    <p class="mb-4">Try navigating between pages:</p>

                    <NuxtLink to="/other" class="block mb-4">
                        <Button class="w-full">
                            <span class="mr-2">Go to another page</span>
                            <Icon name="akar-icons:arrow-right" />
                        </Button>
                    </NuxtLink>

                    <div class="mt-6">
                        <h4 class="font-medium mb-2">Icons:</h4>
                        <div class="flex flex-wrap items-center gap-4 text-3xl">
                            <Icon name="akar-icons:github-fill" size="26" />
                            <Icon name="logos:nuxt-icon" size="23" />
                            <Icon name="logos:vue"  size="23"/>
                            <Icon name="logos:tailwindcss-icon" size="22" />
                            <Icon name="simple-icons:primevue" size="24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
