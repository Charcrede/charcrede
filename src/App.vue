<template>
  <div id="app">
    <!-- Navigation pour les grands écrans -->
    <nav
      class="xs:hidden lg:flex z-20 fixed top-0 text-white lg:text-2xl xs:text-xl font-clash font-semibold flex justify-between items-center w-full gap-4 my-4 px-8">
      <img src="./assets/logo/1.png" alt="logo" class="w-28 h-28">
      <div class="flex justify-center items-center gap-4">
        <!-- Liens de navigation -->
        <div class="group relative w-fit">
          <router-link to="/">Acceuil</router-link>
          <div v-bind:class="route.path == '/' ? 'w-full' : 'w-0'"
            class="h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full"></div>
        </div>
        <div class="group relative w-fit">
          <router-link to="/work">Travaux</router-link>
          <div v-bind:class="route.path == '/work' ? 'w-full' : 'w-0'"
            class="h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full"></div>
        </div>
        <div class="group relative w-fit">
          <router-link to="/about">A propos</router-link>
          <div v-bind:class="route.path == '/about' ? 'w-full' : 'w-0'"
            class="h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full"></div>
        </div>
      </div>
    </nav>

    <!-- Navigation pour les petits écrans -->
    <nav
      class="xs:flex lg:hidden z-20 fixed top-0 text-white lg:text-2xl xs:text-xl font-clash font-semibold flex justify-between items-center w-full gap-4 px-2">
      <img src="./assets/2.svg" alt="logo" class="w-24 h-12">
      <button @click="toggleMenu()">
        <SwitchH @click="toggleMenu()"></SwitchH>
      </button>
    </nav>

    <!-- Menu déroulant pour les petits écrans -->
    <div v-if="isMenuOpen"
      class="lg:hidden bg-black bg-opacity-90 fixed left-0 right-0 top-0  z-20 h-screen w-screen flex flex-col items-center justify-center">
      <!-- <button @click="toggleMenu" class="absolute top-0 right-0">
        <SwitchH></SwitchH>
      </button> -->
      <div class="flex flex-col items-center gap-8 text-white text-2xl font-clash">
        <div v-for="(link, index) in links" :key="index" class="group relative w-fit">
          <router-link :to="link.path" @click="closeMenu()">{{ link.name }}</router-link>
          <div v-bind:class="route.path == link.path ? 'w-full' : 'w-0'"
            class="h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full"></div>
        </div>
      </div>
    </div>

    <div class="lg:mt-48 xs:mt-24 pere">
      <router-view></router-view>
    </div>
  </div>
  <div id="footer" class="lg:mt-48 xs:mt-24 lg:px-56 xs:px-8 relative">
    <img :src="require('./assets/Ellipse-4.svg')" alt=""
      class="absolute bottom-[20%] left-[20%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 rotate">
    <img :src="require('./assets/Eye2.svg')" alt=""
      class="absolute -bottom-[0%] right-1/4 -z-10 lg:w-24 lg:h-24 xs:w-16 xs:h-16 bounce">
    <img :src="require('./assets/Star-3.svg')" alt=""
      class="absolute lg:top-[0%] xs:top-[45%] lg:right-1/2 xs:right-1/4 -z-10 lg:w-24 lg:h-24 xs:w-16 xs:h-16 scale">
    <div
      class="flex gap-16 xs:flex-col lg:flex-row xs:items-center xs:text-center lg:items-start lg:text-left">
      <p class="lg:text-[4rem] xs:text-[2rem] font-clash text-white basis-3/5">Hâte de <span
          class="font-semibold">travailler</span> avec <span class="font-semibold">toi</span> !</p>
      <nav class="text-white font-clash flex flex-col gap-4 basis-1/5">
        <div class="group relative w-fit px-2">
          <router-link to="/">Acceuil</router-link>
          <div class="w-0 h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full">
          </div>
        </div>
        <div class="group relative w-fit px-2">
          <router-link to="/work">Travaux</router-link>
          <div class="w-0 h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full">
          </div>
        </div>
        <div class="group relative w-fit px-2">
          <router-link to="/about">A propos</router-link>
          <div class="w-0 h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full">
          </div>
        </div>
      </nav>
      <div class="text-white font-clash flex flex-col gap-4 basis-1/5">
        <div class="group relative w-fit px-2">
          <a href="https://www.facebook.com/profile.php?id=100084141554519">Facebook</a>
          <div class="w-0 h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full">
          </div>
        </div>
        <div class="group relative w-fit px-2">
          <a href="https://github.com/charcrede">Github</a>
          <div class="w-0 h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full">
          </div>
        </div>
        <div class="group relative w-fit px-2">
          <a mailto="charcrede@gmail.com">charcrede@gmail.com</a>
          <div class="w-0 h-[2px] bg-blanc absolute bottom-0 group-hover:w-full duration-300 rounded-full">
          </div>
        </div>
      </div>
    </div>
    <p class="text-[#aaaaaa] mt-4">© Copyrights Charcre-bailse 2024</p>
  </div>
  <CustomCursor></CustomCursor>
</template>



<script>
import { useRoute } from "vue-router";
import CustomCursor from './components/CustomCursor.vue';
import SwitchH from './components/SwitchH.vue';

export default {
  name: 'App',
  data() {
    return {
      route: useRoute(),
      isMenuOpen: false, // État pour contrôler l'affichage du menu
      links : [
        {name : 'Accueil', path : '/'},
        {name : 'Travaux', path : '/work'},
        {name : 'A propos', path : '/about'},
      ]
    };
  },
  components: {
    CustomCursor,
    SwitchH
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // this.isMenuOpen = !this.isMenuOpen;
      console.log(this.isMenuOpen);
      
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>




<style scoped>
.pere {
  cursor: none;
}

.group-relative.w-fit.transition-all {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.menu-open .group-relative.w-fit {
  opacity: 1;
  transform: translateY(0);
}

.menu-open .group-relative.w-fit.transition-delay-100 {
  transition-delay: 0.1s;
}

.menu-open .group-relative.w-fit.transition-delay-200 {
  transition-delay: 0.2s;
}

.menu-open .group-relative.w-fit.transition-delay-300 {
  transition-delay: 0.3s;
}

.menu-open .group-relative.w-fit.transition-delay-400 {
  transition-delay: 0.4s;
}

.menu-open .group-relative.w-fit.transition-delay-500 {
  transition-delay: 0.5s;
}
</style>
