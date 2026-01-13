import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Recruitment IME FTUI 2026",
  description:
    "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026. Daftar sekarang dan jadilah bagian dari keluarga IME!",
  openGraph: {
    title: "Open Recruitment IME FTUI 2026",
    description: "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026",
    type: "website",
  },
};

export default function MasihOTWLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
