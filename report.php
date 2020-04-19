
<html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href='./css/common.css'></script>
<title>vue</title>
</head>
<style type="text/css">
.l_20{
	display:inline-block;
	width:20%
}
[v-cloak] {
  display: none;
}
#constant_reports li{
	display: inline-block;
}
</style>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.6/sugar.min.js" integrity="sha256-5AA1KsUNzfgrGh3+JagBdys+ArLrYa9Q2JkKfPioAS8=" crossorigin="anonymous">
 </script>
<script src="https://unpkg.com/vue"></script>
<script src="./vue_common.js"></script>
<script src="./hoge.js"></script>
<script src="./report.js"></script>
<body>
	<div id="app" v-cloak>
		<div id="constant_reports" @click="sumrize" @change="sumrize">
			<button  @click="addRow">
				追加
			</button>
			<ul>
				<li>年月</li>
				<li>タイプ</li>
				<li>金額</li>
				<li>消費税</li>
			</ul>
			<ul v-for="(each_constarnt_report, index) in constant_reports">
				<li>
					<input type="text" v-model="each_constarnt_report.date">
				</li>
				<li>
					<select v-model="each_constarnt_report.type">
						<option value=""></option>
						<option value="1">借金</option>
						<option value="2">完済</option>
						<option value="3">未納</option>
					</select>
				</li>
				<li>
					<input type="text"
					v-model="each_constarnt_report.price"
					@change="calcTax(index)">
				</li>
				<li>
					<input type="text" v-model="each_constarnt_report.tax">
				</li>
				<li>
					<button type="button" @click="deleteRow(index)">削除</button>
				</li>
			</ul>

			<div>
				<div>借金合計 {{amountSum | addCommma }}</div>
			</div>
		</div>
		<hoge>
		</hoge>

		<div class="">
			<select v-model="lump_sum_repayment_type">
				<option value=""></option>
				<option value="1" :disabled="hasDebt()">一括返済</option>
				<option value="2">倒産</option>
				<option value="3">債権譲渡</option>
			</select>

			<input type="text" v-model="lump_amount">
		</div>

		<div>
			<label for="has_debt">
				個別借金返済の必要あり
				<input type="checkbox" value="1" v-model="has_debt_check" id="has_debt" :disabled="hasDebtIncLump()" @change="alertDebt();">
			</label>
			<ul v-for="(each_debt, debt_index) in debt_lists">
				<li style="display:inline-block;">
					<input type="text" v-model="each_debt.debt_price" :disabled="hasDebtIncLump()">
				</li>
				<li style="display:inline-block;">
					借金残 {{remaing_debt(debt_index)}}
				</li>
				<input type="hidden" v-model="each_debt.remaining">
				<li style="display:inline-block;">
					<button @click="deleteDebtRow(debt_index)">
						削除
					</button>
				</li>
			</ul>
		</div>

		<button @click="addDebtRow()" :disabled="disabledAddDelete()">
			追加
		</button>
	</div>
</body>
</html>
