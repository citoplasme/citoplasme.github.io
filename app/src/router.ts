import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const defaultRoutes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import("./views/home.vue"),
		meta: {
			public: true,
		},
	},
	{
		name: 'about',
		path: '/about',
		component: () => import("./views/about.vue"),
		meta: {
			public: true,
		},
	},
	{
		name: 'publications',
		path: '/publications',
		component: () => import("./views/publications.vue"),
		meta: {
			public: true,
		},
	},
	{
		name: 'projects',
		path: '/projects',
		component: () => import("./views/projects.vue"),
		meta: {
			public: true,
		},
	},
	{
		name: 'non-existent',
		path: '/:_(.+)+',
    redirect: '/',
	},
];

export default createRouter({
	history: createWebHistory(),
	routes: defaultRoutes,
});