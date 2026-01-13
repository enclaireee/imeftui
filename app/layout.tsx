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
  title: "IME FTUI 2026",
  description: "Official website of Ikatan Mahasiswa Elektro FTUI.",
  keywords: [
    "IME",
    "FTUI",
    "Elektro",
    "UI",
    "Ikatan Mahasiswa Elektro",
    "IME FTUI",
    "Teknik",
    "Universitas Indonesia",
  ],
  openGraph: {
    title: "IME FTUI 2026",
    description: "Official website of Ikatan Mahasiswa Elektro FTUI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
1;
