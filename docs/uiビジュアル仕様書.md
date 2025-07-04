# UIビジュアル仕様書 / UI Visual Design Specification

## 基本方針
本アプリのUIは、GoogleのMaterial Designに準拠しつつ、**先進的かつモダンな印象を与えるダークモード基調**でデザインします。夜間や屋内の使用環境に配慮し、視認性と可読性を確保した色彩・構成とします。

---

## カラーパレット
| 用途           | カラーコード       | 説明 |
|----------------|--------------------|------|
| 背景（ベース）     | `#121212`           | 完全な黒ではなく、目に優しい暗めのグレー（Material Design の Dark Theme ベース） |
| サーフェス（カード等） | `#1E1E1E`           | 背景よりやや明るいグレー、コンテンツ領域用 |
| プライマリ       | `#4F46E5`           | 洗練された青紫系、アクション・アクセントに使用（Tailwind `indigo-600`） |
| セカンダリ       | `#14B8A6`           | 補助色、タグ・アイコン・ハイライトに使用（Tailwind `teal-500`） |
| テキスト（主）     | `#EDEDED`           | 高コントラストな白系（明るすぎず目に優しい） |
| テキスト（補助）   | `#A3A3A3`           | サブテキストや注釈用のグレー |
| 境界線・枠線      | `#2A2A2A`           | コンポーネントの境界、仕切り線用 |
| ホバー背景       | `#2D2D2D`           | ホバー時の強調背景色 |


## タイポグラフィ
| 用途       | フォントサイズ | Tailwind例        | 備考 |
|------------|----------------|-------------------|------|
| アプリ名     | `text-2xl`      | `font-bold`        | 太字で目立たせる |
| 年代ラベル   | `text-xl`       | `font-semibold`    | 現在選択中の年代強調表示 |
| コメント本文 | `text-base`     | `leading-relaxed`  | 落ち着いた行間 |
| 楽曲情報     | `text-sm`       | `text-gray-300`    | 落ち着いた補助テキスト風 |

## コンポーネントスタイル
### スライダー
- `track`: `bg-gray-700`
- `thumb`: `bg-indigo-500`, `rounded-full`, `shadow-md`, `focus:outline-none`
- バブルラベル：`bg-indigo-600 text-white text-xs px-2 py-1 rounded`、現在値を上部に表示

### ボタン（＋／−）
- 標準：`bg-indigo-600 text-white rounded-full w-10 h-10`
- ホバー：`hover:bg-indigo-500`
- 非活性：`opacity-40 cursor-not-allowed`

### 楽曲カード
- 背景：`bg-[#1E1E1E]`
- パディング：`p-4`
- 枠：`border border-gray-700 rounded-xl`
- シャドウ：`shadow-md hover:shadow-lg transition-shadow`
- テキスト構成：
  - タイトル：`text-lg font-semibold`
  - アーティスト：`text-sm text-gray-400`
  - 年・備考：`text-xs text-gray-500`

## レイアウト・スペーシング
- 外枠マージン：`mx-auto max-w-screen-md`
- セクション間隔：`space-y-6`
- 内部パディング：`p-4 sm:p-6`

## アニメーション
- スライダー操作時：`transition-all duration-200 ease-out`
- ボタン・カード：`hover:scale-[1.02] transition-transform duration-150`

## アイコン
- 使用ライブラリ：`Lucide`（Tailwind Heroicons 互換）
- サイズ：`w-5 h-5` または `w-6 h-6` を基準
- 一貫性ある位置揃えとアクセシブルな `aria-label` を付与

---

この仕様書は「UI定義書」に基づき、ビジュアル要素（色・フォント・装飾）に特化した指針を提供するものであり、開発工程でのTailwind CSS設計の一貫性と保守性を高めることを目的としています。

