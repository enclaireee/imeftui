import type { Metadata } from "next";
import { JsonLd, recruitmentEventSchema } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Open Recruitment IME FTUI 2026",
  description:
    "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026. Daftar sekarang dan jadilah bagian dari keluarga IME!",
  keywords: [
    "Open Recruitment",
    "IME FTUI",
    "Pendaftaran",
    "Mahasiswa Elektro",
    "FTUI 2026",
    "Organisasi Mahasiswa",
    "Universitas Indonesia",
  ],
  openGraph: {
    title: "Open Recruitment IME FTUI 2026",
    description:
      "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026. Daftar sekarang dan jadilah bagian dari keluarga IME!",
    url: "https://imeftui.com/recruitment",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Recruitment IME FTUI 2026",
    description:
      "Bergabunglah dengan Ikatan Mahasiswa Elektro FTUI 2026. Daftar sekarang dan jadilah bagian dari keluarga IME!",
  },
  alternates: {
    canonical: "https://imeftui.com/recruitment",
  },
};

export default function RecruitmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={recruitmentEventSchema} />
      {children}
    </>
  );
}
