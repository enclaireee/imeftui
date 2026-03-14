import { Metadata } from "next";
import Image from "next/image";
import { Instagram, Linkedin, Globe, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "IME Hub",
  description: "Link-tree resmi Ikatan Mahasiswa Elektro FTUI.",
};

const links = [
  {
    title: "Website Resmi",
    url: "/",
    icon: Globe,
    primary: true,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/imeftui/",
    icon: Instagram,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/",
    icon: Linkedin,
  },
  {
    title: "Email",
    url: "mailto:imeftui@gmail.com",
    icon: Mail,
  },
];

export default function IMEHubPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden bg-noise">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(69,213,253,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-md w-full mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="relative w-24 h-24 mx-auto mb-6 bg-white/5 p-4 rounded-full border border-white/10 shadow-2xl glass-card">
            <Image
              src="/logo.png"
              alt="IME FTUI Logo"
              fill
              className="object-contain p-2"
              sizes="96px"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">IME FTUI</h1>
          <p className="text-foreground/70">Teknik Elektro Universitas Indonesia</p>
        </div>

        <div className="space-y-4 w-full">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`
                  flex items-center p-4 rounded-2xl w-full transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]
                  ${
                    link.primary
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 border border-primary/50"
                      : "glass-card text-foreground hover:bg-white/10"
                  }
                `}
              >
                <div className="flex-shrink-0 mr-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-center flex-grow -ml-10">
                  {link.title}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
