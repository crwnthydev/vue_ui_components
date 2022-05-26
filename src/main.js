import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router';
import store from '@/store'
import components from "@/components/UI"

const application = createApp(App);

components.forEach(element => {
    application.component(element.name, element)
});

application.use(store).use(router).mount('#app');
