---
title: 前提条件
sidebar_position: 1
---

このページでは Lattice Deformation Tool を導入する前に確認しておきたい環境要件と推奨設定をまとめます。

## 必要なソフトウェア・パッケージ
- **Unity 2022.3 LTS**: VRChat Creator Companion (VCC) が案内する `Unity 2022.3.xf1 LTS` 系を使用します。Unity Hub を日本語にしている場合でも操作手順は同じです。
- **NDMF 1.9.0 以上**: `Non-Destructive Modular Framework (nadena.dev.ndmf)` をプロジェクトに追加してください。

## プロジェクトの前提
- VCC の `新しいプロジェクトを作成 (Create New Project)` から **VRChat SDK - Avatars** テンプレートを利用することを推奨します。

## 互換性メモ
- Avatar Optimizer など他の NDMF ベースツールと共存できます。ビルド順はプラグインが自動調整し、`Lattice Deformer` が `AAO: Avatar Optimizer (com.anatawa12.avatar-optimizer)` より前に処理されるようになっています。
