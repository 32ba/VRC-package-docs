---
title: 設定項目リファレンス
sidebar_position: 1
---

`EasyAOBaker` Inspector で表示される項目を、日本語 UI の並び順で掲載します。
ラベルを照合しやすいよう、英語表記も併記しています。

## 基本設定（Basic）

常時表示される項目です。
通常はここだけ触れば十分です。

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| 解像度 | Resolution | 陰影テクスチャのサイズ。`256` / `512` / `1024` / `2048` / `4096` から選択 |
| 強度 | Intensity | 陰影全体の濃さ倍率（デフォルト `1.0`）。大きいほど濃くなる |
| 対象シェーダー | Target Shader | 陰影を書き込む先のシェーダー。`Auto` 推奨 |
| AOマスク | AO Mask | 陰影生成範囲のマスク画像。白=生成、黒=除外 |
| AO を書き込むマテリアル | Materials to bake | マテリアルスロットごとの ON/OFF |

### Target Shader の選択肢

| 値 | 用途 |
| --- | --- |
| Auto | マテリアルから自動判別（推奨） |
| LilToon | lilToon を使用 |
| Poiyomi | Poiyomi Toon を使用 |
| ToonStandard | VRChat Toon Standard を使用 |
| StandardLit | Unity Standard / Sunao Shader など Occlusion Map を持つシェーダー |
| VertexColor | 頂点カラーの R チャンネルに陰影を書き込む |

## シェーダー設定（Shader Settings）

自動判別または手動選択されたシェーダーに応じて、表示される項目が切り替わります。

### lilToon

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| 1st Shadow Scale / Offset | 1st Shadow Scale / Offset | 1 影レイヤーへの適用スケールとオフセット |
| 2nd Shadow Scale / Offset | 2nd Shadow Scale / Offset | 2 影レイヤーへの適用スケールとオフセット |
| 3rd Shadow Scale / Offset | 3rd Shadow Scale / Offset | 3 影レイヤーへの適用スケールとオフセット |
| Post AO | Post AO | AO 適用後に lilToon の `Border` 設定を無視する |
| Border Mask LOD | Border Mask LOD | AO マップのぼかし具合（lilToon Inspector と同じ値） |

### Poiyomi

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| R 強度 | R Strength | R チャンネルへの書き込み強度（通常 `1.0`） |
| G 強度 | G Strength | G チャンネルへの書き込み強度（通常 `0.0`） |
| B 強度 | B Strength | B チャンネルへの書き込み強度（通常 `0.0`） |
| A 強度 | A Strength | A チャンネルへの書き込み強度（通常 `0.0`） |

### Standard と ToonStandard

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| Occlusion 強度 | Occlusion Strength | Occlusion Map に書き込む陰影の強度 |

## 詳細設定（Advanced）

初期状態では折り畳まれています。
既定値で仕上がりに問題がなければ、変更する必要はありません。

### ベイクモード

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ベイクモード | Bake Mode | `RayCast`（正確、既定値）または `SSAO`（高速） |

### RayCast モードの項目

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| レイ数 | Ray Count | ピクセルあたりのサンプル数。多いほど滑らかで遅い（デフォルト `128`） |
| レイ最大距離 | Max Ray Distance | 陰影を拾う最大範囲（メートル、デフォルト `2.0`） |
| レイ原点オフセット | Ray Origin Offset | 自己干渉を防ぐための微調整値。通常は変更不要 |

### SSAO モードの項目

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| サンプル数 | Sample Count | ピクセルあたりのサンプル数（デフォルト `256`） |
| 半径 | Radius | サンプリング範囲（メートル、デフォルト `0.15`） |
| バイアス | Bias | 自己シャドウ防止の微調整値（デフォルト `0.005`） |
| カメラ方向数 | Camera Directions | 陰影計算に使う方向数（デフォルト `128`） |
| キャプチャ距離 | Capture Distance | アバターから計算用カメラまでの距離（デフォルト `3.0`） |
| アルファテストメッシュを含める | Include Alpha Tested Meshes | 髪など半透明メッシュも陰影計算に含める（デフォルト ON） |

### フィルタ

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ブラー反復回数 | Blur Iterations | 陰影をぼかす回数（デフォルト `1`、`0` でぼかしなし） |
| ブラー半径 | Blur Radius | ブラーの強さ（デフォルト `0.5`） |

### 手動ベイク

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| テクスチャのみ（手動ベイク） | Texture Only (manual) | ON: PNG のみ出力 / OFF: マテリアルも自動差し替え |
| 今すぐAOをベイク | Bake AO Now | ボタン。クリックで即時ベイク |

:::note
`テクスチャのみ` は、手動ベイク時の動作だけを切り替えます。
アップロード（Build & Test）時は、設定にかかわらずマテリアルへ陰影が適用されます。
:::

## その他のコンポーネント

### Exclude From AO Bake

陰影計算から除外したいメッシュへ追加するマーカーコンポーネントです。
追加した GameObject と同じ GameObject にある Renderer は、陰影計算から除外されます。
子階層の Renderer は自動では除外されません。
`詳細設定` の `除外しない Baker` では、除外を解除する EasyAOBaker を個別に選べます。

詳しくは [オクルーダーから除外する](../guides/exclude-meshes.md) を参照してください。

## 言語切り替え

Inspector の上部にあるドロップダウンから以下の言語に切り替えられます。

- English / 日本語 / 简体中文 / 한국어

選択した言語は Unity エディタ全体で記憶されます。

## ビルド時の自動処理

- `VRChat SDK > Build & Test`（または `NDMF > Build Pipeline > Run Build`）実行時に、`EasyAOBaker` が自動で陰影をベイクしてマテリアルに適用します。
- EasyAOBaker は NDMF の Transforming フェーズで、Modular Avatar と TexTransTool の処理後に動作します。
- Optimizing フェーズで動作する `AAO: Avatar Optimizer` よりは先に実行されます。
- 処理が完了すると `EasyAOBaker` および `Exclude From AO Bake` コンポーネントはアバターから自動的に削除されます。
