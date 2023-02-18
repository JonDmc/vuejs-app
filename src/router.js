import HomePage from './pages/HomePage.vue';
import SendPage from './pages/SendPage.vue';
import CashInPage from './pages/CashInPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/cash-in',
        component: CashInPage,
    },
    {
        path: '/send',
        component: SendPage,
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})