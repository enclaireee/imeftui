import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { REGISTRATION_FORM_URL } from "@/app/recruitment/data";

export const Footer = memo(function Footer() {
  const links = [
    { label: "Bidang", href: "#divisi" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQ", href: "#faq" },
    { label: "Daftar Sekarang", href: REGISTRATION_FORM_URL },
  ];

  return (
    <footer className="pt-10 md:pt-16 pb-6 md:pb-8 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mobile Footer - Compact */}
        <div className="md:hidden space-y-5">
          <div className="space-y-2">
            <Link href="/" className="block">
              <Image
                src="/logoNamaLight.webp"
                alt="IME FTUI Logo"
                width={100}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-xs">
                Ikatan Mahasiswa Elektro FTUI merupakan organisasi kemahasiswaan yang bertujuan untuk mewadahi,  melayani, dan membina mahasiswa Departemen Teknik Elektro.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.instagram.com/imeftui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <a
              href="mailto:imeftui@gmail.com"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-gray-400 text-xs">
              © 2026 Ikatan Mahasiswa Elektro FTUI. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Footer - Full */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-5 space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/logoNamaLight.webp"
                  alt="IME FTUI Logo"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Ikatan Mahasiswa Elektro FTUI merupakan organisasi kemahasiswaan yang bertujuan untuk mewadahi,  melayani, dan membina mahasiswa Departemen Teknik Elektro.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/imeftui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-300 hover:bg-gray-100 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-300 hover:bg-gray-100 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <a
                  href="mailto:imeftui@gmail.com"
                  className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-300 hover:bg-gray-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="col-span-2" />

            <div className="col-span-2">
              <h3 className="font-bold text-gray-900 mb-6 text-sm tracking-wide uppercase">
                Tautan
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black text-sm flex items-center gap-1 group transition-colors"
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-3">
              <h3 className="font-bold text-gray-900 mb-6 text-sm tracking-wide uppercase">
                Sekretariat
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sekretariat IME FTUI
                    <br />
                    Gedung Student Center Lt. 2
                    <br />
                    Fakultas Teknik UI, Depok 16424
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                  <a
                    href="mailto:imeftui@gmail.com"
                    className="text-gray-600 hover:text-black text-sm transition-colors"
                  >
                    imeftui@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2026 Ikatan Mahasiswa Elektro FTUI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
