import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Hello from '../components/Hello.vue'
import Model from '../components/Model.vue'


/**
 * 路由列表
 */
export enum ROUTE  {
    /** 主页 */
    HOME =  "HOME",
    /** MODAL框框 */
    MODAL = "MODAL",
    NOT_FIND = "NOT_FIND"
}


const routes :RouteRecordRaw[] = [
    { path: "/", name: ROUTE.HOME,  component: Hello },
    { path: "/modal", name: ROUTE.MODAL, component: Model },
    { path: "/:patchMatch(.*)*",  redirect: { name: ROUTE.HOME } }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

