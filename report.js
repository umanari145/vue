$(function(){

	Vue.component('hoge',hogeComponent)

	var app = new Vue({
		el : '#app',
		data : {
			constant_reports:[],
			amountSum:0
		},
		methods:{
			addRow() {
				this.constant_reports.push({
					'date':'',
					'type':'',
					'price':'',
					'tax':''
				})
			},
			deleteRow(index) {
				this.constant_reports.splice(index,1)
			},
			convertNumber(str) {
				return Sugar.Number.format(str);
			},
			convertNum(str) {
				if (str !== '' && str !== undefined && isNaN(str) === false) {
					return parseInt(str);
				} else {
					return '';
				}
			},
			calcTax(index) {
				let price = this.constant_reports[index]['price']
				if (this.convertNum(price)) {
					let tax = Math.floor(this.convertNum(price) * 0.1);
					this.constant_reports[index]['tax'] = tax
				}
			},
			sumrize() {
				let amountSum = 0;
				amountSum =
					Sugar.Array(this.constant_reports)
	 				.filter(function(v){
						return v.type == '1'
					})
	 				.map(function(v,k){
						v['total'] = parseInt(v['price']) + parseInt(v['tax'])
						return v
	 				}).sum(function(v){
						return v['total']
					})
				this.amountSum = amountSum.raw
			}
		},
		created:function(){
			this.constant_reports = [
				{
					'date':'2012/12/23',
					'type':'1',
					'price':'600',
					'tax':60
				},
				{
					'date':'2012/12/23',
					'type':'1',
					'price':'6800',
					'tax':60
				},
				{
					'date':'2012/12/24',
					'type':'2',
					'price':'400',
					'tax':40
				},
				{
					'date':'2012/12/24',
					'type':'3',
					'price':'400',
					'tax':40
				}
			]
		}
	})
})
