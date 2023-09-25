<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia'

import clothingSwiper from '@/components/clothingSwiper.vue';

const store = useCounterStore()
const { clothType } = storeToRefs(store)

</script>

<template>
    <div class="container">
        <clothingSwiper :type="clothType.male"></clothingSwiper>
    </div>
</template>

<style></style>