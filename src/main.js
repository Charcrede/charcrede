import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import du routeur

import './assets/global.css'

const app = createApp(App);

app.use(router); // Intégration du routeur à l'application

app.mount('#app');
