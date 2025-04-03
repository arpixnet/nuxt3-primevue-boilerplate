<script setup lang="ts">
    const colorMode = useColorMode()

    const toggleColorMode = (mode: 'light' | 'dark' | 'system') => {
        colorMode.preference = mode
    }
</script>

<template>
    <div class="w-full h-full min-h-screen">
        <!-- Navigation bar with logo -->
        <div class="w-full dark:bg-[#020420] bg-white px-8 p-3 flex justify-between items-center shadow-lg">
            <div class="h-10">
                <NuxtImg src="https://nuxt.com/assets/design-kit/logo-green-white.png" alt="Nuxt Logo" class="h-[80%]" :class="{ 'hidden': $colorMode.value === 'light' }" />
                <NuxtImg src="https://nuxt.com/assets/design-kit/logo-green-black.png" alt="Nuxt Logo" class="h-[80%]" :class="{ 'hidden': $colorMode.value === 'dark' }" />
            </div>
            <div class="flex gap-2">
                <Button severity="secondary" variant="text" rounded :class="{ 'text-yellow-400': $colorMode.preference === 'light' }" @click="toggleColorMode('light')">
                    <Icon name="akar-icons:sun-fill" />
                </Button>
                <Button severity="secondary" variant="text" rounded :class="{ 'text-blue-400': $colorMode.preference === 'dark' }" @click="toggleColorMode('dark')">
                    <Icon name="akar-icons:moon-fill" />
                </Button>
                <Button severity="secondary" variant="text" rounded :class="{ 'text-green-400': $colorMode.preference === 'system' }" @click="toggleColorMode('system')">
                    <Icon name="akar-icons:desktop-device" />
                </Button>
            </div>
        </div>

        <div class="px-4 py-2">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
