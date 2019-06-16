import Vue from 'vue'
import axios from 'axios';
import Sugar from 'Sugar';
import $ from 'jquery';
import firebase from 'firebase';
import {firebaseConfig} from './config.js'
//router内の処理よりも先にセットしたいのでここにかく
firebase.initializeApp(firebaseConfig);

import router from './router.js'

window.$ = window.jQuery = $;
window.Vue = Vue
window.axios = axios
window.firebase = firebase

new Vue({
    el:'#app',
    router
})
