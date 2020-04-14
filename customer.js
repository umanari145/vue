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
			is_pref_active:true,
			is_pref_disabled:false,
			is_town_active:false,
			is_town_disabled:true,
			selected_prefs:[],
			selected_prefs_str:[],
			selected_prefs_str_concat:[],
			target_index:'',
			master_pref_hash:{},
		},
		methods:{
			bootModal(i) {
				this.target_index = i;
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
				if (this.selected_prefs[this.target_index].length >= 2) {
					if (this.selected_prefs[this.target_index].indexOf(prefCode) < 0) {
						return true;
					} else {
						return false
					}
				} else {
					return false;
				}
			},
			selectPref() {
				this.selected_prefs_str[this.target_index] = [];
				for(var i = 0 ;i < this.selected_prefs[this.target_index].length; i++) {
					let prefCode = this.selected_prefs[this.target_index][i];
					let prefName = this.master_pref_hash[prefCode];
					this.selected_prefs_str[this.target_index].push(prefName)
				}
				Vue.set(this.selected_prefs_str_concat, this.target_index, this.selected_prefs_str[this.target_index].join(','));
				this.$modal.hide('area_modal');
			},
			toSelectCity() {
				this.is_show_spinner = 1;
				let pref_cd_str = this.selected_prefs[this.target_index].join(',');
				$.ajax({
					url:`/vue/areaApi.php?area_mode=city&city_cds=${pref_cd_str}` ,
					type:'GET',
				}).done((res) => {
					if (res !== null) {
						data = JSON.parse(res);
					}
				}).fail((data) => {
					alert("サーバーとの通信に失敗しました。")
				}).always(()=>{
					this.is_show_spinner = 0;
				})
			},
			clearArea(i) {
				this.selected_prefs[i] = [];
				this.selected_prefs_str[i] = '';
				Vue.set(this.selected_prefs_str_concat, i, '');
			}
		},
		created:function(){
			for(var i = 1; i <= 4; i++) {
				this.selected_prefs[i] =[];
				this.selected_prefs_str[i] =[];
				this.selected_prefs_str_concat[i] = "";
			}
		},
		mounted:function() {

		}
	})
})
