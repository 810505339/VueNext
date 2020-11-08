import {createRouter, RouteRecordRaw, createWebHashHistory} from 'vue-router'
import {HomeFilled} from '@ant-design/icons-vue'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/components/layout'),
        meta: {
            title: '首页',
            icon: HomeFilled
        },

    },
    {
        name: 'List',
        path: '/list',
        component: () => import('@/views/list'),
        meta: {
            title: 'list页面',
            icon: HomeFilled
        },
        children: [
            {
                name: 'List',
                path: 'list',
                component: () => import('@/views/list'),
                meta: {
                    title: 'list页面',
                    icon: HomeFilled
                },

            },
            {
                name: 'aList',
                path: 'aList',
                component: () => import('@/views/list'),
                meta: {
                    title: 'list页面',
                    icon: HomeFilled
                },

            },
        ]

    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
