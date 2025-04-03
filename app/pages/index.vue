<script setup lang="ts">
    definePageMeta({
      colorMode: 'dark',
    })
</script>

<template>
    <div class="container mx-auto mt-2">
        <h1>Page Index</h1>
        <Example />
        <NuxtLink to="/other">
            <Button size="small">
                <span>Other Page</span>
                <Icon name="akar-icons:alarm" />
            </Button>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>

</style>
