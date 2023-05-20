import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            component: () => import('@/components/login')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/login')
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('@/components/home'),
            children: [{
                path: '/home/one',
                component: () => import('@/components/one')
            }, {
                path: '/hometwo',
                component: () => import('@/components/two')
            }]
        }],
    mode: 'hash'
})
export default router

// import Vue from 'vue'
// import Router from "vue-router";
// // import Home from '@/components/HelloWorld'
// // import { resolve } from 'core-js/fn/promise';
// Vue.use(Router)
// const router = new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: 'login',
//             component: () => import('@/components/login'),
//         },
//         {
//             path: '/login',
//             name: 'login',
//             component: () => import('@/components/login'),
//         },
//         {
//             path: '/home',
//             // component: Home
//             // component:()=>import('@/components/HelloWorld'),路由懒加载 和异步加载
//             component: resolve => require(['@/components/home'], resolve)
//         }],
//     // hash history
//     mode: 'hash'
// })
// export default router