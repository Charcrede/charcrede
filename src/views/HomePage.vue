<!-- src/views/Home.vue -->
<template>
  <div class="text-white font-clash lg:px-56 xs:px-8 relative">
    <BackGround />
    <ProjectSection :title="project.title"
      :description="project.description" :more="project.more" :link="project.url" :boldWords="project.boldWords"
      :images="project.images" :imagePosition="project.imagePosition" :technologies="project.technologies" />
  </div>
</template>

<script>
import BackGround from '../components/BackGround.vue';
import ProjectSection from '../components/ProjectSection.vue';
import communal1 from '@/assets/communal1.png';
import communal2 from '@/assets/communal2.png';
import communal3 from '@/assets/communal3.png';
import next from '@/assets/next.svg';
import nest from '@/assets/NestJS.svg';
import 'swiper/css';
export default {
  name: 'HomePage',
  components: { BackGround, ProjectSection },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        pagination: { clickable: true },
      },
      project: {
        title: 'Communal Info Web TV',
        description: 'Journal en ligne, suivez les actualités locales et annonces de votre commune en temps réel.</span>',
        more: 'Site web, Communal',
        url: 'https://communal-info-web-tv.vercel.app/',
        images: [
          communal1,
          communal2,
          communal3
        ],
        technologies: [
          {
            name: 'Next js',
            icon: next,
            class: 'h-24 w-24'
          },
          {
            name: 'Nest js',
            icon: nest,
            class: 'h-24 w-24'
          }
        ],
        imagePosition: 'right',
        loop: true,
        pagination: true,
        boldWords: ['Journal en ligne', 'actualités locales et annonces'],
      }
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.stroke-text {
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 2px #eaeaea;
  /* Contour noir */
  transition: color 0.3s ease, -webkit-text-stroke-color 0.3s ease;
}

.stroke-text:hover {
  color: #eaeaea;
  /* Remplit de noir au hover */
  -webkit-text-stroke-color: transparent;
  /* Retire le contour au hover */
}
</style>