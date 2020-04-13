#vue

## ファイル概要

### vueサンプル(超基礎)
- index.html cdn読み込み+vueの一番簡単でシンプルなパターン

### vueサンプル(基本文法)
- d01.html 基本文法の説明
- d01.js   基本文法の説明(javascipt)

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
