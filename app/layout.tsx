import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Open Recruitment IME FTUI 2026",
  description:
    "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026. Daftar sekarang dan jadilah bagian dari keluarga IME!",
  keywords: ["IME", "FTUI", "Open Recruitment", "2026", "Elektro", "UI"],
  openGraph: {
    title: "Open Recruitment IME FTUI 2026",
    description: "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
