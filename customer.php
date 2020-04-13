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
<script src="./vue_common.js"></script>
<script src="./customer.js"></script>
<body>
	<div id="app" v-cloak>
        <ul>
            <li v-for="i in 4" :key="i">
                希望勤務地{{i}}
                <button @click="bootModal(i)">地域を追加</button>
            </li>
        </ul>
        <?php include_once('areaModal.php');?>
	</div>
</body>
</html>
