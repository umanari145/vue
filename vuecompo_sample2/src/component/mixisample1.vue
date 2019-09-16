<template>
    <div>
        <input type="button" @click="share" value="押してね">
    </div>
</template>
<script>

import {mixin} from './mixin.js'
console.log(mixin)
export default {
    mixins:[mixin]
}
</script>
