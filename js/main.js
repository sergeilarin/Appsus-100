import appsusHeader from './cmps/appsus-header.js';
import appsusFooter from './cmps/appsus-footer.js';
import { router } from './routes.js';
import userMsg from './apps/keep/cmps/user-msg.js';

const options = {
    el: '#app',
    router,
    template: `
        <section class="maim-app">
        <!-- <user-msg /> -->
        <section>
        <user-msg />
            <appsus-header />
            <router-view />
            <appsus-footer />
        </section>
    `,
    components: {
     
        appsusHeader,
        appsusFooter,
        userMsg
    }
};

const app = new Vue(options);
