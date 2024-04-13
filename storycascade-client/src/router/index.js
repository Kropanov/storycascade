/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';

import { defineAsyncComponent } from 'vue';

const pages = import.meta.glob('./src/pages/*.vue');

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/src\/pages\/(.+)\.vue$/)?.[1];
  const component = defineAsyncComponent(() => import(`./pages/${name}.vue`));
  return { path: `/${name.toLowerCase()}`, component };
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes: {
    ...routes,
  },
});

export default router;
