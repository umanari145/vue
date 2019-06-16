import Sugar from 'Sugar';


export default {
  name: 'App',
  methods:{
    edit() {
        console.log('aaaa')
    }
  },
  created(){
      this.database = firebase.database()
      //console.log(this.database)
      this.memberRef = this.database.ref('member')
      this.member_list = new Array()
      this.memberRef.on('value',(snapshop) => {
          let members = snapshop.val()

          for(var hashKey in members) {
              let eachMember = members[hashKey]
              eachMember.hash_key = hashKey
              this.member_list.push(eachMember)
          }
      })
  },
  data(){
    return {
        member_list:[]
    }
  }
}
