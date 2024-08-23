<template>
    <div>
      <!-- Curseur SVG personnalisé -->
      <svg
        :style="cursorStyle"
        :class="{ 'cursor-hover': isHovering }"
        class="custom-cursor xs:hidden lg:block"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12,2 22,12 12,22 2,12"
          stroke="white"
          fill="none"
          stroke-width="10"
          corner="none"
        />
      </svg>
      <!-- Exemple d'éléments interactifs -->
      <a href="#">Lien</a>
      <button>Button</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cursorX: 0,
        cursorY: 0,
        isHovering: false,
      };
    },
    computed: {
      cursorStyle() {
        return {
          left: `${this.cursorX}px`,
          top: `${this.cursorY}px`,
        };
      },
    },
    methods: {
      moveCursor(event) {
        this.cursorX = event.clientX;
        this.cursorY = event.clientY;
      },
      handleMouseOver(event) {
        if (event.target.matches('a, button')) {
          this.isHovering = true;
        }
      },
      handleMouseOut(event) {
        if (event.target.matches('a, button')) {
          this.isHovering = false;
        }
      },
    },
    mounted() {
      document.addEventListener('mousemove', this.moveCursor);
      document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mouseover', this.handleMouseOver);
        element.addEventListener('mouseout', this.handleMouseOut);
      });
    },
    beforeUnmount() {
      document.removeEventListener('mousemove', this.moveCursor);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseover', this.handleMouseOver);
        element.removeEventListener('mouseout', this.handleMouseOut);
      });
    },
  };
  </script>
  
  <style scoped>
  body {
    cursor: none; /* Masquer le curseur par défaut */
  }
  
  .custom-cursor {
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease, stroke 0.2s ease; /* Ajout de la transition pour le changement de couleur */
    z-index: 9999;
  }
  
  /* .cursor-hover {
    transform: translate(-50%, -50%) scale(1.5);
  } */

  .cursor-hover {
    transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
  } 
  </style>
  