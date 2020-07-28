module.exports = {
  // バンドルされるファイルパス
  entry: './src/app.js',

  output: {
    // バンドルされたファイルの出力先のディレクトリ
    path: `${__dirname}/dist`,
    // バンドルされたファイル名
    filename: 'index.js'
  }
}
