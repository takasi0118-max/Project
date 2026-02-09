import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Takashi Portfolio",
  description: "SEO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[var(--background)] min-h-screen`}>
        <div className="max-w-[1420px] mx-auto h-screen bg-blue-100">
          {children}
        </div>
      </body>
    </html>
  );
}