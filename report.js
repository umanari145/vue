$(function(){

	Vue.component('hoge',hogeComponent)

	var app = new Vue({
		el : '#app',
		data : {
			constant_reports:[],
			amountSum:0,
			debt_lists:[]
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
			divNum(str) {
				if (str !== '' && str !== undefined && isNaN(str) === false) {
					return true;
				} else {
					return false;
				}
			},
			calcTax(index) {
				let price = this.constant_reports[index]['price']
				if (this.divNum(price)) {
					let tax = Math.floor(parseInt(price) * 0.1);
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
					.filter((v) => {
						return this.divNum(v['price']) && this.divNum(v['tax']);
					})
	 				.map(function(v,k){
						v['total'] = parseInt(v['price']) + parseInt(v['tax'])
						return v
	 				}).sum(function(v){
						return v['total']
					})
				this.amountSum = amountSum.raw
			},
			hasDebt() {
				if(this.amountSum >= 1) {
					//借金の必要あり
					return false;
				} else {
					//借金の必要なし(だからdisabled)
					return true;
				}
			},
			addDebtRow() {
				this.debt_lists.push({
					'price':''
				})
			},
			deleteDebtRow(debt_index) {
				this.debt_lists.splice(debt_index, 1);
			},
			canAddDelete() {
				return this.hasDebt;
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
		},
		mounted:function() {
			this.sumrize();
		}
	})
})
