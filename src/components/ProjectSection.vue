<!-- src/components/ProjectSection.vue -->
<template>
    <section class="text-white max-h-96 my-4">
        <figure :class="[
            'lg:flex xs:block gap-8 items-center justify-between',
            imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        ]">
            <div class="lg:w-2/5 xs:w-full text-center lg:text-left">
                <h3 class="lg:text-2xl xs:text-xl lg:mb-8 xs:mb-4">
                    {{ title }}
                </h3>
                <figcaption
                    :class="['lg:text-[2.5rem] xs:text-[1.25rem] font-clash', imagePosition === 'right' ? 'lg:text-left' : 'lg:text-right']"
                    v-html="formattedDescription">
                </figcaption>
                <span class="text-[#aaaaaa] lg:text-2xl xs:text-xl">
                    {{ more }}
                </span>
                <div class="relative group w-fit lg:my-4  xs:mb-2 lg:text-2xl xs:text-xl xs:left-3/4">
                    <div class="-z-10 absolute top-0 bottom-0 left-0 w-0 group-hover:w-full bg-white duration-300">
                    </div>
                    <a :href="link" target="_blank"
                        class="block font-bold group-hover:text-black duration-300 p-2 px-4">Visiter </a>
                </div>
            </div>
            <div class="lg:w-3/5 xs:w-full rounded-lg overflow-hidden group relative max-h-full">
                <swiper :slides-per-view="swiperOptions.slidesPerView" :space-between="swiperOptions.spaceBetween"
                    :loop="swiperOptions.loop" :autoplay="swiperOptions.autoplay"
                    :modules="[Autoplay, Pagination, Navigation]" :pagination="swiperOptions.pagination">
                    <swiper-slide v-for="(image, n) in images" :key="n" :autoplay="swiperOptions.autoplay">
                        <img :src="image" alt="" class="max-h-96 mx-auto" />
                    </swiper-slide>
                </swiper>
                <div
                    class="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-10 opacity-0 group-hover:opacity-100 duration-300 flex justify-center backdrop-blur-sm">
                    <span v-for="tech in technologies" :key="tech.name"
                        class="mx-2 flex justify-center items-center gap-2 text-[2rem] font-clash font-semibold text-[#aaa]">
                        <img :src="tech.icon" alt="" :class="tech.class" />
                        {{ tech.name }}
                    </span>
                </div>
            </div>
        </figure>
    </section>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps({
    title: String,
    description: String,
    boldWords: { type: Array, default: () => [] },
    more: String,
    link: String,
    images: { type: Array, default: () => [] },
    loop: { type: Boolean, default: true },
    pagination: { type: Boolean, default: false },
    imagePosition: { type: String, default: 'left' },
    technologies: { type: Array, default: () => [] },
})

const formattedDescription = computed(() => {
    let text = props.description
    props.boldWords.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi')
        text = text.replace(regex, `<span class="font-semibold">${word}</span>`)
    })
    return text
})

const swiperOptions = {
    loop: props.loop,
    pagination: props.pagination ? { clickable: true } : false,
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: {
        delay: 5000, // temps en ms entre les slides
        disableOnInteraction: false, // continue autoplay même après interaction
    },
}
</script>
