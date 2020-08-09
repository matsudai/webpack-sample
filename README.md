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

## 06 BabelでES6構文をトランスパイルする

```bat
> npm install --save-dev  babel-loader @babel/core @babel/preset-env
```

## 07 ESLintを導入する

### (1) ESLintの拡張・モジュールのインストールと初期設定

- VSCode拡張：`dbaeumer.vscode-eslint`
- `.vscode/settings.json`

※将来的にTypescriptを使いたいのでESLintの設定ファイルを生成する前にインストールする

```bat
> npm install --save-dev eslint typescript
> npx eslint --init
```

- How would you like to use ESLint?                      : Lintの強さ（Airbnbを使うため`To check syntax, find problems, and enforce code style`）
- What type of modules does your project use?            : モジュールの使い方（ES構文のため`Javascript modules (Import/Export)`
- Which framework does your project use?                 : （なんとなくReact）
- Does your project use TypeScript?                      : （Typescriptを使いたい）
- Where does your code run?                              : （今はBrowserだけ、そのうちNodeも？）
- How would you like to define a style for your project? : （`Use a popular style guide`）
- Which style guide do you want to follow?               : （`Airbnb`）
- What format do you want your config file to be in?     : 生成される設定ファイルのフォーマット

```cmd
>npx eslint --init
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.20.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
√ Would you like to install them now with npm? · Yes
```

### (2) ESLint適用によるエラーの修正

- VSCodeの下線が出ている箇所
- AutoFixした結果コメントが読みづらくなった箇所

```bat
> npx eslint --fix .
```
