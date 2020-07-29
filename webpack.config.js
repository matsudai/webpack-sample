module.exports = {
  // 本番モードでバンドル
  mode: 'production',
  // DataUrlでソースマップを埋め込む
  devtool: 'inline-source-map',

  // バンドルされるファイルパス
  entry: './src/index.js',

  output: {
    // バンドルされたファイルの出力先のディレクトリ
    path: `${__dirname}/dist`,
    // バンドルされたファイル名
    filename: 'bundle.js'
  }
}
