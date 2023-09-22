<script setup>
import footView from "@/components/footerView.vue"

import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/store">Store</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <footView></footView>
  </footer>
</template>

<style scoped>
header {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: auto;
}

header a {
  padding: .5rem 1rem;
}

main {
  position: relative;
  display: flex;
  justify-content: space-around;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
}
</style>
