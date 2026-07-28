---
title: クイックスタート
sidebar_position: 1
---

最初のベイクに複雑な調整は要りません。
対象のメッシュに `EasyAOBaker` を追加し、既定値のままアップロードすれば、5〜10 分ほどで仕上がりを確認できます。

## 1. コンポーネントを追加する

1. Hierarchy で陰影を入れたいメッシュの GameObject（Body や服など）を選択します。
2. Inspector 下部の `コンポーネントを追加（Add Component）` から `EasyAOBaker` を検索して追加します。
   - メニューからは `EasyAOBaker > EasyAOBaker` でも追加できます。
3. コンポーネントが追加されると、使用中のシェーダー（lilToon など）が自動で判別されます。

<img src="/docs/img/packages/easy-ao-baker/easyaobaker-inspector-just-added.webp" alt="EasyAOBaker コンポーネントを追加した直後の Inspector" />

:::tip
EasyAOBaker は、`Skinned Mesh Renderer` または `Mesh Renderer` が付いた GameObject にだけ追加できます。
アバターのルートではなく、Body や Face など、メッシュ本体の GameObject に追加してください。
:::

## 2. 設定を確認する

Inspector の上半分に基本設定が並びます。
まずは既定値でベイクし、仕上がりに差が出た項目だけを調整します。

- **解像度 (Resolution)**：陰影のテクスチャサイズ。
  デフォルトは `2048`。
  アバターの他のテクスチャと同じ解像度に合わせるのがおすすめです。
- **強度 (Intensity)**：陰影の濃さ。
  デフォルトは `1.0`。
  濃すぎる / 薄すぎる場合はここで調整します。
- **対象シェーダー (Target Shader)**：陰影を書き込む先のシェーダー。
  デフォルトの `Auto` で自動判別されます。
- **AO を書き込むマテリアル**：複数マテリアルがある場合、スロットごとに陰影の ON/OFF を切り替えられます。

<img src="/docs/img/packages/easy-ao-baker/easyaobaker-basic-settings.webp" alt="EasyAOBaker Inspector の基本設定セクション（解像度、強度、対象シェーダー、AO を書き込むマテリアル）" />

## 3. シェーダー別の調整（必要な場合）

`シェーダー設定` セクションでは、シェーダーごとに陰影の効き方を調整できます。
初期値には現在のマテリアル設定が読み込まれるため、最初のベイクでは変更しなくても構いません。

詳しくは [シェーダー連携](../guides/shader-integration.md) を参照してください。

## 4. アップロードして確認する

1. `VRChat SDK > Build & Test` を実行します。
2. ビルド中に自動で陰影が計算され、アバターに焼き付けられます。
3. VRChat 上でアバターを確認すると、首元、脇、指の間などに自然な陰影が入っているはずです。

:::note
`EasyAOBaker` コンポーネントはビルド時に自動で削除されます。
これは意図された動作であり、Unity の Edit モードに戻ると再び表示されます。
:::

## 5. アップロード前に Unity 上で確認する（任意）

Unity の Play モード（`Ctrl+P`）に入ると、アップロード時と同じ焼き付け処理が走ります。
Game ビューで仕上がりを確認できるため、調整のたびにアップロードする必要はありません。

- Play モード中にコンポーネントの値を変更すると、Edit モードに戻った後も自動で保持されます。
- Play モードをまだ使いたくない場合は、Inspector の `今すぐAOをベイク` ボタンから即座に焼き付けて結果を確認することもできます。
  詳しくは [手動ベイクと出力](../guides/manual-bake.md) を参照してください。

## 仕上がりを調整する

最初の結果を見れば、濃さ、範囲、対象のどこを変えるべきか判断できます。

- [仕上がりの調整（ベイクモード）](../guides/bake-modes.md)：陰影の濃さ、滑らかさ、範囲の調整
- [シェーダー連携](../guides/shader-integration.md)：シェーダー別の設定項目
- [AO マスクで範囲を制限](../guides/ao-mask.md)：目や口内など、部分的に陰影を除外
- [マテリアル単位で ON/OFF](../guides/material-selection.md)：Sub-Mesh ごとに陰影を有効化または無効化
- [手動ベイクと出力](../guides/manual-bake.md)：ボタン一つで焼き付けて結果を確認
- [オクルーダーから除外する](../guides/exclude-meshes.md)：アクセサリなどを陰影計算に含めない
