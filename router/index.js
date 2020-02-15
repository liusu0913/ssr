import Vue from 'vue';
import App from '../App.vue';
import Router from 'vue-router';
import Nav from '../components/Nav.vue';
Vue.use(Router);
function createRouter() {
    const routes = [{
        path: '/',
        component: App
    },{
        path: '/nav',
        component: Nav
    }, {
        path: '/foo',
        component: () => import('../components/Foo.vue')
    }];

    const router = new Router({
        mode: 'history',
        routes
    });

    return router;
}

export default createRouter;
