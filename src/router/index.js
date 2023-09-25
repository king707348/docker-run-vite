import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/storeView.vue'
import menStoreView from '../views/menStore.vue'
import womenStoreView from '../views/womenStore.vue'
import jeweleryStoreView from '../views/jeweleryStore.vue'
import electronicStoreView from '../views/electronicStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path:"/store",
      name: 'store',
      component: StoreView,
      children:[
        {
          path:"/men's",
          name: 'men',
          component: menStoreView
        },
        {
          path:"/women's",
          name: 'women',
          component: womenStoreView
        },
        {
          path:"/jewelery",
          name: 'jewelery',
          component: jeweleryStoreView
        },
        {
          path:"/electronics",
          name: 'electronics',
          component: electronicStoreView
        },
      ]
    },
  ]
})

export default router
