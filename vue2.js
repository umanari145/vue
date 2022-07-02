

window.onload = function() {

	var link = 'http://localhost/kenapi.php?area_type=pref'
	var citylink = 'http://localhost/kenapi.php?area_type=city&pref_cd='
	var townlink = 'http://localhost/kenapi.php?area_type=town&city_cd='

	var app = new Vue({
		el : '#app',
		data : {
			prefs:[],		
			selected_pref_cd:'',
			isshowpref:1,
			cities:[],
			// 以下を配列で定義する→checkboxは値
			// 文字列で定義→checkboxがtrue or false
			selected_cities_cd:[],
			isshowcity:0,
			selected_towns:[],
			isshowtown:0,
			group_cities:[]
		},
		methods:{
			checkPref : function(){
				if (this.selected_pref_cd !== ''){
					let citylink2 = citylink + this.selected_pref_cd
					this.$http.get(citylink2).then(function(response){
						this.cities = response.data['data'];
						this.isshowpref = 0
						this.isshowcity = 1
					}, function(error){
						console.log(error.statusText);
					});
				}
			},
			checkTown : function(){
				if (this.selected_cities_cd.length >0){
					var city_str = this.selected_cities_cd.join(",")
					let townlink2 = townlink + city_str
					console.log(townlink2);
					this.$http.get(townlink2).then(function(response){
						this.group_cities = response.data['data'];
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
