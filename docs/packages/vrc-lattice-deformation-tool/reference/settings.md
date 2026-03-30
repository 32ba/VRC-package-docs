---
title: 設定項目リファレンス
sidebar_position: 1
---

export const Icon = ({name, alt}) => (
  <img src={`/docs/img/icons/${name}.png`} alt={alt || name} className="icon-inline" />
);

このページでは `LatticeDeformer` コンポーネントと各 Scene ツールの設定項目を、日本語 UI 表示を基準にまとめています。

## Inspector: LatticeDeformer (共通)

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ツールの言語 | Tool Language | エディタ内で表示する言語を切り替えます。English / 日本語 / 한국어 / 简体中文 / 繁體中文 |
| ツールチップを表示 | Show Tooltips | UI 要素にカーソルを合わせたとき説明を表示します |
| Skinned Mesh Source | Skinned Mesh Source | 変形対象の `Skinned Mesh Renderer`。同じ GameObject にある場合は自動設定 |
| Static Mesh Source | Static Mesh Source | メッシュフィルターを持つ静的メッシュ用。Skinned Mesh Source が設定されている場合は無効 |

## Inspector: 変形グループ

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| 変形グループ | Deformation Groups | グループ一覧を表示。各グループの有効/無効を切り替え可能 |
| グループを複製 | Duplicate Group | アクティブグループを全レイヤーごとコピー |
| グループをコピー | Copy Group | クリップボードにコピー |
| グループを貼り付け | Paste Group | クリップボードからペースト |
| グループを削除 | Delete Group | アクティブグループとその全レイヤーを削除 |

## Inspector: レイヤー

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| レイヤー | Layers | アクティブグループ内のレイヤー一覧。[L] = ラティス、[B] = ブラシ |
| アクティブレイヤー | Active Layer | 現在編集中のレイヤーを選択 |
| ラティスレイヤーを追加 | Add Lattice Layer | 新しいラティスレイヤーを作成 |
| ブラシレイヤーを追加 | Add Brush Layer | 新しいブラシレイヤーを作成 |
| レイヤーを複製 | Duplicate Layer | データごとコピーして追加 |
| レイヤーをコピー | Copy Layer | クリップボードにコピー |
| レイヤーを貼り付け | Paste Layer | クリップボードからペースト |
| レイヤーを削除 | Delete Layer | アクティブレイヤーを削除 |

## Inspector: ラティスケージ設定

ラティスレイヤーが選択されているときに表示されます。

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| 現在のグリッド分割数 | Current Grid Divisions | 各軸の分割数を `Vector3Int` 形式で表示 (読み取り専用) |
| 変更後のグリッド分割数 | Pending Grid Divisions | 新しい分割数を入力。各軸 2 以上が必須 |
| 適用 | Apply | 分割数を確定し制御点を再サンプリング |
| 元に戻す | Revert | 入力した分割数を現在値に戻す |
| ラティスケージをリセット | Reset Lattice Cage | ソースメッシュのバウンズから制御点を初期化 |

### ケージ詳細設定

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| Local Bounds | Local Bounds | ラティスケージのサイズを手動設定。通常はデフォルトで問題なし |
| Interpolation | Interpolation | 補間方法。`Trilinear` (高速) / `Cubic Bernstein` (滑らか) |

## Inspector: 左右操作

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| 左右操作 | L/R Operations | 軸ごとの変形分割・ミラーリングツール |
| 左を残す | Split L | X 軸正側の変形をゼロにし、左側のみ残す |
| 右を残す | Split R | X 軸負側の変形をゼロにし、右側のみ残す |
| X反転 | Flip X | X 軸を基準に全変形データをミラーリング |
| Y反転 | Flip Y | Y 軸を基準に全変形データをミラーリング |
| Z反転 | Flip Z | Z 軸を基準に全変形データをミラーリング |

## Inspector: BlendShape

グループ単位の設定です。

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| BlendShape 出力 | BlendShape Output | `Disabled` (直接変形) / `OutputAsBlendShape` (BlendShape として出力) |
| BlendShape 名 | BlendShape Name | 生成される BlendShape の名前 |
| カーブ | Curve | 0〜100% の変化を制御するアニメーションカーブ |
| テストモードに入る | Enter Test Mode | BlendShape の効果をリアルタイムプレビュー |
| テストモードを終了 | Exit Test Mode | プレビューを終了 |
| テストウェイト | Test Weight | プレビューの強度 (0〜100%) |
| BlendShape のインポート | Import BlendShape | 既存 BlendShape をブラシレイヤーとして読み込み |

## Inspector: メッシュ再構築オプション

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| メッシュ再構築オプション | Mesh Rebuild Options | 変形後の再計算設定セクション |
| 法線 | Normals | 変形後の法線を再計算 (デフォルト ON) |
| 接線 | Tangents | タンジェントを再計算。法線マップ使用時に有効化 |
| 境界 | Bounds | バウンズを再計算 |
| ボーンウェイトを再計算 | Recalculate Bone Weights | ボーンウェイトを変形に合わせて再計算 (SkinnedMeshRenderer のみ) |
| (NDMF) Enable Lattice Preview | (NDMF) Enable Lattice Preview | プレビューの ON/OFF 切り替え |
| (NDMF) Disable Lattice Preview | (NDMF) Disable Lattice Preview | プレビューを無効化 |

## Inspector: ウェイト転写設定

`ボーンウェイトを再計算` を有効にすると表示されます。

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ウェイト転写設定 | Weight Transfer Settings | ウェイト転送の設定セクション |
| **Stage 1: 初期転写** | Stage 1: Initial Transfer | 元メッシュの近傍頂点からウェイトをコピー |
| └ 最大転写距離 | Max Transfer Distance | メッシュバウンズ対角線に対する割合 (デフォルト: 0.05) |
| └ 法線角度閾値 | Normal Angle Threshold | 法線角度差の上限 (デフォルト: 60°) |
| **Stage 2: ウェイト補間** | Stage 2: Weight Inpainting | 転写できなかった頂点を周囲から滑らかに補完 |
| └ 補間を有効化 | Enable Inpainting | 補間の有効/無効 |
| └ 最大反復回数 | Max Iterations | 反復回数の上限 (デフォルト: 1000) |
| └ 収束判定閾値 | Tolerance | 収束の判定基準 (デフォルト: 1e-6) |

## Inspector: ラティスケージ位置調整

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ラティスケージ位置調整 | Lattice Cage Alignment | 編集用ケージの位置とスケール表示を調整 |
| オフセット | Offset | ケージの表示位置を微調整 (表示のみ、変形には影響なし) |

## Inspector: エディターボタン

| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ラティスエディターを開く | Open Lattice Editor | Scene ビューで Lattice Tool をアクティブにする |
| ブラシエディターを開く | Open Brush Editor | Scene ビューでブラシ/頂点選択ツールをアクティブにする |

---

## Scene Overlay: Lattice Tool

ラティスレイヤー選択時に表示されるオーバーレイです。

| | 日本語 UI 表示 | 英語表記 | 説明 |
| :---: | --- | --- | --- |
| <Icon name="eye" /> | 制御IDを表示 | Show Control IDs | 制御点にインデックス番号を表示 |
| | 制御点の範囲 | Control Point Scope | `境界のみ` / `全制御点` を切り替え |
| <Icon name="eye" /> | オブジェクトで制御点を隠さない | Keep Control Points Visible | シーンジオメトリの手前に制御点を描画 |
| | ハンドル方向 | Handle Orientation | <Icon name="local" /> `ローカル` / <Icon name="global" /> `グローバル` |
| <Icon name="clear" /> | 選択をクリア | Clear Selection | 選択中の制御点を解除 |
| | **対称編集** | | |
| <Icon name="mirror" /> | 対称編集を有効化 | Enable Symmetry Editing | 対称編集の有効/無効 |
| | 対称モード | Symmetry Mode | `コピー (Copy)` / `ミラー (Mirror)` / `反対称 (Antisymmetric)` |
| | 対称軸 | Symmetry Axis | X / Y / Z |

### ハンドル操作の挙動

- 選択した制御点: **黄色**、ミラー対象: **オレンジ**、未選択: **水色**
- Scene ビューでの操作は Undo (`Ctrl+Z`) / Redo (`Ctrl+Y`) に対応

---

## Scene Overlay: <Icon name="brush" /> ブラシツール

ブラシレイヤー選択時に <Icon name="brush" /> `ブラシ` モードで表示されるオーバーレイです。

| | 日本語 UI 表示 | 英語表記 | 説明 |
| :---: | --- | --- | --- |
| | **ブラシ変形** | **Brush Deform** | |
| <Icon name="normal" /> | └ 法線 | Normal | 法線方向に押し出し/引き込み |
| <Icon name="move" /> | └ 移動 | Move | スクリーン方向に移動 |
| <Icon name="smooth" /> | └ スムーズ | Smooth | 変形を平滑化 |
| | └ マスク | Mask | 頂点の編集保護 |
| | ブラシ半径 | Brush Radius | ブラシの影響範囲 |
| | ブラシ強度 | Brush Strength | 変位量 (0〜1) |
| | ブラシ減衰 | Brush Falloff | 減衰カーブの種類 |
| <Icon name="invert" /> | ブラシ反転 | Invert Brush | 効果の方向を反転 |
| | **ミラー** | | |
| <Icon name="mirror" /> | ミラーを有効化 | Enable Mirror | 対称ペイント |
| | ミラー軸 | Mirror Axis | X / Y / Z |
| | **マスク** | | |
| <Icon name="clear" /> | マスクをクリア | Clear Mask | 全マスクをリセット |
| <Icon name="clear" /> | すべてクリア | Clear All | 変位とマスクをすべて削除 |
| | **詳細設定** | **Advanced** | |
| <Icon name="connected" /> | 接続のみ | Connected Only | 接続された頂点のみに影響 |
| <Icon name="surface-distance" /> | 表面距離 | Surface Distance | メッシュ表面に沿った距離を使用 |
| <Icon name="backface-cull" /> | 背面カリング | Backface Culling | カメラから見える面のみ |
| | **可視化** | **Visualization** | |
| <Icon name="eye" /> | ワイヤーフレーム表示 | Show Wireframe | メッシュエッジを表示 |
| <Icon name="eye" /> | 影響頂点を表示 | Show Affected Vertices | ブラシ範囲内の頂点を表示 |
| <Icon name="eye" /> | 変位ヒートマップを表示 | Show Displacement Heatmap | 変形量をレインボーカラーで可視化 |
| <Icon name="eye" /> | 貫通表示 | Show Penetration | 参照メッシュを貫通する部分を表示 |
| | 参照メッシュ | Reference Mesh | 貫通検出の比較対象 |
| | ドットサイズ | Dot Size | 頂点ドットの表示サイズ |

### ブラシ操作ショートカット

| 操作 | 挙動 |
| --- | --- |
| Alt + スクロール | ブラシ半径を調整 |
| Shift + スクロール | ブラシ強度を調整 |

---

## Scene Overlay: <Icon name="vertex-select" /> 頂点選択ツール

ブラシレイヤー選択時に <Icon name="vertex-select" /> `頂点選択` モードで表示されるオーバーレイです。

| | 日本語 UI 表示 | 英語表記 | 説明 |
| :---: | --- | --- | --- |
| | **変換モード** | **Transform Mode** | |
| <Icon name="move" /> | └ 移動 | Move | 選択頂点をハンドルで移動 |
| <Icon name="rotate" /> | └ 回転 | Rotate | ピボットを中心に回転 |
| <Icon name="scale" /> | └ スケール | Scale | ピボットを中心に拡大・縮小 |
| <Icon name="pivot" /> | ピボット | Pivot | `中心` / `最後に選択` |
| | すべて選択 | Select All | 全頂点を選択 |
| | 選択解除 | Select None | 選択を解除 |
| <Icon name="reset" /> | 選択した頂点をリセット | Reset Selected Vertices | 選択頂点の変位をクリア |
| <Icon name="reset" /> | すべての頂点をリセット | Reset All Vertices | 全頂点の変位をクリア |
| | **プロポーショナル編集** | **Proportional Editing** | |
| <Icon name="proportional" /> | └ プロポーショナル編集 | Proportional Editing | 有効/無効 |
| | └ プロポーショナル半径 | Proportional Radius | 影響範囲 |
| | └ 減衰 | Falloff | 減衰カーブの種類 |
| | **可視化** | **Visualization** | |
| <Icon name="eye" /> | ワイヤーフレーム表示 | Show Wireframe | メッシュエッジを表示 |
| | ドットサイズ | Dot Size | 頂点ドットの表示サイズ |
| <Icon name="backface-cull" /> | 背面カリング | Backface Culling | カメラから見える面のみ |
| <Icon name="connected" /> | 接続のみ | Connected Only | 矩形選択を接続頂点に制限 |

### 頂点選択ツールのショートカット

| 操作 | 挙動 |
| --- | --- |
| W / E / R | 移動 / 回転 / スケール切り替え |
| Z | ピボットモード切り替え (中心 ↔ 最後に選択) |
| Alt + スクロール | プロポーショナル半径を調整 |
| Shift + ドラッグ | 精密モード |

---

## ベイク時の自動処理

- NDMF の Build Pipeline 実行時に `LatticeDeformer` は自動的にメッシュを複製 (`*_LatticeBaked`) し、元コンポーネントは削除されます。
- `ボーンウェイトを再計算` が有効な場合、ベイク時にウェイト転送処理が実行されます。
- ビルド順は `Avatar Optimizer` より前に自動調整されます。
