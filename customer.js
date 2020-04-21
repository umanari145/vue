$(function(){

	var Util = new Utility();

	Vue.use(window["vue-js-modal"].default);

	var app = new Vue({
		el : '#app',
		data : {
			hope_regident_list:[],
			is_show_modal:false,
			is_show_spinner:0,
			prefs:[],
			cities:{},
			is_pref_active:true,
			is_pref_disabled:false,
			is_city_active:false,
			is_city_disabled:true,
			selected_prefs:[],
			selected_str_arr:[],
			selected_str_arr_concat:[],
			selected_cities:{},
			target_index:'',
			master_pref_hash:{},
			city_hash:{}
		},
		methods:{
			bootModal(i) {
				this.target_index = i;

				this.is_city_active = false;
				this.is_city_disabled = true;
				this.is_pref_active = true;
				this.is_pref_disabled = false;

				this.$modal.show('area_modal');
			},
			getPref() {
				this.is_show_spinner = 1;

				$.ajax({
					url:'/vue/areaApi.php?area_mode=pref',
					type:'GET',
				}).done((res) => {
					if (res !== null) {
						data = JSON.parse(res);
						if (data['result'] !== null && data['result'].length > 0) {
							this.prefs = data['result'];
							for(var i=0; i < data['result'].length; i++) {
								let prefCode = data['result'][i]['prefCode'];
								let prefName = data['result'][i]['prefName'];
								this.master_pref_hash[prefCode] = prefName;
							}
						}
					}
				}).fail((data) => {
					alert("サーバーとの通信に失敗しました。")
				}).always(()=>{
					this.is_show_spinner = 0;
				})

			},
			disableCheckPref(prefCode) {
				if (this.selected_prefs[this.target_index].length >= 2 &&
					this.selected_prefs[this.target_index].indexOf(prefCode) < 0) {
					return true;
				} else {
					return false;
				}
			},
			selectPref() {
				this.selected_str_arr[this.target_index] = [];
				for(var i = 0 ;i < this.selected_prefs[this.target_index].length; i++) {
					let prefCode = this.selected_prefs[this.target_index][i];
					let prefName = this.master_pref_hash[prefCode];
					this.selected_str_arr[this.target_index].push(prefName);
				}
				Vue.set(this.selected_str_arr_concat, this.target_index, this.selected_str_arr[this.target_index].join(','));
				this.$modal.hide('area_modal');
			},
			backToPref() {
				this.allClear();
				this.is_city_active = false;
				this.is_city_disabled = true;
				this.is_pref_active = true;
				this.is_pref_disabled = false;
			},
			toSelectCity() {
				this.is_show_spinner = 1;
				let pref_cd_str = this.selected_prefs[this.target_index].join(',');
				$.ajax({
					url:`/vue/areaApi.php?area_mode=city&city_cds=${pref_cd_str}` ,
					type:'GET',
				}).done((res) => {
					if (res !== null) {
						let data = JSON.parse(res);
						this.cities[this.target_index] = {};
						for(var pref_cd in data) {
							this.cities[this.target_index][pref_cd] = {};
							this.cities[this.target_index][pref_cd] = data[pref_cd]['result'];

							let result_length = data[pref_cd]['result'].length;
							for(var i = 0; i < result_length; i++) {
								let cityData = data[pref_cd]['result'][i];
								this.city_hash[cityData.cityCode] = cityData.cityName;
							}

							if (this.selected_cities[this.target_index][pref_cd] == null ||
								this.selected_cities[this.target_index][pref_cd] == undefined
							) {
								this.selected_cities[this.target_index][pref_cd] = [];
							}
						}
						this.is_pref_active = false;
						this.is_pref_disabled = true;
						this.is_city_active = true;
						this.is_city_disabled = false;
					}
				}).fail((data) => {
					alert("サーバーとの通信に失敗しました。")
				}).always(()=>{
					this.is_show_spinner = 0;
				})
			},
			clearArea(i) {
				this.selected_prefs[i] = [];
				this.selected_str_arr[i] = '';
				this.selected_cities[`${i}`] = {};
				Vue.set(this.selected_str_arr_concat, i, '');
			},
			disableCheckCity(pref_cd, cityCode) {
				if (this.selected_cities[this.target_index][pref_cd] !== undefined && 
					this.selected_cities[this.target_index][pref_cd].length >=4 &&
					this.selected_cities[this.target_index][pref_cd].indexOf(cityCode) < 0) {
					return true;
				} else {
					return false;
				}
			},
			forceUpdate() {
				this.$forceUpdate();
			},
			allClear() {
				for(var pref_cd in this.selected_cities[this.target_index]) {
					this.selected_cities[this.target_index][pref_cd] = [];
				}
				this.forceUpdate();
			},
			prefClear(pref_cd) {
				this.selected_cities[this.target_index][pref_cd] = [];
				this.forceUpdate();
			},
			selectCity() {
				this.selected_str_arr[this.target_index] = [];
				let pref_cds = [];
				let pref_cd_arr_str = '';
				let selected_str_arr = [];
				for(var pref_cd in this.selected_cities[this.target_index]) {
					pref_cds = this.selected_cities[this.target_index][pref_cd];
					if (pref_cds.length > 0) {
						pref_cd_arr_str = Sugar.Array(pref_cds)
					   		.map((v,k) => { return this.city_hash[v];}).join(',');
						selected_str_arr.push(`${this.master_pref_hash[`${pref_cd}`]} ${pref_cd_arr_str}`);
					}
				}
				Vue.set(this.selected_str_arr_concat, this.target_index, selected_str_arr.join(','));
				this.$modal.hide('area_modal');
			}
		},
		created:function(){
			for(var i = 1; i <= 4; i++) {
				this.selected_prefs[i] = [];
				this.selected_cities[i] = {};
				this.selected_str_arr[i] =[];
				this.selected_str_arr_concat[i] = "";
			}
		},
		mounted:function() {

		}
	})
})
