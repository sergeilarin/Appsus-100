// import emailDetails from './apps/mail/pages/email-details.js';
import homePage from './pages/home-page.js';
import keepApp from './apps/keep/pages/keep-app.js';
import  mailApp from './apps/mail/pages/email-app.js';


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
    // {
	// 	path: '/mail/:emailId',
	// 	component: emailDetails,
	// },
];

export const router = new VueRouter({ routes });
