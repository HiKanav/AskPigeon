import components from './components';
import VueRouter from 'vue-router'
import Vue from 'vue'

const mode = 'history';
const routes = [
    {
        path: '/test',
        name: 'Test',
        component: components.Test,
        meta: {
            title: 'Ping Api',
            auth: false,
        },
    },
    {
        path: '/',
        name: 'Login',
        component: components.Login,
        meta: {
            title: 'Login',
            auth: false,
        },
    }
];

Vue.use(VueRouter);
const router = new VueRouter({ mode, routes });

router.afterEach((to) => {
	Vue.nextTick(() => {
		document.title = to.meta.title || process.env.VUE_APP_NAME;
	});
});

export default router;