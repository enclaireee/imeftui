import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Ikatan Mahasiswa Elektro FTUI.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
