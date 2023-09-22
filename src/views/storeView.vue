<script setup>
    import { useCounterStore } from '@/stores/counter'
    import { storeToRefs } from 'pinia'

    const store = useCounterStore()
    const { clothInfo } = storeToRefs(store)
</script>

<template>
    <div>
        Store
        <div v-for="items in clothInfo" :key="items">
            <div>{{ items.title }}</div>
        </div>
    </div>
</template>

<style scoped>

</style>