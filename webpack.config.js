const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// バンドルの設定
module.exports = {
  // 本番モードでバンドル
  mode: 'production',
  // ソースマップを出力する
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
      // {test: /\.ts/, exclude: path.resolve(__dirname, 'node_modules'), loader: 'ts-loader' },
      // JavaScript
      {
        test: /\.(js|ts)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        /**
         * JSのloaderを設定する（読み込み順は最後から）
         * - [0] Babelのトランスパイル設定
         * - [1] ESLintによるバンドル時警告の設定
         */
        use: [
          {
            loader: 'babel-loader',
            /**
             * .babelrcの代わりに設定を記述する
             * - presets:
             *     - @babel/preset-env: ES2015をトランスパイルする
             *     - @babel/preset-typescript: TypeScriptを変換する
             */
            query: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              parserOpts: {
                allowDeclareFields: true, // This will be enabled by default in Babel 8
              },
            },
          },
          /**
           * ESLintでは型チェックできないため外す。その代わりpackage.jsonにlintタスクを用意する
           */
          // {
          //   loader: 'eslint-loader',
          //   /**
          //    * ESLint loaderの設定
          //    * - emitError: lintのエラーでバンドルを止めないためにlintのエラーを警告とする
          //    */
          //   options: {
          //     emitWarning: true,
          //   },
          // },
        ],
      },
    ],
  },

  /**
   * モジュールの名前解決など
   * - extensions: import時に推測する拡張子名
   */
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  /**
   * webpack-dev-server用の設定
   * - contentBase: / => ./public にマッピングする
   */
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};
