import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

const inter = Zen_Maru_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoko Daikoku's Portfolio",
  description: "Yoko Daikoku's portfolio site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} dark:text-slate-200 bg-white dark:bg-slate-950`}>
        <div className="flex flex-col min-h-[100dvh]">
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
