<script setup>
import { reactive } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router';

import clothingSwiper from '../components/clothingSwiper.vue';

const store = useCounterStore()
const { setClothingType } = storeToRefs(store)

const male = 'male'
const female = 'female'
const all = 'all'

</script>

<template>
  <aside>
    <ul class="cloth-list" v-for="clothingType in setClothingType" :key="clothingType">
      <li>
        <RouterLink :to="clothingType.split(' ')[0]">{{ clothingType }}</RouterLink>
      </li>
    </ul>
  </aside>
  <div class="type-of-clothing">
    <RouterView />

    <clothingSwiper :type="all"></clothingSwiper>
    <clothingSwiper :type="male"></clothingSwiper>
    <clothingSwiper :type="female"></clothingSwiper>
  </div>
</template>

<style scoped>
aside {
  margin-top: 3rem;
}

ul {
  list-style: none;
}

.cloth-list {
  text-transform: capitalize;
  margin-bottom: 1rem;
}

.cloth-list li {
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.type-of-clothing {
  width: 80%;
}</style>
