import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: layout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/About.vue'),
            },
            {
                path: '/SponsorExhaustion',
                name: 'SponsorExhaustion',
                component: () => import('../views/SponsorExhaustion.vue'),
            },
            {
                path: '/BorrowProposition',
                name: 'BorrowProposition',
                component: () => import('../views/BorrowProposition.vue'),
            },
            {
                path: '/BorrowingRules',
                name: 'BorrowingRules',
                component: () => import('../views/BorrowingRules.vue'),
            },
            {
                path: '/RepaymentRules',
                name: 'RepaymentRules',
                component: () => import('../views/RepaymentRules.vue'),
            },
            {
                path: '/BorrowingOrder',
                name: 'BorrowingOrder',
                component: () => import('../views/BorrowingOrder.vue'),
            },
            {
                path: '/Security',
                name: 'Security',
                component: () => import('../views/Security.vue'),
            },
        ]
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
