import Vue from 'vue'
import axios from 'axios';
import Sugar from 'Sugar';
import checkPref from './CheckPref.vue'

window.$ = window.jQuery = require('jquery');
window.Vue = Vue
window.axios = axios
Vue.component('pref-component', checkPref)

new Vue({
    el:'#app'
})
