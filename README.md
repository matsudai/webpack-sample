# Webpack Sample

## 00 webpackインストール

```bat
> .\cmd.bat
> npm init -y
> npm install webpack webpack-cli --save-dev
```

## 01 cliでバンドルする

```bat
> npx webpack
> node .\dist\main.js
```

## 02 バンドル対象のファイル／出力されるファイルを指定する

```bat
> npx webpack
> node .\dist\index.js
```

## 03 バンドルのモードをproductionに指定する

モードを指定しない場合警告が出る。

あとソースマップも生成する。

## 04 バンドルしたファイルをHTMLで読み込む

```bat
> npx webpack
```

-> src/index.htmlをブラウザで開く

## 05 サーバを立てて公開する

```bat
> npm install --save-dev webpack-dev-server
> npx webpack-dev-server
```
