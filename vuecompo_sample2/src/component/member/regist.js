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
