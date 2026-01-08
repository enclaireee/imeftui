import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
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
      <body
        className={`${poppins.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
