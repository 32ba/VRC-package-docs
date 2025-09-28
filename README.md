# 32ba VRChat Docs

このディレクトリは Docusaurus で構築されたドキュメントサイトです。パッケージの利用者が手順を確認しやすいよう、コンテンツは日本語で整理しています。

## 必要環境

- Node.js 20 以上
- corepack が有効化されていること（`corepack enable`）

## 初期セットアップ

```bash
pnpm install
```

## ローカル開発

```bash
pnpm start
```

ブラウザが自動で開かない場合は `http://localhost:3000` にアクセスしてください。保存すると即座にページが更新されます。

## ビルド

```bash
pnpm build
```

生成された静的ファイルは `build` に配置されます。任意のホスティングサービスで配信できます。

## デプロイ（例）

GitHub Pages を利用する場合は、リポジトリの `gh-pages` ブランチにデプロイする設定を追加してください。

```bash
pnpm run deploy
```

環境に応じて `GIT_USER` や `USE_SSH` の設定が必要になる場合があります。
