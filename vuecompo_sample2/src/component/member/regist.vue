<template>
    <div>
        <ul>
            <li>
                <span>名前</span>
                <input type="text" name="name" v-model="name">
            </li>
            <li>
                <span>メールアドレス</span>
                <input type="text" name="email" v-model="email">
            </li>
            <li>
                <button v-on:click="registMember">
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
    registMember() {
        let res = this.memberRef.push({
            name:this.name,
            email:this.email,
        })
        alert('無事登録ができました。')
    }
  },
  created(){
      this.database = firebase.database()
      //console.log(this.database)
      this.memberRef = this.database.ref('member')
  },
  data(){
    return {
        name:'',
        email:''
    }
  }
}
</script>
