<template>
  <div v-show="isshowpref">
    <button class="btn btn-primary" v-on:click="checkPref">県選択</button>
    <div>
      <li class="l_20" v-for="pref in prefs">
      </li>
    </div>
  </div>
</template>
<script src="./pref.js">
