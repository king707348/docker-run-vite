<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const prop = defineProps({
    type: String,
})
const type = ref(prop.type)

const store = useCounterStore()
const { clothInfo } = storeToRefs(store)
const modules = [Navigation, Pagination]
</script>

<template>
    <div class="cloth">
        <h3>{{ type.toUpperCase() }}</h3>
        <swiper class="mySwiper" :modules="modules" :navigation="true" :pagination="{
            clickable: true
        }" :rewind="true">
            <template v-for="items in clothInfo">
                <template v-if="type == 'all'">
                    <swiper-slide :key="items">
                        <div class="content">
                            <img :src="items.image" alt="">
                            <h4>{{ items.title }}</h4>
                        </div>
                    </swiper-slide>
                </template>
                <template v-else-if="type == items.category">
                    <swiper-slide :key="items">
                        <div class="content">
                            <img :src="items.image" alt="">
                            <h4>{{ items.title }}</h4>
                        </div>
                    </swiper-slide>
                </template>
            </template>
        </swiper>
    </div>
</template>

<style scoped>
.cloth {
    width: 80%;
    margin: 1.5rem auto;
}

.cloth .content {
    width: 80%;
    margin: auto auto 3rem;
}

.cloth .content img {
    display: flex;
    width: 20%;
    margin: auto;
}

.cloth .content h4 {
    text-align: center;
}

.swiper-slide {
    margin: auto;
}
</style>