path = require('path');
HtmlWebpackPlugin = require('html-webpack-plugin');

// バンドルの設定
module.exports = {
  // 本番モードでバンドル
  mode: 'production',
  // DataUrlでソースマップを埋め込む
  devtool: 'source-map',

  // // 開発モード、sourcemapの生成
  // mode: 'development',
  // devtool: 'eval-cheap-module-source-map',

  // バンドルされるファイルパス
  entry: {
    'index': './src/index.js'
  },

  // バンドルされたファイル
  output: {
    path:     `${__dirname}/public`, // 出力先ディレクトリ
    filename: '[name].bundle.js'     // ファイル名
  },

  plugins: [
    // index.htmlをバンドルされたファイルと同じ場所に吐き出す
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks:   'index',            // entryしたjsを読み込む
      inject:   'head',             // jsは<head>タグ内で読み込む
      hash:     true                // jsに一意なhashを指定する（キャッシュ対策）
    })
  ],

  // Loaderの設定
  module: {
    rules: [
      // Babelの設定
      {
        // babelによるトランスパイル対象の指定
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        // babel/preset-env用の設定（.babelrcの代わり）
        query: {
          presets: [
            [
              '@babel/preset-env'
            ]
          ]
        }
      }
    ]
  },

  // webpack-dev-server用の設定
  devServer: {
    // document rootをpublic/にする
    contentBase: path.resolve(__dirname, 'public')
  }
}
