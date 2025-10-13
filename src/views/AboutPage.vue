<!-- src/views/About.vue -->
<template>
  <BackGround />
  <article class="lg:mt-48 xs:mt-24 lg:px-64 xs:px-0 relative flex flex-col text-white">
    <h2 class="lg:text-[3rem] xs:text-[1.5rem] text-center font-semibold font-clash mb-8 text-white">Qui suis-je ?</h2>
    <div class="lg:text-2xl xs:text-xl font-clash font-extralight relative p-8 pt-0">
      <div class="z-20 h-full lg:block xs:hidden">
        <p>Je suis <span class="font-semibold">Charcre-bailse Junior Destimmense Kingnon</span>, développeur web. Après
          un <span class="font-semibold">bac D</span> et une formation intensive en développement, j’ai eu la chance
          d’explorer le monde professionnel, où j’ai acquis une expérience solide et diversifiée.</p>

        <p>Passionné et curieux, j’ai toujours soif d’apprendre et de repousser mes limites. Mon esprit <span
            class="font-semibold">créatif et imaginatif</span> se nourrit autant de lignes de code que d’inspirations
          venant du quotidien. J’aime concevoir des projets qui combinent <span class="font-semibold">logique,
            performance et esthétique</span>, des solutions techniques qui ont du style et une vraie valeur pour les
          utilisateurs.</p>

        <p>Hors du développement, je me plonge avec le même enthousiasme dans <span class="font-semibold">le dessin,
            l’écriture, le chantournage, les animés, les séries, les films et les jeux</span>. Ces passions nourrissent
          mon imagination et m’aident à penser différemment, à trouver des idées originales et à garder l’esprit ouvert.
        </p>

        <p>Si tu cherches un développeur qui allie <span class="font-semibold">technique, créativité et bonne
            humeur</span>, prêt à relever des défis et à donner vie à des projets ambitieux, <span
            class="font-semibold">contacte-moi !</span></p>

      </div>
      <div class="z-20 h-full lg:hidden xs:block">
        <p>Je suis <span class="font-semibold">Charcre-bailse Junior Destimmense Kingnon</span>, développeur web freelance. Après un <span class="font-semibold">bac D</span> et une formation en développement, j’ai acquis une solide expérience avant de me lancer en freelance.</p>

<p>Curieux et imaginatif, j’aime créer des projets qui combinent <span class="font-semibold">logique, performance et esthétique</span>. Hors du code, je me plonge dans <span class="font-semibold">dessin, écriture, chantournage, animés, séries, films et jeux</span>, ce qui nourrit ma créativité.</p>

<p>Si tu cherches un développeur passionné, créatif et prêt à relever des défis, <span class="font-semibold">contacte-moi !</span></p>

      </div>
      <div class="absolute lg:-top-[90%] xs:top-[0%] bottom-0 right-0 left-0 -z-10 backdrop-blur-sm">
        <img src="../assets/logo/1.png" alt="" class="w-full opacity-25">
      </div>
    </div>

  </article>
  <article class="lg:mt-48 xs:mt-24 lg:px-56 xs:px-8 relative flex flex-col text-white">
    <h2 class="lg:text-[3rem] xs:text-[1.5rem] text-center font-semibold font-clash mb-8 text-white">Que sais-je faire ?
    </h2>
    <div
      class="grid lg:grid-cols-5 xs:grid-cols-1 gap-8 align-left bg-white text-white p-8 rounded-2xl bg-opacity-25 backdrop-blur-sm">
      <TechItem v-for="(tech, index) in technologies" :key="index" :name="tech.name" :img="tech.img" />
    </div>
  </article>
  <div class="text-center lg:mt-32 w-fit mx-auto xs:mt-16">
    <DownloadCv></DownloadCv>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/css';
import DownloadCv from '../components/DownloadCv.vue'
import BackGround from '../components/BackGround.vue'
export default {
  name: 'AboutPage',
  components: { DownloadCv, BackGround },
}
</script>

<script setup>
import TechItem from '../components/TechItem.vue'

// 🧩 Import de toutes les icônes depuis /src/assets
import html from '@/assets/html-1.svg'
import css from '@/assets/css-3.svg'
import js from '@/assets/logo-javascript.svg'
import python from '@/assets/python-5.svg'
// import java from '@/assets/java-4.svg'
// import springboot from '@/assets/spring-3.svg'
import laravel from '@/assets/laravel-2.svg'
import django from '@/assets/django.svg'
import vue from '@/assets/vue-9.svg'
// import angular from '@/assets/angular-icon-1.svg'
import react from '@/assets/react-2.svg'
import nuxt from '@/assets/nuxt-2.svg'
import next from '@/assets/next-js.svg'
import flutter from '@/assets/flutter.png'
import scss from '@/assets/sass-1.svg'
import tailwind from '@/assets/tailwindcss.svg'
import bootstrap from '@/assets/bootstrap-5-1.svg'
import nest from '@/assets/nest.png'

// 🧠 Tableau factorisé avec les bonnes références d’image
const technologies = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'Javascript', img: js },
  { name: 'Python', img: python },
  // { name: 'Java', img: java },
  // { name: 'Springboot', img: springboot },
  { name: 'Nest js', img: nest },
  { name: 'Laravel', img: laravel },
  { name: 'Django', img: django },
  { name: 'Vuejs', img: vue },
  // { name: 'Angular', img: angular },
  { name: 'React', img: react },
  { name: 'Nuxt', img: nuxt },
  { name: 'Next js', img: next },
  { name: 'Flutter', img: flutter },
  { name: 'SCSS', img: scss },
  { name: 'Tailwindcss', img: tailwind },
  { name: 'Bootstrap', img: bootstrap },
]
</script>

<style scoped>
/* Styles spécifiques à cette page */
h1 {
  color: #42b983;
}
</style>