

window.onload = function() {

	var link = 'http://localhost/kenapi.php?area_type=pref'
	var citylink = 'http://localhost/kenapi.php?area_type=city&pref='
	var townlink = 'http://localhost/kenapi.php?area_type=town&pref='

	var app = new Vue({
		el : '#app',
		data : {
			prefs:[],
			selectedPrefCode:'',
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
			checkPref : function(){
				let selectedPrefCode = this.pref.prefCode;
				console.log(selectedPrefCode);
				if (!selectedPref.isBlank().raw ){
					citylink2 = citylink + selectedPref.raw
					this.$http.get(citylink2).then(function(response){
						this.cities = response.data;
						this.isshowpref = 0
						this.isshowcity = 1
					}, function(error){
						console.log(error.statusText);
					});
				}
			},
			checkTown : function(){
				if (this.selectedCities.length >0){
					var cityStr = this.selectedCities.join(",")
					townlink2 = townlink + this.selectedPref + '&city=' + cityStr
					this.$http.get(townlink2).then(function(response){
						townsRes = response.data;
						this.groupCities = Sugar.Array(townsRes).groupBy('city').raw
						this.isshowcity = 0
						this.isshowtown = 1
					}, function(error){
						console.log(error.statusText);
					});
				}
			}
		},
		created:function(){
			this.$http.get(link).then(function(response){
				this.prefs = response.data['data'];
			}, function(error){
				console.log(error.statusText);
			});
		}
	})
}
