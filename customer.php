<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href='./css/common.css'></script>
<title>customer</title>
</head>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.6/sugar.min.js" integrity="sha256-5AA1KsUNzfgrGh3+JagBdys+ArLrYa9Q2JkKfPioAS8=" crossorigin="anonymous">
 </script>
<script src="https://unpkg.com/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-js-modal@1.3.28/dist/index.min.js"></script>
<script src="https://unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>

<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css" />

<script src="./vue_common.js"></script>
<script src="./customer.js"></script>
<style type="text/css">
[v-cloak] {
  display: none;
}
li{
    list-style-type: none;
}
.pref_label{
    width: 200px;
}
</style>
<body>
	<div id="app" v-cloak>
        <ul>
            <li v-for="i in 4" :key="i">
                希望勤務地{{i}}
                <button @click="bootModal(i)">地域を追加</button>
                {{selected_prefs_str_concat[`${i}`]}}
                <button @click="clearArea(i)">地域をクリア</button>
            </li>
        </ul>
        <?php include_once('areaModal.php');?>
	</div>
</body>
</html>
