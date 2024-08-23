<!-- src/views/About.vue -->
<template>
  <img :src="require('../assets/Square_1.svg')" alt="" class="fixed top-[68%] left-[32%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 bounce">
  <img :src="require('../assets/Star-1.svg')" alt="" class="fixed top-[78%] right-[12%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 rotate">
  <img :src="require('../assets/bar_3.svg')" alt="" class="fixed top-[95%] right-[12%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 translate">
  <img :src="require('../assets/Small-Elipse.svg')" alt="" class="fixed -bottom-[5%] left-[5%] -z-10  lg:w-24 lg:h-24 xs:w-16 xs:h-16 scale">
  <img :src="require('../assets/Ellipse-4.svg')" alt="" class="fixed -bottom-[20%] left-[20%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 rotate">
  <img :src="require('../assets/Eye2.svg')" alt="" class="fixed -bottom-[18%] right-1/4 -z-10  lg:w-24 lg:h-24 xs:w-16 xs:h-16 bounce">
  <img :src="require('../assets/Star-1.svg')" alt="" class="fixed top-[10%] left-0 -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 rotate">
  <img :src="require('../assets/One-Forth-Ellipse.svg')" alt="" class="fixed top-[5%] left-2/4 -z-10  lg:w-24 lg:h-24 xs:w-16 xs:h-16 scale">
  <img :src="require('../assets/Waves_2.svg')" alt="" class="fixed top-1/2 right-0 -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24">
  <img :src="require('../assets/Star-3.svg')" alt="" class="fixed top-[45%] right-1/4 -z-10  lg:w-24 lg:h-24 xs:w-16 xs:h-16 rotate">
  <img :src="require('../assets/Half-Shape_2_inverted.svg')" alt="" class="fixed top-1/4 right-[2%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 scale">
  <img :src="require('../assets/Small-Elipse.svg')" alt="" class="fixed top-[50%] left-[2%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 translate">
    <article class="lg:mt-48 xs:mt-24 lg:px-64 xs:px-0 relative flex flex-col text-white">
        <h2 class="lg:text-[3rem] xs:text-[1.5rem] text-center font-semibold font-clash mb-8 text-white">Qui suis-je ?</h2>
        <div class="lg:text-2xl xs:text-xl font-clash font-extralight relative p-8">
          <div class="z-20 h-full">
            <p>je suis <span class="font-semibold">Charcre-bailse Junior Destimmense Kingnon</span>, développeur web actuellement en freelance.</p>
            <p>J'ai un bac D, suite à quoi j'ai suivi une formation puis un stage qui m'ont permis de me dégoter un emploi en tant que développeur web grâce auquel j'ai beaucoup appris.</p>
            <p>je suis quelqu'un d'assez ouvert, un peu taquin dont l'imagination n'as de limite, j'ai l'esprit critique et n'as pas peur de défendre mes opinions, mais je sais aussi me taire et écouter celui des autres.</p>
            <p>En dehors de la programmation, j'aime le dessin, l'écriture, le chantournage, les animes, les series, les films, les jeux, bref, très facile à combler</p>
            <p>Maitenant que tu sais tout ça sur moi, je crois qu'on peut dire qu'on est meilleurs potes, alors hésite pas, <span class="font-semibold">contacte moi!</span></p>
          </div>
          <div class="absolute lg:-top-[90%] xs:top-[0%] bottom-0 right-0 left-0 -z-10 backdrop-blur-sm">
            <img src="../assets/logo/1.png" alt="" class="w-full opacity-25">
          </div>
        </div>
        
      </article>
      <article class="lg:mt-48 xs:mt-24 lg:px-56 xs:px-8 relative flex flex-col text-white">
          <h2 class="lg:text-[3rem] xs:text-[1.5rem] text-center font-semibold font-clash mb-8 text-white">Que sais-je faire ?</h2>
        <div class="grid lg:grid-cols-5 xs:grid-cols-1 gap-8 align-left bg-white text-white p-8 rounded-2xl bg-opacity-25 backdrop-blur-sm">
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/html-1.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">HTML</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/css-3.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">CSS</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/logo-javascript.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Javascript</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/python-5.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Python</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/java-4.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Java</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/spring-3.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Springboot</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/laravel-2.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Laravel</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/django.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Django</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/vue-9.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Vuejs</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/angular-icon-1.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Angular</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/react-2.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">React</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/nuxt-2.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Nuxt</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div><div class="group relative">
            <div class="flex gap-4 justify-centerleft-center">
              <img src="../assets/next-js.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Next js</span>
            </div>
            
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/sass-1.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">SCSS</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/tailwindcss.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Tailwindcss</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
          <div class="group relative">
            <div class="flex gap-4 justify-left items-center">
              <img src="../assets/bootstrap-5-1.svg" alt="" class="w-16 h-16">
              <span class="lg:text-2xl xs:text-xl font-clash">Bootstrap</span>
            </div>
            <div class="absolute h-0 top-0 left-0 right-0 backdrop-grayscale duration-500 group-hover:h-full"></div>
          </div>
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
  export default {
    name: 'AboutPage',
    components: { DownloadCv },
  }
  </script>
  
  <style scoped>
  /* Styles spécifiques à cette page */
  h1 {
    color: #42b983;
  }

  </style>
  