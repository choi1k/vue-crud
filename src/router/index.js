import { createWebHistory, createRouter } from "vue-router";
import Users from '@/components/Users.vue'
import UserPage from '@/components/UserPage.vue'


const routes = [
    {
        path: '/',
        name: 'Users',
        component: Users
    },
    {
        path: '/user/:id',
        name: 'UserPage',
        component: UserPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router