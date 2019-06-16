import Vue from 'vue'
import axios from 'axios';
import Sugar from 'Sugar';
import $ from 'jquery';
import regist from './component/member/regist.vue'


window.$ = window.jQuery = $;
window.Vue = Vue
window.axios = axios
Vue.component('regist-component', regist)

new Vue({
    el:'#app'
})
