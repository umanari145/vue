window.onload = function() {

	var link = 'http://localhost/vue/kenapi.py?area_type=pref'
	var citylink = 'http://localhost/vue/kenapi.py?area_type=city&pref='
	var townlink = 'http://localhost/vue/kenapi.py?area_type=town&pref='

	var app = new Vue({
		el : '#app',
		data : {
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
		},
		methods:{
			checkPref: function(){
				var selectedPref = Sugar.String(this.selectedPref)
				if (!selectedPref.isBlank().raw ){
					citylink2 = citylink + selectedPref.raw
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
					townlink2 = townlink + this.selectedPref + '&city=' + cityStr
					axios.get(townlink2).then(response => {
						townsRes = response.data;
						this.groupCities = Sugar.Array(townsRes).groupBy('city').raw
						this.isshowcity = 0
						this.isshowtown = 1
					});
				}
			}
		},
		created:function(){
			//↓のように書かないとthisがvue instanceをさしていないため
			//画面の値が更新されない
			//https://teratail.com/questions/103176
			axios.get(link).then(response => {
				this.prefs = response.data;
			});
		}
	})
}
