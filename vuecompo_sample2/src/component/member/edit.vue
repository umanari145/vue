<template>
    <div>
        <ul>
            <li>
                <span>名前</span>
                <!--v-modeのみで値セットとbind両方-->
                <input type="text" v-model="member.name">
            </li>
            <li>
                <span>メールアドレス</span>
                <input type="text" v-model="member.email">
            </li>
            <li>
                <button v-on:click="updateMember">
                    登録
                </button>
            </li>
        </ul>
    </div>

</template>
<script>
import Sugar from 'Sugar';

export default {
  name: 'App',
  methods:{
    updateMember() {
        this.database.ref('member')
                     .child(this.hash_key)
                     .update({
                         name:this.member.name,
                         email:this.member.email
                     })
    }
  },
  created(){
      this.hash_key = this.$route.params.hash_key
      this.database = firebase.database()
      this.memberRef = this.database.ref('member').child(this.hash_key)
      console.log('honjituhaseitenari')
      this.memberRef.on('value',(snapshop) => {
          this.member = snapshop.val()
      })

  },
  data(){
    return {
        member:''
    }
  }
}
</script>
