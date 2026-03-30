---
title: 前提条件とインストール
sidebar_position: 1
---

このページでは Lattice Deformation Tool の環境要件とインストール手順をまとめます。

## 必要なソフトウェア・パッケージ

- **Unity 2022.3 LTS**: VRChat Creator Companion (VCC) が案内する `Unity 2022.3.xf1 LTS` 系を使用します。Unity Hub を日本語にしている場合でも操作手順は同じです。
- **NDMF 1.9.0 以上**: `Non-Destructive Modular Framework (nadena.dev.ndmf)` がプロジェクトに必要です。VPM 経由でインストールすると自動的に追加されます。

## プロジェクトの前提

VCC の `新しいプロジェクトを作成 (Create New Project)` から **VRChat SDK - Avatars** テンプレートを利用することを推奨します。

## インストール手順

### VPM リポジトリ経由 (推奨)

1. ブラウザで [https://vpm.32ba.net](https://vpm.32ba.net) を開きます。
2. ページ内の **Add to VCC** ボタンをクリックして VCC にリポジトリを追加します。
3. VCC で対象プロジェクトの `Manage Project` を開き、パッケージ一覧から **Lattice Deformation Tool** の `+` ボタンをクリックしてインストールします。

{/* TODO: VCC の Manage Project 画面でパッケージを追加する手順のスクリーンショット */}

:::tip
NDMF は依存パッケージとして自動的にインストールされます。手動で追加する必要はありません。
:::

### 手動インストール

VCC に VPM リポジトリを追加できない場合は、リポジトリを手動で `Packages` フォルダに配置することもできます。

1. パッケージのリポジトリをダウンロードまたは clone します。
2. Unity プロジェクトの `Packages` フォルダに `net.32ba.lattice-deformation-tool` として配置します。
3. NDMF (`nadena.dev.ndmf` 1.9.0 以上) が別途インストールされていることを確認してください。

## 互換性メモ

- Avatar Optimizer など他の NDMF ベースツールと共存できます。ビルド順はプラグインが自動調整し、`Lattice Deformer` が `AAO: Avatar Optimizer (com.anatawa12.avatar-optimizer)` より前に処理されるようになっています。
