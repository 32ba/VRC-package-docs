---
title: 設定項目リファレンス
sidebar_position: 1
---

このページでは`LatticeDeformer` コンポーネントと Scene ビューの `Lattice Tool` オーバーレイの主要項目を、日本語 UI 表示を基準にまとめています。

## Inspector: LatticeDeformer
| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| ツールの言語 | Tool Language | エディタ内で表示する言語を切り替えます。初期値は English。 |
| Skinned Mesh Source | Skinned Mesh Source | 変形対象の `Skinned Mesh Renderer`。コンポーネントと同じ GameObject にある場合は自動設定されます。 |
| Static Mesh Source | Static Mesh Source | メッシュフィルターを持つ静的メッシュ用。`Skinned Mesh Source` が設定されている場合は無効化されます。 |
| [ラティスケージ設定](#inspector-latticedeformer-lattice-cage-settings) | [Lattice Cage Settings](#inspector-latticedeformer-lattice-cage-settings) | ケージ関連の設定をまとめたセクションです。 |
| [メッシュ再構築オプション](#inspector-latticedeformer-mesh-rebuild-options) | [Mesh Rebuild Options](#inspector-latticedeformer-mesh-rebuild-options) | 変形後の後処理をまとめたセクション。 |
| ラティスエディターを開く | Open Lattice Editor | Scene ビューで `Lattice Tool` をアクティブにします。Unity のツールバーからでも切り替え可能です。 |

## Inspector: LatticeDeformer (Lattice Cage Settings)
| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| └ 現在のグリッド分割数 | Current Grid Divisions | 現在のラティス分割数を `Vector3Int` 形式で表示します (読み取り専用)。 |
| └ 変更後のグリッド分割数 | Pending Grid Divisions | 入力した分割数。各軸 2 以上が必須です。`適用` で確定するまで反映されません。 |
| └ 適用 | Apply | `変更後のグリッド分割数` を確定し、制御点を再サンプリングします。複数選択時は全インスタンスに適用。 |
| └ 元に戻す | Revert | `変更後のグリッド分割数` を現在値に戻します。 |
| └ ラティスケージをリセット | Reset Lattice Cage | ソースメッシュのバウンズを再取得し、制御点を初期化します。 |
| └ [ケージ詳細設定](#inspector-latticedeformer-lattice-cage-settings---advanced-cage-settings) | [Advanced Cage Settings](#inspector-latticedeformer-lattice-cage-settings---advanced-cage-settings) | 高度な設定を表示します。 |

## Inspector: LatticeDeformer (Lattice Cage Settings - Advanced Cage Settings)
| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| └ Local Bounds | Local Bounds | ラティスケージのサイズを手動で設定します。通常はソースメッシュのバウンズに合わせるためデフォルトのままで問題ありません。 |
| └ Interpolation | Interpolation | 変形の補間方法を切り替えます。`Cubic Bernstein` を選択するとより滑らかな変形結果が得られますが、処理が重くなる場合があります。 |

## Inspector: LatticeDeformer (Mesh Rebuild Options)
| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| └ Recalculate Normals | Recalculate Normals | 変形後メッシュの法線を更新します (デフォルト ON)。 |
| └ Recalculate Tangents | Recalculate Tangents | タンジェントを再計算します。法線マップを使う場合に有効化します。 |
| └ Recalculate Bounds | Recalculate Bounds | バウンズを再計算します。`Skinned Mesh Renderer` の表示範囲が狭い場合に ON。 |
| └ (NDMF) Enable Lattice Preview | (NDMF) Enable Lattice Preview | プレビューの ON/OFF を切り替えます。 |  

## Scene Overlay: Lattice Tool
| 日本語 UI 表示 | 英語表記 | 説明 |
| --- | --- | --- |
| Lattice Tool | Lattice Tool | ツール名は日本語 UI でも英語表記です。 |
| 制御IDを表示 | Show Control IDs | 制御点インデックスを表示します。 |
| 制御点の範囲 | Control Point Scope | `境界のみ (Boundary Only)` と `全制御点 (All Controls)` を切り替えます。内部点を無効にした場合、内部点は自動的に計算されて変形されます。 |
| 選択をクリア | Clear Selection | 選択中の制御点を解除します。選択状況は `選択: ...` と表示されます。 |
| 対称編集を有効化 | Enable Symmetry Editing | 対称編集を有効化します。オンにすると対称モード/軸を設定できます。 |
| 対称モード | Symmetry Mode | `コピー (Copy)`、`ミラー (Mirror)`、`反対称 (Antisymmetric)` を切り替えます。 |
| 対称軸 | Symmetry Axis | X / Y / Z のいずれかの軸を対称面として使用します。選択した対象面はシーンエディタ上で青く表示されます。 |

### ハンドル操作の挙動
- 選択した制御点は黄色、ミラー対象はオレンジで表示されます。
- Pivot は自動的に `ローカル (Local)` に固定されます。
- Scene ビューでの操作は Undo (`Ctrl+Z`) / Redo (`Ctrl+Y`) に対応します。

## ベイク時の自動処理
- NDMF の Build Pipeline 実行時に `LatticeDeformer` は自動的にメッシュを複製 (`*_LatticeBaked`) し、元コンポーネントは削除されます。
