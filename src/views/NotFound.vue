<!-- src/views/NotFound.vue -->
<template>
    <div class="flex flex-col items-center justify-center relative text-center text-white">
        <img :src="require('../assets/Waves_2.svg')" alt="" class="fixed top-1/2 right-0 -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24">
  <img :src="require('../assets/Star-3.svg')" alt="" class="fixed top-[45%] right-1/4 -z-10  lg:w-24 lg:h-24 xs:w-16 xs:h-16 rotate">
  <img :src="require('../assets/Half-Shape_2_inverted.svg')" alt="" class="fixed top-1/4 left-[50%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 scale">
  <img :src="require('../assets/Small-Elipse.svg')" alt="" class="fixed top-[25%] left-[2%] -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24 translate">
      <h1 class="xs:text-3xl font-clash lg:text-6xl font-bold mb-4">404</h1>
      <p class="text-xl mb-8">Oups! La page que vous recherchez n'existe pas.</p>
      <router-link to="/" class="text-blue-500 hover:underline">
        Retour à l'accueil
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici des styles spécifiques à votre page 404 si nécessaire */
  </style>
  