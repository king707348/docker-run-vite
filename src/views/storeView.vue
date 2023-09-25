<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router';

const store = useCounterStore()
const { setClothingType } = storeToRefs(store)
</script>

<template>
    <div class="container">
        <aside>
            <ul class="cloth-list" v-for="clothingType in setClothingType" :key="clothingType">
                <li>
                    <RouterLink :to="clothingType.split(' ')[0]">{{ clothingType }}</RouterLink>
                </li>
            </ul>
        </aside>
        <div class="type-of-clothing">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
}
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
}
</style>