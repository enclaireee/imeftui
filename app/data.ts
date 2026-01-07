import {
  Users,
  Briefcase,
  GraduationCap,
  Network,
  Trophy,
  Megaphone,
  Shield,
  FileText,
  Rocket,
  HandHeart,
  Cpu,
  Music,
  Wallet,
  Heart,
  LucideIcon,
} from "lucide-react";

export const RECRUITMENT_DEADLINE = new Date("2026-01-21T23:59:59");

export const stats = [
  { value: "900+", label: "Warga Departemen Teknik Elektro" },
  { value: "60+", label: "Program Kerja" },
  { value: "12", label: "Divisi" },
  { value: "1", label: "Keluarga Penjejak Asa" },
];

export interface Divisi {
  id: number;
  name: string;
  abbr: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  programs: string[];
  addedValues: string[];
  color: string;
}

export const divisi: Divisi[] = [
  {
    id: 1,
    name: "Akademis dan Profesi",
    abbr: "AKPRO",
    description: "Mengembangkan akademik dan profesi mahasiswa",
    fullDescription:
      "Divisi yang bertanggung jawab dalam pengembangan akademik dan profesional mahasiswa melalui berbagai kegiatan seperti seminar, workshop, dan bimbingan karir.",
    icon: GraduationCap,
    programs: ["Seminar Karir", "Workshop Technical"],
    addedValues: ["Skill Profesional", "Networking Industri"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    name: "Kajian dan Aksi Strategis",
    abbr: "Kastrat",
    description: "Kajian isu strategis dan advokasi",
    fullDescription:
      "Divisi yang fokus pada kajian isu-isu strategis kemahasiswaan dan melakukan advokasi untuk kepentingan mahasiswa Teknik Elektro.",
    icon: Megaphone,
    programs: ["Diskusi Publik", "Kajian Kebijakan"],
    addedValues: ["Critical Thinking", "Public Speaking"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    name: "Kemahasiswaan",
    abbr: "KEMA",
    description: "Koordinasi kegiatan kemahasiswaan",
    fullDescription:
      "Divisi yang mengkoordinasikan seluruh kegiatan kemahasiswaan dan menjadi penghubung antara mahasiswa dengan pihak fakultas.",
    icon: Users,
    programs: ["Koordinasi Event", "Networking Session"],
    addedValues: ["Leadership", "Manajemen Tim"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    name: "Kesejahteraan Mahasiswa",
    abbr: "KESMA",
    description: "Advokasi dan kesejahteraan mahasiswa",
    fullDescription:
      "Divisi yang bertugas memastikan kesejahteraan mahasiswa terjaga, termasuk advokasi hak-hak mahasiswa dan bantuan sosial.",
    icon: Shield,
    programs: ["Advokasi Mahasiswa", "Bantuan Sosial"],
    addedValues: ["Empati Sosial", "Problem Solving"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 5,
    name: "Kesekretariatan",
    abbr: "KESTARI",
    description: "Administrasi dan dokumentasi",
    fullDescription:
      "Divisi yang mengelola administrasi organisasi, dokumentasi kegiatan, dan arsip penting IME FTUI.",
    icon: FileText,
    programs: ["Manajemen Arsip", "Dokumentasi Event"],
    addedValues: ["Detail Oriented", "Organisasi"],
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    id: 6,
    name: "Komunikasi dan Informasi",
    abbr: "KOMINFO",
    description: "Media sosial dan publikasi",
    fullDescription:
      "Divisi yang mengelola komunikasi internal dan eksternal, media sosial, serta publikasi seluruh kegiatan IME FTUI.",
    icon: Network,
    programs: ["Social Media", "Desain Grafis"],
    addedValues: ["Kreativitas", "Digital Marketing"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 7,
    name: "Penelitian dan Pengembangan",
    abbr: "LITBANG",
    description: "Riset dan inovasi teknologi",
    fullDescription:
      "Divisi yang fokus pada penelitian, pengembangan teknologi, dan inovasi untuk mendukung kemajuan mahasiswa Teknik Elektro.",
    icon: Rocket,
    programs: ["Research Project", "Hackathon"],
    addedValues: ["Analytical Thinking", "Inovasi"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 8,
    name: "Pengabdian Masyarakat",
    abbr: "PENGMAS",
    description: "Kegiatan sosial dan pengabdian",
    fullDescription:
      "Divisi yang menyelenggarakan kegiatan pengabdian kepada masyarakat sebagai bentuk kontribusi mahasiswa Teknik Elektro.",
    icon: HandHeart,
    programs: ["Bakti Sosial", "Mengajar Desa"],
    addedValues: ["Kepedulian Sosial", "Teamwork"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: 9,
    name: "Pengembangan IPTEK",
    abbr: "PIPTEK",
    description: "Pengembangan ilmu dan teknologi",
    fullDescription:
      "Divisi yang bertanggung jawab dalam pengembangan ilmu pengetahuan dan teknologi melalui berbagai kompetisi dan proyek.",
    icon: Cpu,
    programs: ["Lomba Teknologi", "Workshop Coding"],
    addedValues: ["Technical Skills", "Problem Solving"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 10,
    name: "Rohani Elektro",
    abbr: "RETRO",
    description: "Kegiatan keagamaan dan spiritual",
    fullDescription:
      "Divisi yang menyelenggarakan kegiatan keagamaan dan pembinaan spiritual bagi seluruh mahasiswa Teknik Elektro.",
    icon: Heart,
    programs: ["Kajian Rutin", "Ramadan Program"],
    addedValues: ["Spiritual Growth", "Komunitas"],
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 11,
    name: "Kreasi Mahasiswa",
    abbr: "SIWA",
    description: "Seni, budaya, dan kreativitas",
    fullDescription:
      "Divisi yang mewadahi kreativitas mahasiswa dalam bidang seni, budaya, dan berbagai kegiatan ekstrakurikuler.",
    icon: Music,
    programs: ["Festival Seni", "Band Competition"],
    addedValues: ["Ekspresi Kreatif", "Bakat Seni"],
    color: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    id: 12,
    name: "Keuangan dan Kewirausahaan",
    abbr: "KEWIRUS",
    description: "Keuangan dan entrepreneurship",
    fullDescription:
      "Divisi yang mengelola keuangan organisasi dan mengembangkan jiwa kewirausahaan mahasiswa melalui berbagai program bisnis.",
    icon: Wallet,
    programs: ["Business Workshop", "Bazaar"],
    addedValues: ["Financial Literacy", "Entrepreneurship"],
    color: "from-lime-500/20 to-green-500/20",
  },
];

export const timeline = [
  {
    date: "7 Januari 2026",
    event: "Pendaftaran Dibuka",
    description: "Formulir pendaftaran online tersedia",
    status: "active",
  },
  {
    date: "14 Januari 2026",
    event: "Info Session",
    description: "Pengenalan IME dan divisi",
    status: "upcoming",
  },
  {
    date: "21 Januari 2026",
    event: "Pendaftaran Ditutup",
    description: "Batas akhir pengumpulan formulir",
    status: "upcoming",
  },
  {
    date: "25 Januari 2026",
    event: "Seleksi Wawancara",
    description: "Interview dengan divisi pilihan",
    status: "upcoming",
  },
  {
    date: "1 Februari 2026",
    event: "Pengumuman",
    description: "Hasil seleksi diumumkan",
    status: "upcoming",
  },
];

export const requirements = [
  "Mahasiswa aktif Teknik Elektro FTUI",
  "Berkomitmen dan bertanggung jawab",
  "Memiliki semangat belajar tinggi",
  "Mampu bekerja dalam tim",
  "Bersedia mengikuti rangkaian seleksi",
];

export const faqs = [
  {
    question: "Apa itu IME FTUI?",
    answer:
      "IME (Ikatan Mahasiswa Elektro) FTUI adalah organisasi kemahasiswaan yang mewadahi seluruh mahasiswa Teknik Elektro Universitas Indonesia.",
  },
  {
    question: "Siapa yang bisa mendaftar?",
    answer:
      "Seluruh mahasiswa aktif Departemen Teknik Elektro FTUI dari semua angkatan dapat mendaftar.",
  },
  {
    question: "Berapa divisi yang bisa dipilih?",
    answer:
      "Kamu dapat memilih maksimal 2 divisi sebagai pilihan pertama dan kedua.",
  },
  {
    question: "Bagaimana proses seleksinya?",
    answer:
      "Proses seleksi meliputi screening berkas, wawancara, dan penilaian kecocokan dengan divisi.",
  },
];

export const benefits = [
  {
    icon: Network,
    title: "Networking",
    description: "Koneksi dengan 500+ mahasiswa dan alumni",
  },
  {
    icon: GraduationCap,
    title: "Pengembangan Diri",
    description: "Workshop, seminar, dan pelatihan rutin",
  },
  {
    icon: Briefcase,
    title: "Pengalaman Kerja",
    description: "Kelola proyek dan event nyata",
  },
  {
    icon: Trophy,
    title: "Kompetisi",
    description: "Ikuti lomba tingkat nasional",
  },
];

export const gallery = [
  { id: 1, title: "Musyawarah Besar", category: "Event" },
  { id: 2, title: "Workshop Teknis", category: "Workshop" },
  { id: 3, title: "Dies Natalis", category: "Event" },
  { id: 4, title: "Bakti Sosial", category: "Sosial" },
  { id: 5, title: "Gathering Anggota", category: "Internal" },
  { id: 6, title: "Seminar Nasional", category: "Seminar" },
];

export const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Ketua Departemen Ristek 2025",
    quote:
      "IME membentuk saya menjadi pribadi yang lebih bertanggung jawab dan siap menghadapi dunia kerja.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Staff Humas 2024",
    quote:
      "Pengalaman yang tidak akan saya dapatkan di tempat lain. Networking dan skill yang saya dapat sangat berharga.",
  },
  {
    name: "Budi Santoso",
    role: "Bendahara 2025",
    quote:
      "Belajar manajemen keuangan secara langsung dengan tanggung jawab nyata. Sangat worth it!",
  },
];
