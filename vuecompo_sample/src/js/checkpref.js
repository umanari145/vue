import Sugar from 'Sugar';

var link = 'http://localhost/vue/kenapi.py?area_type=pref'
var citylink = 'http://localhost/vue/kenapi.py?area_type=city&pref='
var townlink = 'http://localhost/vue/kenapi.py?area_type=town&pref='

export default {
  name: 'App',
  methods:{
     func1(){
        alert('hogehoge foo')
    },
    checkPref() {
        var selectedPref = Sugar.String(this.selectedPref)
        if (!selectedPref.isBlank().raw ){
            var citylink2 = citylink + selectedPref.raw
            axios.get(citylink2).then(response => {
                this.cities = response.data;
                this.isshowpref = 0
                this.isshowcity = 1
            });
        }
    },
    checkTown : function(){
        if (this.selectedCities.length >0){
            var cityStr = this.selectedCities.join(",")
            var townlink2 = townlink + this.selectedPref + '&city=' + cityStr
            axios.get(townlink2).then(response => {
                var townsRes = response.data;
                this.groupCities = Sugar.Array(townsRes).groupBy('city').raw
                this.isshowcity = 0
                this.isshowtown = 1
            });
        }
    }
  },
  created(){
      axios.get(link).then(response => {
          this.prefs = response.data;
      });
  },
  data(){
    return {
       prefs:[],
       selectedPref:'',
       isshowpref:1,
       cities:[],
       selectedCities:[],
       isshowcity:0,
       towns:[],
       selectedTowns:[],
       isshowtown:0,
       groupCities:[]
    }
  }
}
