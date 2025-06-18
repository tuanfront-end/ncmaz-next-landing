import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ncmaz - Blog, News & Magazine Next.js template",
  description:
    "Ncmaz - Blog, News & Magazine Next.js & Tailwind CSS template. The template is multipurpose and suitable for any blog, news, or magazine website.",
  keywords: ["blog", "news", "magazine", "nextjs", "tailwindcss"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
