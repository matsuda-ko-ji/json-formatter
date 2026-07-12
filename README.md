# JSON Formatter

JSONを整形・圧縮できるシンプルなWebツールです。

## 🌐 Demo

https://matsuda-ko-ji.github.io/json-formatter/

## 概要

このアプリケーションは、入力したJSONデータを見やすく整形したり、
不要な空白を削除して圧縮したりできるブラウザ上のWebツールです。

ブラウザ内で処理を行うため、入力したJSONデータは外部へ送信されません。

## 開発目的

Web開発ではAPIレスポンス確認や設定ファイル確認などでJSONを扱う機会が多いため、
日常的に利用できるツールの制作を目的として開発しました。

また、JavaScriptの基本的なDOM操作やイベント処理の理解を深めることも目的としています。

## 機能

- JSON整形（Pretty Print）
- JSON圧縮（Minify）
- JSON形式チェック
- エラーメッセージ表示
- コピー機能
- 入力内容・結果のクリア
- レスポンシブ対応

## 使用技術

- HTML
- CSS
- JavaScript

## 実装内容

### JSON解析

JavaScriptの `JSON.parse()` を使用してJSON形式をチェックしています。

### JSON整形・圧縮

`JSON.stringify()` を使用して、
インデント付きの整形表示と圧縮表示を実装しています。

## 今後追加予定

- JSONファイル読み込み
- ダークモード対応
- JSONシンタックスハイライト
- ドラッグ＆ドロップ入力対応

## GitHub Pages

GitHub Pagesで公開しています。

https://matsuda-ko-ji.github.io/json-formatter/