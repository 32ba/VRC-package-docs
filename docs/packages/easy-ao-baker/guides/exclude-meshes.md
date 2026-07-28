---
title: オクルーダーから除外する
sidebar_position: 6
---

EasyAOBaker は、処理対象のルート以下にある有効なメッシュを「陰を落とす側」として計算します。
そのため、発光表現や予備衣装のメッシュまで、意図しない陰影の原因になることがあります。
`Exclude From AO Bake` を追加すると、指定したメッシュを計算から除外できます。

## 使い方

1. 陰影計算から外したいメッシュの GameObject を選択します。
2. Inspector の `コンポーネントを追加 (Add Component)` から `Exclude From AO Bake` を検索して追加します。
   - メニューからは `EasyAOBaker > Exclude From AO Bake` でも追加できます。
3. 追加するだけで、その GameObject の Renderer がすべての EasyAOBaker の計算から除外されます。

`Exclude From AO Bake` が作用するのは、同じ GameObject にある Renderer だけです。
子階層の Renderer も除外する場合は、それぞれの GameObject にコンポーネントを追加します。

<img src="/docs/img/packages/easy-ao-baker/exclude-from-ao-bake-inspector.webp" alt="Exclude From AO Bake コンポーネントを追加した Inspector" />

## こんなときに便利

### 光るエフェクトやオーラメッシュ

パーティクルや光るエフェクトのメッシュは「見た目には光っている」のに陰影計算には影を落としてしまうため、意図しない暗い部分ができる原因になります。

### 大きなアクセサリ（後光、翼、背景オブジェクトなど）

キャラクターを包む大きなメッシュがあると、その陰影でアバター全体が暗くなることがあります。
このコンポーネントでアクセサリを除外すると、アバター本体の陰影だけを計算できます。

### 一時的に有効化している予備の衣装

ベイク時に有効な衣装や装飾は陰影計算に含まれます。
その形状を計算へ反映したくない場合は、このコンポーネントを追加します。

## EasyAOBaker ごとに除外を解除する

`詳細設定` の `除外しない Baker` では、この Renderer を計算に含める EasyAOBaker を個別に選べます。
たとえば、髪の Renderer を身体用のベイクからは除外し、髪自身のベイクには含める、といった設定が可能です。

## 注意点

- **同じ GameObject の Renderer だけが対象**：子階層へは引き継がれません。
- **除外された Renderer はベイク対象にもならない**：同じ GameObject に EasyAOBaker がある場合、その Baker で除外を解除しない限り処理をスキップします。
- **ビルド時に自動で削除されます**：EasyAOBaker 本体と同じく、アップロード処理が終わったら自動的に消えます。

## どれを使うべきか迷ったら

| やりたいこと | 使うもの |
| --- | --- |
| あるメッシュに陰影を焼きたい | `EasyAOBaker` |
| あるメッシュを陰影計算から完全に除外したい | `Exclude From AO Bake` |
| 同じメッシュ内でマテリアル単位に陰影を無効化したい | [マテリアル単位の ON/OFF](./material-selection.md) |
| UV の特定領域だけ陰影を抑えたい | [AO マスク](./ao-mask.md) |
