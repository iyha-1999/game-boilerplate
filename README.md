# game-boilerplate



[TOC]

## 目的

javascript でゲーム開発用のボイラーテンプレートを作成する
技術検証を兼ねる

## フレームワーク、ライブラリ

・追加済

- electron

- react

- redux

- typescript

- node.js

- pixi.js

  

・追加予定

- three.js

## 実装予定機能

- ビジュアルノベル
- ローグライク

## フロントエンド環境構築

### electron-forge

デスクトップアプリケーションの作成に使用する

electron + react + typescript のボイラーテンプレートを使用する

```
git clone --depth 1 --single-branch https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
cd your-project-name
yarn
```

> https://github.com/electron-react-boilerplate/electron-react-boilerplate > https://electron-react-boilerplate.js.org/docs/installation

electron api

> https://www.electronjs.org/docs/api



### redux

storeを管理しやすくする、手続き的な管理により予期せぬstoreの変更を防止する

```
yarn add redux react-redux
```



### pixi.js,pixi-react

ゲームスプライトの描画、アニメーションに使用する

```
yarn add pixi.js @inlet/react-pixi
```

> https://reactpixi.org/

> https://pixijs.download/dev/docs/index.html



### CSS Modules

Electron-forgeのボイラーテンプレートに含まれている

typings-for-css-modules-loaderを使用

> https://www.npmjs.com/package/typings-for-css-modules-loader



css modulesは型定義ファイルが必要となるため、下記プラグインで一括で型定義ファイルを生成する

> https://github.com/Quramy/typed-css-modules

app/src/css/components配下の全てのcssに型定義ファイルを生成するコマンドを自作した

cssの更新時には下記を実行する(実行していない場合、vscode上でエラーが発生する)

```
yarn buildcss
```

