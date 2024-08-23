<template>
    <div class="relative group p-4 rounded-2xl">
        <button @click="downloadPDF"  class="lg:text-[3rem] xs:text-[1.5rem] text-center font-semibold font-clash text-white group-hover:text-black duration-300">
            Mon CV ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="lg:w-20 lg:h-20 xs:w-10 xs:h-10 inline fill-white group-hover:fill-black duration-300">
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
        </button>
        <div class="h-full absolute rounded-2xl top-0 left-0 -z-10 w-0 group-hover:w-full bg-white duration-300"></div>
    </div>
</template>

<script>
export default {
    methods: {
        downloadPDF() {
            const pdfPath = require('../assets/Charcre-bailse-Junior-Destimmense-Kingnon-14-07-2024.pdf'); // Chemin du PDF
            console.log(pdfPath)
            const link = document.createElement('a');
            link.href = pdfPath.default;
            link.download = 'CV-Charcre-bailse.pdf'; // Nom du fichier lors du téléchargement
            link.click();
        }
    }
}
</script>

<style scoped>
  .blend-multiply {
    mix-blend-mode: multiply;
    pointer-events: none;
}
</style>