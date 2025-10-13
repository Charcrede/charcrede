<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import ProjectSection from '@/components/ProjectSection.vue';
import BackGround from '../components/BackGround.vue'
import explotel1 from '@/assets/explotel1.png'
import explotel2 from '@/assets/explotel2.png'
import explotel3 from '@/assets/explotel3.png'
import quizzer1 from '@/assets/quizzer1.png'
import quizzer2 from '@/assets/quizzer2.png'
import quizzer3 from '@/assets/quizzer3.png'
import typanime1 from '@/assets/typanime1.png'
import typanime2 from '@/assets/typanime2.png'
import typanime3 from '@/assets/typanime3.png'
import cassebrick1 from '@/assets/cassebrick1.png'
import cassebrick2 from '@/assets/cassebrick2.png'
import cassebrick3 from '@/assets/cassebrick3.png'
import communal1 from '@/assets/communal1.png'
import communal2 from '@/assets/communal2.png'
import communal3 from '@/assets/communal3.png'
import numvirtual1 from '@/assets/numvirtual1.png'
import numvirtual2 from '@/assets/numvirtual2.png'
import numvirtual3 from '@/assets/numvirtual3.png'
import wafupay1 from '@/assets/wafupay1.png'
import wafupay2 from '@/assets/wafupay2.png'
import wafupay3 from '@/assets/wafupay3.png'
import next from '@/assets/next.svg'
import flutter from '@/assets/flutter.svg'
import laravel from '@/assets/laravel.svg'
import django from '@/assets/django.svg'
import javascript from '@/assets/javascript.svg'
import nest from '@/assets/NestJS.svg'



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
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            projects: [
                {
                    title: 'Explotel',
                    description: 'Billetterie en ligne, réservez des tickets événements et expériences uniques au Bénin.',
                    more: 'Site web, Explotel',
                    url: 'https://explotel.com/',
                    images: [
                        explotel1,
                        explotel2,
                        explotel3
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
                    imagePosition: 'left',
                    boldWords: ['Billetterie en ligne', 'uniques au Bénin'],
                    loop: true,
                },
                {
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
                },
                {
                    title: 'Quizzer',
                    description: 'Une appli qui teste tes connaissances sur les animés',
                    more: 'Application, Charcre-bailse',
                    url: 'https://anime-quizzer.vercel.app/',
                    images: [
                        quizzer1,
                        quizzer2,
                        quizzer3,
                    ],
                    technologies: [
                        {
                            name: 'Flutter',
                            icon: flutter,
                            class: 'h-24 w-24'
                        }
                    ],
                    imagePosition: 'left',
                    loop: false,
                    pagination: false,
                    boldWords: ['teste tes connaissances'],
                },
                {
                    title: 'Otaku type',
                    description: 'Aide à améliorer sa vitesse de saisie tout en s\'amusant',
                    more: 'Site web, Charcre-bailse',
                    url: 'https://typanime.vercel.app/',
                    images: [
                        typanime1,
                        typanime2,
                        typanime3
                    ],
                    technologies: [
                        {
                            name: 'Next js',
                            icon: next,
                            class: 'h-24 w-24'
                        }
                    ],
                    imagePosition: 'right',
                    loop: true,
                    pagination: true,
                    boldWords: ['vitesse de saisie', "s'amusant"],
                },
                {
                    title: 'Wafupay',
                    description: 'Transfert d\'argent en toute sécurité dans la zone de l\' UEMOA',
                    more: 'Entreprise, Edoutech',
                    url: 'https://wafupay.com/',
                    images: [
                        wafupay1,
                        wafupay2,
                        wafupay3
                    ],
                    technologies: [
                        {
                            name: 'Next js',
                            icon: next,
                            class: 'h-20 w-20'
                        },
                        {
                            name: 'Django',
                            icon: django,
                            class: 'h-20 w-20'
                        }
                    ],
                    imagePosition: 'left',
                    loop: false,
                    pagination: false,
                    boldWords: ['argent', 'sécurité', 'UEMOA'],
                },
                {
                    title: 'Casse-brick',
                    description: 'Amusez vous à casser des briques',
                    more: 'Site web, Charcre-bailse',
                    url: 'https://charcrede.github.io/casse-brick/',
                    images: [
                        cassebrick1,
                        cassebrick2,
                        cassebrick3
                    ],
                    technologies: [
                        {
                            name: 'Javascript',
                            icon: javascript,
                            class: 'h-24 w-24'
                        }
                    ],
                    imagePosition: 'right',
                    loop: false,
                    pagination: false,
                    boldWords: ['Amusez', 'casser des briques'],
                },
                {
                    title: 'Numvirtual',
                    description: 'Offrez vous des<span class="font-semibold"> numéro virtuel</span> de partout dans le <span class="font-semibold">monde</span>',
                    more: 'Site web, Edoutech',
                    url: 'https://numvirtual.com/',
                    images: [
                        numvirtual1,
                        numvirtual2,
                        numvirtual3
                    ],
                    technologies: [
                        {
                            name: 'Laravel',
                            icon: laravel,
                            class: 'h-24 w-24'
                        }
                    ],
                    imagePosition: 'left',
                    loop: false,
                    pagination: false,
                    boldWords: ['numéro virtuel', 'monde'],
                }
            ]
        };
    },
}
</script>


<template>
    <article class="lg:mt-48 xs:mt-24 lg:px-56 xs:px-8 relative flex flex-col lg:gap-32 xs:gap-16">
        <h2 class="lg:text-[3rem] xs:text-[1.5rem] text-center font-semibold font-clash lg:mb-8 xs:mb-0 text-white">
            Quelques projets</h2>
        <BackGround />
        <ProjectSection v-for="(project, index) in projects" :key="index" :title="project.title"
            :description="project.description" :more="project.more" :link="project.url" :boldWords="project.boldWords"
            :images="project.images" :imagePosition="project.imagePosition" :technologies="project.technologies"/>
    </article>
</template>

<style></style>