---
title: 左右操作
sidebar_position: 5
---

export const Icon = ({name, alt}) => (
  <img src={`/docs/img/icons/${name}.png`} alt={alt || name} className="icon-inline" />
);

<Icon name="mirror" alt="ミラー" /> VRChat アバターの左右対称ワークフローを効率化するための機能です。

## 左右操作 (L/R Operations)


### 対称編集の活用

上記の手動操作の代わりに、各ツールの**対称編集**機能を使うと、編集中にリアルタイムで対称軸の反対側にも同時に変形が適用されます。

- **ラティスツール**: オーバーレイの <Icon name="mirror" /> `対称編集を有効化` → `対称モード` (`ミラー` / `反対称`) と `対称軸` を設定
- **ブラシツール**: オーバーレイの <Icon name="mirror" /> `ミラーを有効化` → `ミラー軸` を設定

