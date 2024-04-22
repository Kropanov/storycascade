/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';

import index from '@/pages/index.vue';
import profile from '@/pages/profile.vue';

const routes = [
  { path: '/', component: index },
  { path: '/profile', component: profile },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes,
});

export default router;
