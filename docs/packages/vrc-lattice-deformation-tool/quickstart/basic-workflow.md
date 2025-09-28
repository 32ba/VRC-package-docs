---
title: クイックスタート
sidebar_position: 1
---

ここでは `LatticeDeformer` をアバターに追加し、Scene ビューで制御点を編集して NDMF ビルドまで確認する最小構成の手順を解説します。想定所要時間は 15 分程度です。

<iframe width="100%" style={{"aspect-ratio": "16 / 7"}} src="https://www.youtube.com/embed/OXLHyXd-FU8?si=zMSNblM5kWn3H7JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1. コンポーネントを追加
1. Hierarchy で変形対象の Mesh がアタッチされた GameObject を選択します。
2. Inspector の `コンポーネントを追加 (Add Component)` で `Lattice Deformer` を検索し追加します。
3. オブジェクトに `Skinned Mesh Renderer` が付いている場合は `Skinned Mesh Source` が自動入力されます。静的メッシュなら `Static Mesh Source` に参照を設定してください。

## 2. ラティスケージを初期化
1. `ラティスケージ設定` セクションで `現在のグリッド分割数` を確認します。
2. ラティスケージの分割数を変更する場合、`変更後のグリッド分割数` に希望する分割数 (例: `3, 4, 3`) を入力し、`適用` を押します。変更を元に戻す場合は `元に戻す`。

:::tip
`ケージ詳細設定` を展開すると `Local Bounds` や `Interpolation` (Trilinear / Cubic Bernstein) を調整できます。

`Local Bounds` はラティスケージのサイズを手動で設定する場合に使用します。通常はソースメッシュのバウンズに合わせるためデフォルトのままで問題ありません。

`Interpolation` は変形の補間方法を切り替えます。`Cubic Bernstein` を選択するとより滑らかな変形結果が得られますが、処理が重くなる場合があります。
:::

## 3. Lattice Tool で制御点を編集
1. Inspector 下部の `ラティスエディターを開く` を押して `Lattice Tool` を起動します。
    - Scene ビュー左上に `Lattice Tool` オーバーレイが表示され、`制御IDを表示` や `境界のみ/全制御点` などのトグルが利用できます。
2. 制御点 (小さなキューブ) をクリックすると黄色にハイライトされ、ハンドルで移動できます。 制御点の複数選択は Shift/Ctrl を押しながらクリックします。
    - 左右対称に変形したい場合はオーバーレイで `対称編集を有効化` をオンにし、`対称モード` と `対称軸` を指定します。`ミラー` は位置を反転コピー、`反対称` は逆方向に変位させます。
    - 内部の制御点を自動的に整えたい場合はオーバーレイから`制御点の範囲` を `全制御点` に切り替えます。編集後は自動的に内部点のスムージングが行われます。

## 4. プレビューを確認
1. Inspector の `メッシュ再構築オプション` を展開し、必要に応じて `Recalculate Normals/Tangents/Bounds` を有効にします。
2. `(NDMF) Enable Lattice Preview` ボタンを押すと、プレビュー表示を ON/OFF 切り替えできます。Scene ビューでメッシュが期待通り変形しているか確認しましょう。
3. 操作後に変形が反映されない場合は `適用` を押して最新のグリッドを反映し、再度 `ラティスエディターを開く` を実行します。

## 5. NDMF ビルドでベイク
1. 変形が固まったら `NDMF > Build Pipeline > Run Build` (または `VRChat SDK > Build & Test`) を実行します。
2. NDMF のビルド時に `LatticeDeformer` コンポーネントは自動削除され、`*_LatticeBaked` 付きの新しいメッシュが生成されます。
3. VRChat で検証する場合は、生成されたメッシュを含むアバターを `Build & Publish` し、インスタンス内で表示を確認します。
