import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import MenuView from './views/MenuView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/menu',
        name: 'Menu',
        component: MenuView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

export default router;