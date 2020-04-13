$(function(){

	var Util = new Utility();

	Vue.use(window["vue-js-modal"].default);

	var app = new Vue({
		el : '#app',
		data : {
			hope_regident_list:[],
			is_show_modal:false
		},
		methods:{
			bootModal(i) {
				this.$modal.show('area_modal');
			},
			getPref() {
				$.ajax({
					url:this.apiUrl + 'prefectures',
					type:'GET',
					headers:{
						'X-API-KEY':this.apiKey
					}
				}).done((data) => {
					let pref_html = '';
					if (data['result'] !== undefined && data['result'].length > 0) {
						let pref_html = this.loadHtml(data,'pref', 6)
						$('#pref_table').html(pref_html)
					}
				}).fail((data) => {
					alert("サーバーとの通信に失敗しました。")
				}).always(()=>{
					
				})
			}
		},
		created:function(){
			this.constant_reports = []
		},
		mounted:function() {

		}
	})
})
