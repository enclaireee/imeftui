import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Ikatan Mahasiswa Elektro FTUI.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6 drop-shadow-sm">
            Hubungi Kami
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami melalui saluran di bawah ini.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold mb-4">Sekretariat IME FTUI</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Gedung Student Center Lt. 2<br />
                Fakultas Teknik UI, Depok 16424
              </p>
              
              <h2 className="text-xl font-bold mb-4 mt-8">Email</h2>
              <a href="mailto:imeftui@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                imeftui@gmail.com
              </a>
            </div>
            
            <div className="h-48 md:h-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              {/* Placeholder for Map or Illustration */}
              <p className="text-foreground/50">Peta Lokasi</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
