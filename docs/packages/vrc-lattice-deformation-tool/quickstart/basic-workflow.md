---
title: クイックスタート
sidebar_position: 1
---

最初の 15 分で、`LatticeDeformer` の追加からラティス変形、NDMF ビルドまでを一度通します。
この流れを終えると、元メッシュを変更せずに変形結果を確認できます。

<iframe width="100%" style={{"aspect-ratio": "16 / 7"}} src="https://www.youtube.com/embed/OXLHyXd-FU8?si=zMSNblM5kWn3H7JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1. コンポーネントを追加

1. Hierarchy で変形対象の Mesh がアタッチされた GameObject を選択します。
2. Inspector の `コンポーネントを追加 (Add Component)` で `Lattice Deformer` を検索し追加します。
3. オブジェクトに `Skinned Mesh Renderer` が付いている場合は `Skinned Mesh Source` が自動入力されます。静的メッシュなら `Static Mesh Source` に参照を設定してください。

{/* TODO: LatticeDeformer コンポーネントを追加した直後の Inspector のスクリーンショット */}

## 2. レイヤーを確認

コンポーネントを追加すると、デフォルトで 1 つのグループと 1 つのラティスレイヤーが作成されます。

- Inspector 上部に **変形グループ** セクションがあり、グループ一覧が表示されます。
- その下の **レイヤー** セクションにアクティブグループ内のレイヤー一覧が表示されます。レイヤー名の横に `[L]` (ラティス) または `[B]` (ブラシ) のタイプ表示があります。

{/* TODO: グループとレイヤーのリスト表示のスクリーンショット。[L] と [B] のバッジが見える状態 */}

:::tip
最初はラティスレイヤーだけを使います。
ブラシレイヤーとグループの使い分けは、[レイヤーとグループ](../guides/layers-and-groups.md)を参照してください。
:::

## 3. ラティスケージを設定

1. ラティスレイヤーを選択した状態で、Inspector の `現在のグリッド分割数` を確認します。
2. 分割数を変更する場合は、`変更後のグリッド分割数` に値（例：`3, 4, 3`）を入力し、`適用` を押します。入力だけを取り消す場合は、`元に戻す` を押します。

:::tip
`ケージ詳細設定` を展開すると `Local Bounds` や `Interpolation` (Trilinear / Cubic Bernstein) を調整できます。

- `Local Bounds` はラティスケージのサイズを手動で設定する場合に使用します。通常はソースメッシュのバウンズに合わせるためデフォルトのままで問題ありません。
- `Interpolation` は変形の補間方法を切り替えます。`Cubic Bernstein` を選択するとより滑らかな変形結果が得られますが、処理が重くなる場合があります。
- 1.4.2 で新規作成したデータの `Cubic Bernstein` は現行の Bernstein 評価を使用します。旧公開バージョンから移行したデータは、見た目を変えないため従来互換の評価を維持します。
:::

## 4. Mesh Deformer で制御点を編集

1. Inspector 下部の `ラティスエディターを開く` ボタンを押して `Mesh Deformer` ツールを起動します。
    - Scene ビューに単一の `Mesh Deformer` オーバーレイが表示されます。ラティスレイヤー `[L]` の選択中はラティス編集用の項目に切り替わります。

{/* TODO: Mesh Deformer 起動後の Scene ビューのスクリーンショット。ラティスケージと制御点 (小さなキューブ)、Mesh Deformer オーバーレイが見える状態 */}

2. 制御点 (小さなキューブ) をクリックすると黄色にハイライトされ、ハンドルで移動できます。

| 操作 | 挙動 |
| --- | --- |
| クリック | 制御点を選択 (既存の選択は解除) |
| Shift + クリック | 選択に追加 |
| Ctrl + クリック | 選択をトグル |

3. 左右対称に変形したい場合はオーバーレイで `対称編集を有効化` をオンにし、`対称モード` と `対称軸` を指定します。
    - `ミラー` は位置を反転コピー、`反対称` は逆方向に変位させます。
4. `制御点の範囲` を `全制御点` に切り替えると、内部の制御点も表示して編集できます。`境界のみ` のときは内部点が自動的にスムージングされます。

## 5. プレビューを確認

1. Inspector の `メッシュ再構築オプション` を展開し、必要に応じて `法線` / `接線` / `境界` の再計算を有効にします。
2. `(NDMF) Enable Lattice Preview` ボタンを押すと、プレビュー表示を ON/OFF 切り替えできます。Scene ビューでメッシュが期待通り変形しているか確認しましょう。

{/* TODO: プレビュー ON の状態で変形結果が反映された Scene ビューのスクリーンショット */}

:::note
操作後に変形が反映されない場合は `適用` を押して最新のグリッドを反映し、再度 `ラティスエディターを開く` を実行します。
:::

## 6. NDMF ビルドでベイク

1. 変形が固まったら `NDMF > Build Pipeline > Run Build` (または `VRChat SDK > Build & Test`) を実行します。
2. NDMF のビルド時に `LatticeDeformer` コンポーネントは自動削除され、`*_LatticeBaked` 付きの新しいメッシュが生成されます。
3. VRChat で検証する場合は、生成されたメッシュを含むアバターを `Build & Publish` し、インスタンス内で表示を確認します。

## 変形を組み立てる

ラティス変形を確認できたら、必要な操作を次のガイドから選びます。

- [レイヤーとグループ](../guides/layers-and-groups.md)：複数レイヤーの組み合わせとグループ管理
- [ブラシツール](../guides/brush-tool.md)：ブラシによる直感的なメッシュ変形
- [頂点選択ツール](../guides/vertex-selection.md)：頂点の直接選択と移動、回転、スケール
- [BlendShape](../guides/blendshape.md)：BlendShape としての出力とインポート
- [左右操作](../guides/symmetry.md)：VRChat アバターの左右対称ワークフロー
- [ウェイト転送](../guides/weight-transfer.md)：変形後のボーンウェイト再計算
