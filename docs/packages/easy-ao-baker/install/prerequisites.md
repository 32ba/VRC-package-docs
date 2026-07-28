---
title: 前提条件
sidebar_position: 1
---

EasyAOBaker を使い始める前に、Unity と依存パッケージがそろっているか確認します。

## 必要なもの

- **Unity 2022.3 LTS**: VRChat Creator Companion (VCC) が案内する `Unity 2022.3.xf1 LTS` 系を使用します。
- **NDMF 1.9.0 以上**: VPM から EasyAOBaker を入れると一緒に入るので、通常は意識する必要はありません。

## 対応シェーダー

お使いのアバターが以下のシェーダーを使っていれば、特別な設定なしで陰影が適用されます。

- **lilToon**
- **Poiyomi Toon**
- **VRChat Toon Standard**
- **Unity Standard / Sunao Shader** (その他 Occlusion Map を持つシェーダー)

上記以外のシェーダーでも、Inspector で書き込み先を手動で選択できます。

## インストール方法

### VPM からインストール（推奨）

1. VRChat Creator Companion を開きます。
2. `Settings > Packages` から VPM リポジトリに `https://vpm.32ba.net/` を追加します。
3. 対象プロジェクトの `Manage Project` 画面で **EasyAOBaker** を追加します。

依存パッケージの NDMF は自動的に追加されます。

### Git URL からインストール

Unity の Package Manager で `Add package from git URL...` に以下を入力しても追加できます。

```
https://github.com/32ba/ao-baker.git
```

この方法の場合は NDMF を別途インストールしてください。

## プロジェクトの準備

VCC の `Create New Project` から **VRChat SDK - Avatars** テンプレートで作成したプロジェクトを推奨します。
既存のアバタープロジェクトにも後から追加できます。

## 他のツールとの併用について

- **AAO (Avatar Optimizer) との併用**: 問題なく併用できます。EasyAOBaker は AAO がメッシュを最適化した「最終的な形」に対して陰影を焼き付けるため、AAO を通した後のアバターでもきれいに仕上がります。
- **Modular Avatar など他の NDMF ツール**: 問題なく併用できます。
- **複数のメッシュに陰影を入れたい**: Body, 髪, 服などそれぞれに `EasyAOBaker` を 1 つずつ追加します。それぞれのメッシュはアバター全体の形を考慮して陰影が計算されるので、例えば「髪の影が顔に落ちる」といった他メッシュからの遮蔽も自然に反映されます。
