import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "世代の定番ミュージック",
  description:
    "あなたの世代を選択して、その時代を代表する楽曲を発見しましょう。10代から90代まで、各世代の社会背景と共に名曲をご紹介します。",
  keywords: "世代, ミュージック, 音楽, 歌謡曲, 懐メロ, 日本音楽史",
  authors: [{ name: "世代の定番ミュージック" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
