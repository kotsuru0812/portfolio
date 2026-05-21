# Portfolio 運用ガイド

作品の追加・画像の差し替え・複数画像の登録手順です。

## 前提

- マスタデータ: `src/components/Portfolio.tsx` の `portfolioItems`
- 画像配置: `public/portfolio/`
- 一覧・詳細の表示ロジックはコンポーネント側で固定（データを編集すれば反映）

## 新規作品の追加

### 1. 画像を配置

`public/portfolio/` に PNG を置きます。ファイル名は `id` と対応させると管理しやすいです（例: `my-project-01.png`）。

### 2. `portfolioItems` にエントリを追加

`src/components/Portfolio.tsx` の配列末尾（または適切な位置）にオブジェクトを追加します。

```ts
{
  id: "my-project",           // URL: /portfolio/my-project（英数字・ハイフン推奨）
  title: "作品タイトル",
  year: 2025,
  company: "POS+",            // "Cookpad" | "Cookpad TV" | "LBOSE" | "POS+" | null
  projectTypes: ["new"],      // "new" | "improvement" | "renewal"（複数可）
  sortOrder: 1,               // 同年の並び（小さいほど上）
  charge: "担当内容のテキスト",
  ingenuity: "工夫した点のテキスト",
  concept: "任意。コンセプト（改行は \\n）",
  award: "任意。受賞歴",
  images: [
    { src: "/portfolio/my-project-01.png", width: 1024, height: 768 },
  ],
},
```

### 3. ビルド確認

```bash
npm run build
```

`/portfolio/my-project` が静的生成されることを確認します。開発中は `npm run dev` で表示も確認できます。

## 画像の差し替え（1枚の作品）

1. `public/portfolio/` のファイルを新画像で上書き、または新ファイル名で追加
2. `images` 内の `src` を更新
3. 実寸が変わる場合は `width` / `height` も更新（`sips -g pixelWidth -g pixelHeight ファイル名` などで確認）

一覧サムネは `images[0]` を使うため、**差し替えたい見せたい画を配列の先頭**に置きます。

## 複数画像の登録

`images` 配列に要素を追加します。

```ts
images: [
  { src: "/portfolio/mobileorder-01.png", width: 1024, height: 768 },
  { src: "/portfolio/mobileorder-02.png", width: 1024, height: 768 },
  { src: "/portfolio/mobileorder-03.png", width: 1024, height: 768 },
],
```

| 画面 | 挙動 |
|------|------|
| 一覧 | 先頭1枚のみ（4:3 でクロップ表示） |
| 詳細 PC | 全枚を縦並び |
| 詳細スマホ | カルーセルで全枚を閲覧 |

## 表示順の調整

同じ会社・同じ年の中での順序は `sortOrder`（昇順）で制御します。

年をまたいだ順序は `year`（降順）が優先されます。意図した並びにならない場合は `year` と `sortOrder` の両方を確認してください。

## プロジェクト種別バッジ

| `projectTypes` の値 | 表示 |
|---------------------|------|
| `new` | 新規立上げ |
| `improvement` | 改善 |
| `renewal` | リニューアル |

フィルタ（All / 新規立上げ / 改善 / リニューアル）は `src/components/Home/Portfolio.tsx` が `portfolioViews.ts` 経由で絞り込みます。

## 会社の表示順

`src/lib/companies.ts` の `COMPANY_ORDER` で固定です。新しい会社を追加する場合は同ファイルと `CompanyName` 型も更新が必要です。

## 推奨画像サイズ

| 用途 | 推奨 |
|------|------|
| 作品画像 | 1024×768（実績値。横長 UI スクショ向け） |
| 形式 | PNG |

## 注意事項

### ファイル名 `onbording`

オンボーディング作品の画像は `onbording-01.png` のように **onboarding ではなく onbording** と綴られています。データの `src` とファイル名を一致させてください。

### 開発サーバと `/portfolio/` パス

`public/portfolio/` 配下の静的ファイルと、動的ルート `/portfolio/[id]` が開発時に競合し、表示が崩れることがあります。対処例:

```bash
# 複数の dev プロセスを終了
pkill -f "next dev"
rm -rf .next
npm run dev
```

本番ビルド（`npm run build`）では通常問題になりません。

### `id` の一意性

`id` は URL セグメントになります。既存 id と重複しないようにしてください。`generateStaticParams` は `portfolioItems` から自動生成されます。
