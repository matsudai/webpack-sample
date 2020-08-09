const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    index: './src/index.js',
  },

  /**
   * バンドル後のファイルの出力先
   * - path: 出力先ディレクトリ
   * - filename: 出力ファイル名
   */
  output: {
    path: `${__dirname}/public`, // 出力先ディレクトリ
    filename: '[name].bundle.js', // ファイル名
  },

  plugins: [
    /**
     * index.htmlをバンドルされたファイルと同じ場所に吐き出す
     * - template: バンドル対象のhtml
     * - chunks: バンドル対象のjs
     * - inject: jsの読み込み位置
     * - hash: ブラウザのキャッシュ対策のためにクエリパラメータにhashを付ける
     */
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: 'index',
      inject: 'head',
      hash: true,
    }),
  ],

  // Loaderの設定
  module: {
    rules: [
      // Babelの設定
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        /**
         * .babelrcの代わりに設定を記述する
         * - presets: babel/preset-env: ES2015をトランスパイルする
         */
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },

  /**
   * webpack-dev-server用の設定
   * - contentBase: / => ./public にマッピングする
   */
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};
