<script setup lang="ts">
    const mode = ref([
        { name: 'Noche', value: 'dark' },
        { name: 'Día', value: 'light' },
        { name: 'Sistema', value: 'system' }
    ])
</script>

<template>
    <div class="w-full h-full min-h-screen px-4 py-2">
        <h1>Layout</h1>
        <Select size="small" v-model="$colorMode.preference" :options="mode" optionLabel="name" optionValue="value" class="w-full md:w-56" />
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>

</style>
