<template>
  <div v-show="isshowpref">
    <button class="btn btn-primary" v-on:click="checkPref">県択</button>
    <div>
      <li class="l_20" v-for="(pref, index) in prefs" :key=index>
      </li>
    </div>
  </div>
</template>
<script src="./pref.js">
