# あの頃ソング (Ano Koro Song)

## プロジェクト概要

「年代ソングセレクター」は、ユーザーが自分の年齢をもとに年代（10 代〜90 代）を選択すると、その年代を代表する楽曲を一覧で表示する Web アプリケーションです。

各年代には、その時代の社会背景や文化を反映したコメントと代表曲が定義されており、選択された年代に応じた曲リストが画面に表示されます。

## 主な機能

- **年代選択**: スライダーまたはボタンで 10 代〜90 代を選択
- **時代背景コメント**: 各年代の社会背景と文化を説明
- **楽曲リスト**: 選択した年代の代表曲一覧表示
- **レスポンシブデザイン**: スマートフォンから PC まで対応
- **ダークモード**: Material Design 準拠の美しい UI

## 技術スタック

- **フレームワーク**: Next.js 15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デザイン**: Material Design 3 準拠
- **データ**: JSON 形式の楽曲データ

## セットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd ano-koro-song
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. ブラウザで `http://localhost:3000` にアクセス

### ビルド

```bash
npm run build
npm start
```

## プロジェクト構造

```
ano-koro-song/
├── app/
│   ├── data/
│   │   └── songs.json          # 楽曲データ
│   ├── lib/
│   │   └── songs.ts            # 楽曲データ操作ユーティリティ
│   ├── types/
│   │   └── song.ts             # TypeScript型定義
│   ├── globals.css             # グローバルスタイル
│   ├── layout.tsx              # ルートレイアウト
│   └── page.tsx                # メインページ
├── docs/                       # ドキュメント
│   ├── requirements.md         # 要件定義書
│   ├── ui設計指針.md           # UI設計指針
│   ├── ui定義書.md             # UI定義書
│   └── uiビジュアル仕様書.md   # UIビジュアル仕様書
└── package.json
```

## データ構造

楽曲データは `app/data/songs.json` に以下の形式で格納されています：

```json
[
  {
    "age_group": "90s",
    "comment": "時代背景の説明",
    "songs": [
      {
        "title": "曲名",
        "artist": "アーティスト名",
        "year": 1945,
        "note": "曲の説明"
      }
    ]
  }
]
```

## デザイン指針

- **Material Design 3**: Google の Material Design に準拠
- **ダークモード**: 目に優しいダークテーマ
- **アクセシビリティ**: キーボード操作とスクリーンリーダー対応
- **レスポンシブ**: モバイルファーストのデザイン

## 開発

### コマンド

- `npm run dev`: 開発サーバー起動
- `npm run build`: プロダクションビルド
- `npm run start`: プロダクションサーバー起動
- `npm run lint`: ESLint 実行

### コード規約

- TypeScript の厳密な型チェック
- ESLint によるコード品質管理
- Prettier によるコードフォーマット

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 貢献

プルリクエストやイシューの報告を歓迎します。貢献する前に、既存のイシューを確認してください。

## 更新履歴

- v0.1.0: 初期リリース
  - 年代選択機能
  - 楽曲リスト表示
  - Material Design 準拠 UI
  - レスポンシブデザイン
