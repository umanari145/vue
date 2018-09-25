
window.Vue = require('vue');
window.Sugar = require('Sugar')

import Vue from 'vue'
import Pref from './pref.vue';

new Vue({
    el: '#app',
    components:{Pref},
    template:'<pref></pref>'
});
