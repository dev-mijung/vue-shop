import Vue from 'vue';
import VueRouter from 'vue-router';
import CartView from '../views/CartView.vue';
import DetailView from '../views/DetailView.vue';
import LoginView from '../views/LoginView.vue';
import MyPageView from '../views/MyPageView.vue';
import SignUpView from '../views/SignUpView.vue';
import MainView from '../views/MainView.vue';
import EventView from '../views/EventView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainView,
        },
        {
            path: '/cart',
            component: CartView,
        },
        {
            path: '/detail/:cate_idx',
            component: DetailView,
        },
        {
            path: '/login',
            component: LoginView,
        },
        {
            path: '/mypage',
            component: MyPageView,
        },
        {
            path: '/signup',
            component: SignUpView,
        },
        {
            path: '/event/:event_idx',
            component: EventView,
        }
    ]
});

console.log(router);