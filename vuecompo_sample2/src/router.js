import Vue from 'vue'
import VueRouter from 'vue-router'

import regist from './component/member/regist.vue'
import list from './component/member/list.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:list
        },
        {
            path:'/regist',
            component:regist
        }
    ]
})

export default router
