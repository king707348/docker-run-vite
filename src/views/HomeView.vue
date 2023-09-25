<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router';

const store = useCounterStore()
const { setClothingType } = storeToRefs(store)

</script>

<template>
  <div class="container">

  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
}

</style>
