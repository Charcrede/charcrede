<script setup>
import { defineProps } from 'vue'
// ✅ Définition correcte des props
const props = defineProps({
  name: String,
  img: String, // exemple : "../assets/vue-9.svg"
})

// ✅ On calcule la bonne URL de l’image
</script>

<template>
  <div class="flex gap-1 items-center justify-left mx-1">
    <img :src="props.img" :alt="props.name" class="w-16 h-16" />
    <span class="lg:text-2xl xs:text-xl font-clash">{{ props.name }}</span>
  </div>
</template>