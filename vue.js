window.onload = function() {

	var demo = new Vue({
		el : '#demo',
		data : {
			message : 'Hello world'
		}
	})

	var app = new Vue({
		el : '#app',
		data : {
			todos : [ {
				text : 'homerun'
			}, {
				text : 'two base'
			}, {
				text : 'three base'
			} ],
			message :'ok'
		},
		methods:{
			showMessage : function(){
				//スコープに注意!
				//functionの外の引数は取れない
				console.log(this.message);
			}
		}
	})

	var app = new Vue({
		el : '#app2',
		data : {
			todos : [ {
				text : 'homerun'
			}]
		},
		methods:{
			add : function(){
				var text = this.input.trim();
				console.log(text);
				if (text) {
					this.todos.push({text:text});
				}
			},
			remove:function(rowIndex){
				//indexの配列の位置を1つだけ削除
				this.todos.splice(rowIndex,1)
			}
		}
	})

}
