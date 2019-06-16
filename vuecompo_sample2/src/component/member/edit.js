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
