<script setup lang="ts">
    
</script>

<template>
    <div class="container mx-auto mt-8 px-4">
        <div class="max-w-4xl mx-auto">
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                <h1 class="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-500">Other Page</h1>
                
                <p class="mb-6">This is another page in our Nuxt 3 application. You can use this as a template for creating additional pages.</p>
                
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="bg-slate-100 dark:bg-slate-700 rounded-lg p-6 flex-1">
                        <h2 class="text-xl font-semibold mb-4">Content Section</h2>
                        <p>Add your content here. This is a sample section that you can customize.</p>
                    </div>
                    
                    <div class="bg-slate-100 dark:bg-slate-700 rounded-lg p-6 flex-1">
                        <h2 class="text-xl font-semibold mb-4">More Content</h2>
                        <p>Add additional content here. You can add as many sections as needed.</p>
                    </div>
                </div>
                
                <div class="mt-8">
                    <NuxtLink to="/">
                        <Button class="w-full md:w-auto">
                            <Icon name="akar-icons:arrow-left" class="mr-2" />
                            <span>Back to Home</span>
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped></style>
