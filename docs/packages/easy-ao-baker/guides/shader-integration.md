---
title: シェーダー連携
sidebar_position: 2
---

EasyAOBaker は、お使いのシェーダーに合わせて陰影の書き込み先を自動で選びます。シェーダーごとに調整できる項目が違うので、このページで確認してください。

## 対象シェーダーの自動判別

Inspector の `対象シェーダー (Target Shader)` は通常 `Auto` のままで OK です。マテリアルから lilToon や Poiyomi などを自動的に見分けて、適切な場所に陰影を書き込みます。

もし `シェーダーが自動検出できません` と表示された場合は、`対象シェーダー` のドロップダウンから手動で選択してください。

<img src="/docs/img/packages/easy-ao-baker/easyaobaker-target-shader-dropdown.webp" alt="対象シェーダーのドロップダウンを開いた状態" />

## lilToon

lilToon の場合、陰影は **1st / 2nd / 3rd Shadow の AO** として書き込まれます。

`シェーダー設定` で調整できる項目:

| 項目 | 説明 |
| --- | --- |
| 1st / 2nd / 3rd Shadow の Scale | それぞれの影レイヤーにどれくらい陰影を効かせるか |
| 1st / 2nd / 3rd Shadow の Offset | 陰影の明るさの底上げ / 引き下げ |
| Post AO | AO を適用した後に lilToon の `Border` 設定を無視する |
| Border Mask LOD | AO マップのぼかし具合 (lilToon の Inspector と同じ意味) |

コンポーネントを追加した時点で、マテリアルの現在の設定値が自動的に読み込まれます。そのままで問題ないことがほとんどです。

:::tip
1 影だけに陰影を効かせたい場合は、`2nd Shadow の Scale` と `3rd Shadow の Scale` を `0` にしてください。
:::

<img src="/docs/img/packages/easy-ao-baker/easyaobaker-liltoon-settings.webp" alt="lilToon のシェーダー設定セクション" />

## Poiyomi Toon

Poiyomi の場合、陰影は **AO の R / G / B / A チャンネル** にそれぞれ指定した強度で書き込まれます。

`シェーダー設定` で調整できる項目:

| 項目 | 説明 |
| --- | --- |
| R Strength | R チャンネルに書き込む強度 (デフォルト `1.0`) |
| G / B / A Strength | 他チャンネルに書き込む強度 (デフォルト `0.0`) |

**通常は R のみ `1.0` にしておけば OK です。** 他のチャンネルは Poiyomi 側で別の用途に使っている場合のみ触ってください。

<img src="/docs/img/packages/easy-ao-baker/easyaobaker-poiyomi-settings.webp" alt="Poiyomi のシェーダー設定セクション" />

## Unity Standard / VRChat Toon Standard / Sunao Shader

これらのシェーダーでは、陰影は **Occlusion Map** に書き込まれます。

`シェーダー設定` で調整できる項目:

| 項目 | 説明 |
| --- | --- |
| Occlusion Strength | 陰影の強度 (デフォルト `1.0`) |

## VertexColor (頂点カラー)

専用の AO スロットを持たないシェーダーで陰影を使いたい場合の選択肢です。`対象シェーダー` を手動で `VertexColor` に設定すると、陰影がメッシュの頂点カラーの R チャンネルに書き込まれます。

:::warning
頂点カラーはメッシュの頂点数が少ないとカクカクした陰影になります。ポリゴン数の少ないメッシュでは仕上がりが粗くなるので注意してください。
:::

## 検出できない場合

お使いのシェーダーが自動判別されない場合は、以下のいずれかで対応してください。

- 似た挙動のシェーダーを `対象シェーダー` から手動選択する (Occlusion Map を持つシェーダーなら `StandardLit`)
- `VertexColor` を選択する
- [手動ベイク](./manual-bake.md) で PNG だけ書き出して、自分でマテリアルに割り当てる

## マテリアルはどう扱われる?

EasyAOBaker は **元のマテリアルを直接書き換えません**。代わりに元のマテリアルを複製した新しいマテリアルを作り、そちらに陰影を設定します。そのため:

- アバターで使っている元のマテリアル (`.mat`) はそのまま残ります
- 同じマテリアルを他のアバターや Prefab で共有していても、EasyAOBaker を入れていない方には影響しません
