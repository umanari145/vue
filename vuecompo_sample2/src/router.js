import Vue from 'vue'
import VueRouter from 'vue-router'

import regist from './component/member/regist.vue'
import edit from './component/member/edit.vue'
import list from './component/member/list.vue'
import todo from './component/todo.vue'
import mixibase from './component/mixibase.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/list',
            component:list
        },
        {
            path:'/todo',
            component:todo
        },
        {
            path:'/mixisample',
            component:mixibase
        },
        {
            path:'/regist',
            component:regist
        },
        {
            path:'/edit/:hash_key',
            component:edit
        }
    ]
})

export default router
