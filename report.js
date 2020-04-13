$(function(){

	Vue.component('hoge',hogeComponent)

	var app = new Vue({
		el : '#app',
		data : {
			constant_reports:[],
			amountSum:0,
			amountSumIncLump:0,
			debt_lists:[],
			lump_sum_repayment_type:'',
			lump_amount:'',
			has_debt_check:false,
			last_remaining:'',
		},
		methods:{
			remaing_debt(debt_index){
				let debt = this.amountSumIncLump;
				let debt_remaing = 0;
				for(var i = 0; i <= debt_index; i++) {
					let subtract =  this.debt_lists[i]['debt_price'];
					if (this.divNum(subtract)) {
						debt_remaing += parseInt(subtract);
					}
				}
				this.debt_lists[debt_index]['remaining'] = debt - debt_remaing;
  			  	return debt - debt_remaing;
			},
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
			hasDebtIncLump() {
				if(this.lump_sum_repayment_type == '1') {
					this.amountSumIncLump = this.amountSum - this.lump_amount;
				} else {
					this.amountSumIncLump = this.amountSum;
				}

				if (this.amountSumIncLump >= 1) {
					return false;
				} else {
					return true;
				}
			},
			addDebtRow() {
				this.debt_lists.push({
					'debt_price':'',
					'remaining':''
				})
			},
			deleteDebtRow(debt_index) {
				this.debt_lists.splice(debt_index, 1);
			},
			disabledAddDelete() {
				if (this.hasDebtIncLump() || this.has_debt_check == false || this.isRemaining() || this.hasBlank()) {
					return true;
				} else {
					return false;
				}
			},
			isRemaining() {
				let debt = this.amountSumIncLump;
				let remainingSum =
					Sugar.Array(this.debt_lists)
					.filter((v) => {
						return this.divNum(v['debt_price']);
	 				}).sum(function(v){
						return parseInt(v['debt_price']);
					})

				return (debt - remainingSum.raw <= 0);
			},
			hasBlank() {
				let blankDebt = Sugar.Array(this.debt_lists)
				.count((v) => {
					return this.divNum(v['debt_price']) == false;
				})
				return blankDebt >= 1;
			},
			alertDebt() {
				if (this.has_debt_check == false) {
					if(!window.confirm('借金返済の列を削除しますか？')) {
						return false
					}
					this.debt_lists = [];
				}
			}

		},
		watch:{
			'amountSumIncLump':function(val) {
				if(this.has_debt_check == true &&
					this.debt_lists.length >=1 &&
					val <= 0) {
					if(!window.confirm('借金がなくなり個別の借金は不必要になりそうです。クリアして構いませんか？')) {
						return false;
					}
					this.has_debt_check = false;
					this.debt_lists = [];
				}
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
