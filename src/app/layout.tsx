import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radiansyah Akmal Sofyan — Portofolio TI",
  description:
    "Portofolio Radiansyah Akmal Sofyan, mahasiswa Teknik Informatika Universitas Pamulang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans">{children}</body>
    </html>
  );
}
