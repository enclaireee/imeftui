import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard panel untuk pengguna IME FTUI.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 drop-shadow-sm">
            Dashboard
          </h1>
          <p className="text-foreground/70 mt-2">
            Selamat datang di panel kontrol Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-foreground/60 text-sm font-medium mb-2">Statistik {i}</h3>
              <p className="text-4xl font-bold text-foreground">0{i}</p>
            </div>
          ))}

          {/* Main Content Area */}
          <div className="md:col-span-2 glass-card p-8 rounded-2xl border border-white/10 min-h-[400px]">
            <h2 className="text-xl font-bold mb-6">Aktivitas Terkini</h2>
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-foreground/60">Belum ada aktivitas untuk ditampilkan.</p>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 min-h-[400px]">
            <h2 className="text-xl font-bold mb-6">Pintasan</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 rounded-xl bg-white/5 flex items-center px-4 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                  <span className="w-6 h-6 rounded-md bg-primary/20 mr-3"></span>
                  <span className="text-sm font-medium">Aksi Cepat {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
