import emailDetails from './apps/mail/pages/email-details.js';
import homePage from './pages/home-page.js';
import  mailApp from './apps/mail/pages/email-app.js';
import keepApp from './apps/keep/keep.js';


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp,
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
		path: '/mail/:emailId',
		component: emailDetails,
	},
];

export const router = new VueRouter({ routes });
