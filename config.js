

var dest = __dirname ; // 出力先ディレクトリ
var src =  __dirname + '/resources';  // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    dest: dest + '/js',
    uglify: true
  },
  css: {
    src: src + '/css/*.scss',
    dest: dest + '/css/',
    output : 'common.css'
  },
  // webpackの設定
  webpack: {
    entry: src + '/js/sample_rs.js',
    output: {
      filename: 'build.js'
    },
    module: {
       loaders: [
         { test: /\.vue$/, loader: 'vue' },
       ]
    },
    resolve: {
      extensions: ['', '.js'],
      alias: {
       'vue': 'vue/dist/vue.js'
      }
    }
  }
}
