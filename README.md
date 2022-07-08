#vue

## ファイル概要

### vueサンプル(超基礎)
- index.html+vue.js cdn読み込み+vueの一番簡単でシンプルなパターン(blur時にtodoに入れる)

### vueサンプル(基本文法)
- d01.html 基本文法の説明
- d01.js   基本文法の説明(javascipt)

### Redis KVS(超高速:12万件の登録、読み込みがすぐなため)
- redis
    - RedisUtil.php Redisに関わる処理全般を記録
    - importCSVtoRedis.php RedisUtilを読み込んで登録を行う(2秒で終わる)
    - zenkoku.csv 住所録の元データ
### vueサンプル(都道府県パネル＋基本ライブラリの読み込み+vue)
- index2.html 都道府県の選択による画面化 cdn読み込み(vue+vue.resource)
- resources/js/sample_rs.js まとめて読み込みたいライブラリ(jQuery,Sugar,bootstrapなど)
- resources/css/common.scss まとめて読み込みたいcss(bootstrap)
- vue2.js フロント側でのvueの実際の処理
- js/build.js 成果物JS
- css/common.css 成果物CSS
- config.js コンパイル時の設定ファイル


#### コンパイルコマンド
```
npm run gulp
```

- utilib/fileutil.py 外部ファイルのダウンロード
- utilib/dbutil.py  DB処理
- config.yaml DBの設定ファイル
- kenapi.py pythonでの県リストなどを返すRESTAPI

### vueサンプル(templateの活用 不完全)
- index3.html cdnではなくコンパイル式＋コンポーネントタイプ

- vueresource/app.js   ライブラリ(vue+コンポーネント)の読み込みファイル
- vueresource/pref.js  vueの実処理をするjs
- vueresource/pref.vue コンポーネント
- vuedist/build.js 成果物のjs
- webpack.config.js コンパイル時の設定ファイル

#### コンパイルコマンド
```
npx webpack   --mode development  --config ./webpack.config.js
```

### vueサンプル(npmライブラリ読み込み＋外部ファイル 不完全)
- index4.html コンパイル式＋外部ファイル式
- resoure4.js ソースファイル(Vue+VueResource)
- build4.js 成果物

#### コンパイルコマンド
```
npx webpack --mode development resource4.js --output ./build4.js
```

### vueサンプル(npmライブラリ読み込みvue,axios,jquery,Sugar＋外部ファイル )
- index5.html コンパイル式＋外部ファイル式
- resoure5.js ソースファイル(Vue+axios+Sugar)
- build5.js 成果物

#### コンパイルコマンド
```
npx webpack --mode development resource5.js --output ./build5.js
```

### vueサンプル(laravel-mix npmライブラリ読み込みvue,axios,jquery,Sugar＋component化)
- vuecompo_sample/dist 成果物
- vuecompo_sample/src/app.js JSのエントリーポイント
- vuecompo_sample/src/config.js 設定ファイル
- vuecompo_sample/src/component/CheckPref.vue コンポーネント
- vuecompo_sample/src/component/checkpref.js checkprefのJS
- vuecompo_sample/src/component/checkpref.html checkprefのhtml
- vuecompo_sample/webpack.mix.js laravel-mixの設定ファイル
- vuecompo_sample/build.js 成果物

#### コンパイルコマンド
```
npm run dev
```

### vueサンプル2(laravel-mix npmライブラリ読み込みvue,axios,jquery,Sugar＋component化+vue-router+Firebase+vuex+mixins)
- vuecompo_sample2/dist 成果物
- vuecompo_sample2/src/app.js JSのエントリーポイント
- vuecompo_sample2/src/config.js 設定ファイル(主にfirebaseの情報)
- vuecompo_sample2/src/component/regist(新規登録),list(一覧),edit(編集)のそれぞれのコンポーネント
- vuecompo_sample2/src/store vuex関連の処理
- vuecompo_sample2/src/component/mixin* mixinがらみの処理全般
- vuecompo_sample2/webpack.mix.js laravel-mixの設定ファイル
- vuecompo_sample2/.htaccess htaccess
- vuecompo_sample2/build.js 成果物

#### コンパイルコマンド
```
npm run dev
#監視(app.jsで読み込んだファイル全てが対象に)
npm run watch

```
### よくある帳票系の計算プログラム(cdnのsugar+vue)
コンパイルをせずにjQueryのように手軽に使えるかどうかの実験
- report.js
- report.php

### よくある顧客管理のプログラム(cdnのsugar+vue)
コンパイルをせずにjQueryのように手軽に使えるかどうかの実験
- customer.js
- customer.php


### vueのいろいろなサンプル
(Vue.js入門 基礎から実践アプリケーション開発まで )
https://www.amazon.co.jp/Vue-js%E5%85%A5%E9%96%80-%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E5%AE%9F%E8%B7%B5%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA%E3%81%BE%E3%81%A7-%E5%B7%9D%E5%8F%A3-%E5%92%8C%E4%B9%9F/dp/4297100916/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=

- filter,computed,lifecycleについて
    - filter_computed.html filterとcomputedについて
    - lifecycle.html ライフサイクルについて
- component
    - component_basic.html コンポーネント
    - parent_children_component.html 親子のコンポーネント 
    - pa_chi_compo_event.html emitでの子→親への伝播
    - login_component.html ログインコンポーネントのサンプル
- vue-router
    - vue_router.html vuerouterを使った簡単なサンプル
- 特殊なエフェクト系
    - animation.html v-XXXX系のcss
    - pulldown.html  mouseover(leave)などのエフェクト
- slot
    - basic_slot.html
    - named_slot.html
    - scoped_slot.html
- custom_directive 独自のディレクティブ(v-if,v-showみたいなものを独自に作る)
    - custom_directive
- mixin 継承に近い
    - mixin.html 通常のmixin (再利用可能なパーツの内部的な動きなど)
    - global_mixin.html 全パーツ共通での動き(loginなど)


