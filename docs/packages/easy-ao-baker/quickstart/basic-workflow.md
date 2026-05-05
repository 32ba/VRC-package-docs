---
title: クイックスタート
sidebar_position: 1
---

ここではアバターに `EasyAOBaker` を追加して、アップロード時に自動で陰影を焼き付ける手順を説明します。所要時間は 5〜10 分程度です。

## 1. コンポーネントを追加する

1. Hierarchy で陰影を入れたいメッシュの GameObject (Body や服など) を選択します。
2. Inspector 下部の `コンポーネントを追加 (Add Component)` から `EasyAOBaker` を検索して追加します。
   - メニューからは `EasyAOBaker > EasyAOBaker` でも追加できます。
3. コンポーネントが追加されると、お使いのシェーダー (lilToon など) が自動で判別されます。

<img src="/img/packages/easy-ao-baker/easyaobaker-inspector-just-added.webp" alt="EasyAOBaker コンポーネントを追加した直後の Inspector" />

:::tip
EasyAOBaker は「メッシュを表示するためのコンポーネント (Skinned Mesh Renderer や Mesh Renderer)」が付いている GameObject にしか追加できません。アバターのルートではなく、Body や Face などのメッシュ本体のオブジェクトに追加してください。
:::

## 2. 設定を確認する

Inspector の上半分が基本設定です。最初はそのままの設定でも自然な仕上がりになりますが、以下の項目は状況に応じて調整してください。

- **解像度 (Resolution)**: 陰影のテクスチャサイズ。デフォルトは `2048`。アバターの他のテクスチャと同じ解像度に合わせるのがおすすめです。
- **強度 (Intensity)**: 陰影の濃さ。デフォルトは `1.0`。濃すぎる / 薄すぎる場合はここで調整します。
- **対象シェーダー (Target Shader)**: 陰影を書き込む先のシェーダー。デフォルトの `Auto` で自動判別されます。
- **AO を書き込むマテリアル**: 複数マテリアルがある場合、スロットごとに陰影の ON/OFF を切り替えられます。

<img src="/img/packages/easy-ao-baker/easyaobaker-basic-settings.webp" alt="EasyAOBaker Inspector の基本設定セクション (解像度・強度・対象シェーダー・AO を書き込むマテリアル)" />

## 3. シェーダー別の調整 (必要なら)

`シェーダー設定` セクションで、シェーダーごとの細かい効き具合を調整できます。コンポーネントを追加した時点で現在のマテリアルの値から自動的に初期値が読み込まれるので、通常はそのままで問題ありません。

詳しくは [シェーダー連携](../guides/shader-integration.md) を参照してください。

## 4. アップロードして確認する

1. `VRChat SDK > Build & Test` を実行します。
2. ビルド中に自動で陰影が計算され、アバターに焼き付けられます。
3. VRChat 上でアバターを確認すると、首元・脇・指の間などに自然な陰影が入っているはずです。

:::note
`EasyAOBaker` コンポーネントはビルド時に自動で削除されます。これは意図された動作です。Unity 上の Edit モードに戻れば再び表示されます。
:::

## 5. アップロード前に Unity 上で確認する (任意)

Unity の Play モード (`Ctrl+P`) に入ると、同じ焼き付け処理が走ります。Game ビューで仕上がりを確認できるので、アップロード前のチェックに便利です。

- Play モード中にコンポーネントの値を変更すると、Edit モードに戻った後も自動で保持されます。
- Play モードをまだ使いたくない場合は、Inspector の `今すぐ AO をベイク` ボタンから即座に焼き付けて結果を確認することもできます。詳しくは [手動ベイクと出力](../guides/manual-bake.md) を参照してください。

## 次のステップ

基本の流れをつかんだら、以下のガイドで仕上がりを調整できます。

- [仕上がりの調整 (ベイクモード)](../guides/bake-modes.md) — 陰影の濃さ・滑らかさ・範囲の調整
- [シェーダー連携](../guides/shader-integration.md) — シェーダー別の設定項目の意味
- [AO マスクで範囲を制限](../guides/ao-mask.md) — 目や口内など部分的に陰影を除外
- [マテリアル単位で ON/OFF](../guides/material-selection.md) — Sub-Mesh ごとに陰影を有効化 / 無効化
- [手動ベイクと出力](../guides/manual-bake.md) — ボタン 1 つで焼き付けて結果を確認
- [オクルーダーから除外する](../guides/exclude-meshes.md) — アクセサリなどを陰影計算に含めない
