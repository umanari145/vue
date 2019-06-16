import Vue from 'vue'
import axios from 'axios';
import Sugar from 'Sugar';
import $ from 'jquery';
import firebase from 'firebase';
import {firebaseConfig} from './config.js'
import regist from './component/member/regist.vue'

firebase.initializeApp(firebaseConfig);

window.$ = window.jQuery = $;
window.Vue = Vue
window.axios = axios
window.firebase = firebase
Vue.component('regist-component', regist)

new Vue({
    el:'#app'
})
