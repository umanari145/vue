import Vue from 'vue'
import axios from 'axios';
import Sugar from 'Sugar';
import $ from 'jquery';
import checkPref from './component/CheckPref.vue'


window.$ = window.jQuery = $;
window.Vue = Vue
window.axios = axios
Vue.component('pref-component', checkPref)

new Vue({
    el:'#app'
})
