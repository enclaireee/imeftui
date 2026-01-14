import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { Toaster } from "@/components/ui/sonner";
import {
  JsonLd,
  imeOrganizationSchema,
  imeWebsiteSchema,
} from "@/components/json-ld";

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
  metadataBase: new URL("https://imeftui.com"),
  title: {
    default: "IME FTUI 2026",
    template: "%s | IME FTUI",
  },
  description:
    "Official website of Ikatan Mahasiswa Elektro FTUI. Bergabunglah dengan keluarga besar mahasiswa elektro Universitas Indonesia.",
  keywords: [
    "IME",
    "FTUI",
    "Elektro",
    "UI",
    "Ikatan Mahasiswa Elektro",
    "IME FTUI",
    "Teknik",
    "Universitas Indonesia",
    "Teknik Elektro",
    "Open Recruitment",
    "Mahasiswa",
    "Organisasi Mahasiswa",
  ],
  authors: [{ name: "IME FTUI", url: "https://imeftui.com" }],
  creator: "IME FTUI",
  publisher: "IME FTUI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "IME FTUI 2026",
    description:
      "Official website of Ikatan Mahasiswa Elektro FTUI. Bergabunglah dengan keluarga besar mahasiswa elektro Universitas Indonesia.",
    url: "https://imeftui.com",
    siteName: "IME FTUI",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IME FTUI 2026",
    description:
      "Official website of Ikatan Mahasiswa Elektro FTUI. Bergabunglah dengan keluarga besar mahasiswa elektro Universitas Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
  alternates: {
    canonical: "https://imeftui.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <JsonLd data={[imeOrganizationSchema, imeWebsiteSchema]} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var html = document.documentElement;
                  // Default to dark mode unless explicitly set to light
                  if (theme === 'light') {
                    html.classList.remove('dark');
                    html.classList.add('light');
                  } else {
                    // Ensure dark mode is applied (default)
                    html.classList.remove('light');
                    html.classList.add('dark');
                    // Set default if not already set
                    if (!theme) {
                      localStorage.setItem('theme', 'dark');
                    }
                  }
                } catch (e) {
                  // If localStorage fails, ensure dark mode is still applied
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
