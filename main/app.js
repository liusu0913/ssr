import Vue from 'vue';
import App from '../App.vue';
import createRouter from '../router/index';
import createStore from '../store/ssr-store';

export default function createApp() {
	const store = createStore();
	const router = createRouter();
	let app =  new Vue({
		router,
		store,
		render: h => h(App)
	});

	return {app, store, App, router};
};