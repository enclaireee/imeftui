import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | IME FTUI 2026",
  description:
    "Hubungi contact person Open Recruitment IME FTUI 2026. Punya pertanyaan? Kami siap membantu!",
  keywords: [
    "Contact",
    "IME FTUI",
    "Hubungi Kami",
    "Line ID",
    "Open Recruitment",
    "2026",
  ],
  openGraph: {
    title: "Contact | IME FTUI 2026",
    description:
      "Hubungi contact person Open Recruitment IME FTUI 2026. Punya pertanyaan? Kami siap membantu!",
    url: "https://imeftui.com/contacts",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | IME FTUI 2026",
    description:
      "Hubungi contact person Open Recruitment IME FTUI 2026. Punya pertanyaan? Kami siap membantu!",
  },
  alternates: {
    canonical: "https://imeftui.com/contacts",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
