# 変更履歴

ポートフォリオサイトの主要な更新記録です。コミットハッシュは `main` ブランチ上のものです。

---

## プロフィールに GitHub リンク追加（`c96d507`）

**概要:** 「UI/UX Designer」の下に、このリポジトリへの GitHub リンクを追加。

**変更ファイル:**

- `src/components/Home/ProfileSection.tsx`

**挙動:**

- アイコン: `react-icons/si` の `SiGithub`（画像ファイルは不要）
- リンク先: `https://github.com/kotsuru0812/portfolio`（新規タブで開く）
- 表示ラベル: `github.com/kotsuru0812/portfolio`（`break-all` で折り返し対応）
- `aria-label` でスクリーンリーダー向けに説明を付与

---

## ドキュメント整備（`13cd0c6`）

**概要:** 開発・運用向けに `docs/` フォルダを新設。

**追加ファイル:**

- `docs/README.md` — 目次
- `docs/architecture.md` — プロジェクト構成
- `docs/changelog.md` — 本ファイル
- `docs/guides/portfolio.md` — 作品・画像の運用手順
- `docs/guides/hobby.md` — Hobby 画像の運用手順

**変更ファイル:**

- `README.md` — `docs/README.md` へのリンクを追加

---

## 複数画像ギャラリー（`61a040d`）

**概要:** 作品データを `images[]` に拡張し、詳細ページで複数画像を表示。

**変更ファイル:**

- `src/components/Portfolio.tsx` — `image` / `imageSize` を `images: PortfolioImage[]` に変更
- `src/components/PortfolioGallery.tsx` — 新規（PC 縦並び / スマホカルーセル）
- `src/components/Home/Portfolio.tsx` — 一覧は `images[0]` を参照
- `src/app/portfolio/[id]/page.tsx` — `PortfolioGallery` を利用

**挙動:**

- 一覧は従来どおり先頭1枚のみ
- 詳細 PC: 全画像を縦並び
- 詳細スマホ: カルーセル（ドット・左右タップ）
- `mobile-order` 3枚、`onboarding` 2枚をデータに登録

---

## Hobby 画像差し替え（`00fb144`）

**概要:** Hobby セクションの6枚を和菓子・スイーツ写真に差し替え。

**変更ファイル:**

- `public/hobby/` — 新 PNG 6枚、旧 JPG 6枚削除
- `src/components/Home/images.ts` — パス・alt・サイズ（1024×682）を更新

**表示順（alt）:**

1. もらい水
2. 吉はし深山桜
3. フレッシュライチのケーキ
4. フランボワーズのガトー
5. キャラメルシュークリーム
6. キャラメルチョコバー

---

## Portfolio 8作品サムネ差し替え（`4203c54`）

**概要:** 既存8作品のサムネイルを 1024×768 の新画像に差し替え。

**対象 id:**

`circle-life`, `agu`, `cookpad-kitchen-star`, `cookpad-studio`, `cookpad-tv`, `cookpad-storetv`, `cookpad-id`, `cookpad-pro-recipe`

**変更ファイル:**

- `public/portfolio/*-01.png` — 新規追加、旧 PNG 削除
- `src/components/Portfolio.tsx` — `images` のパスとサイズ更新

---

## 一覧・詳細 UI 改善（`087e4b7`）

**概要:** トップの Portfolio レイアウトと詳細ページの見た目を調整。

**主な変更:**

- Portfolio 見出し（`h2`）をトップ上部へ移動（`src/app/page.tsx`）
- 一覧サムネを 4:3（`aspect-[4/3]`）に統一
- バッジとサムネの間隔 16px（`ProjectTypeBadges` の `className`）
- 詳細ページのタイトル・バッジを中央寄せ
- Cookpad 作品の表示順調整（`cookpad-kitchen-star` と `cookpad-pro-recipe` の `year` 入れ替え）

**変更ファイル:**

- `src/app/page.tsx`
- `src/components/Home/Portfolio.tsx`
- `src/components/ProjectTypeBadges.tsx`
- `src/app/portfolio/[id]/page.tsx`
- `src/components/Portfolio.tsx`

---

## POS+ 3作品追加（`7e9cbc7`）

**概要:** POS+ の作品を3件追加。

**追加 id:**

| id | タイトル | 年 | 種別 |
|----|----------|-----|------|
| `crm-dashboard` | CRM - ダッシュボード | 2024 | 改善 |
| `mobile-order` | モバイルオーダー | 2024 | 改善 |
| `onboarding` | オンボーディング効率化 | 2025 | リニューアル |

**変更ファイル:**

- `src/components/Portfolio.tsx`
- `src/components/Home/workExperience.ts`（職歴との整合）
- `public/portfolio/` — 画像ファイル追加

---

## プロフィール・Portfolio 閲覧の再設計（`2ae202e`）

**概要:** ホームのプロフィール表示と、会社別・プロジェクト種別での Portfolio 閲覧を導入。

**関連:** `src/lib/portfolioViews.ts`, `src/lib/companies.ts`, `ProfileSection`, フィルタ UI

---

## それ以前

- `54b78d0` — README に Vercel URL を追加
- 初期構成 — Next.js ポートフォリオ、Hobby ライトボックス、作品詳細 SSG
