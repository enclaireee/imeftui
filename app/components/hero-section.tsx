import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/fotoHero.webp"
          alt="IME FTUI Background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute top-0 inset-x-0 h-[30%] bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF175] via-[#FFE500] to-[#FFD400] [filter:drop-shadow(0px_4.23px_4.23px_rgba(0,0,0,0.25))_drop-shadow(0px_0px_17.06px_rgba(255,236,3,0.45))]">
          IME FTUI 2026
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-[0_0_20px_rgba(255,229,0,0.6)] font-extrabold">
          Ikatan Mahasiswa Elektro
          <br />
          Selaras | Efektif | Berdaya
        </p>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
