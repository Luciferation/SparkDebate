// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AIDebateTrain from '../views/AIDebateTrain/AIDebateTrain.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: AIDebateTrain
    },
    {
        path: '/AIDebateTrain',
        name: 'AIDebateTrain',
        component: AIDebateTrain
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
