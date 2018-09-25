
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var dest = __dirname + '/vuedist'; // 出力先ディレクトリ
var src =  __dirname + '/vueresource';  // ソースディレクトリ

module.exports = {
  //読み込みファイル
  entry: src + '/app.js',
  //出力ファイル
  output: {
    path: dest,
    filename: 'build.js'
  },
  //コンパイルするときにモジュールが必要な場合
  //ここに記述
  module: {
    rules: [
      {
        //vueとい拡張子ファイルに対して
        //vue-loaderを使うよという意味
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  //これがないと→のエラーがでる[Vue warn]: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
  },
  //template使うにはこれ入れないとだめ
  plugins: [
    new VueLoaderPlugin()
  ]
}
