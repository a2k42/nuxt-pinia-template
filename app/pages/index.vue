<script setup lang="ts">
definePageMeta({
    layout: 'minimal'
})
</script>

<template>
    <div>
        <h1>Nuxt Pinia Template</h1>
        <p>A simple starting template</p>
        <NuxtLink to="lorem" class="next">Read me</NuxtLink>
    </div>
</template>

<style scoped>
.next {
    display: block;
    text-align: right;
}
</style>