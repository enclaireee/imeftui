import {
  Users,
  GraduationCap,
  Network,
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
  Link,
  Handshake,
  ClipboardList,
  Building,
} from "lucide-react";

export const RECRUITMENT_DEADLINE = new Date("2026-01-16T18:59:59");
export const REGISTRATION_FORM_URL = "https://forms.gle/";

export const stats = [
  { value: "800+", label: "Warga Departemen Teknik Elektro" },
  { value: "60+", label: "Program Kerja" },
  { value: "12", label: "Bidang" },
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
      "Akademis dan Profesi IME FTUI bertanggungjawab untuk mengadvokasi keperluan akademis dan pasca-kampus mahasiswa Departemen Teknik Elektro.",
    icon: GraduationCap,
    programs: ["Diktat", "Asistensi Matkul"],
    addedValues: ["Akademis", "Perumusan Materi"],
    color: "from-primary/20 to-primary/40",
  },
  {
    id: 2,
    name: "Kajian dan Aksi Strategis",
    abbr: "Kastrat",
    description: "Kajian isu strategis dan advokasi",
    fullDescription:
      "Kajian dan Aksi Strategis merupakan bidang di IME FTUI yang bertanggung jawab atas fungsi pengkajian, penanaman, dan pencerdasan serta peningkatan iklim diskusi warga DTE terhadap isu POLEKSOSBUDHANKAMLING dan keelektroan.",
    icon: Megaphone,
    programs: ["Distro", "Sociotalk"],
    addedValues: ["Copywriting", "Issue Analysis"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    name: "Kemahasiswaan",
    abbr: "KEMA",
    description: "Koordinasi kegiatan kemahasiswaan",
    fullDescription:
      "Kemahasiswaan merupakan bidang yang bertanggung jawab dalam mengawal pembinaan baik intra maupun pasca kampus yang dilaksanakan oleh Departemen Teknik Elektro.",
    icon: Users,
    programs: ["PONSEL", "Sharing Session"],
    addedValues: ["People Management", "Critical Thinking"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    name: "Kesejahteraan Mahasiswa",
    abbr: "KESMA",
    description: "Advokasi dan kesejahteraan mahasiswa",
    fullDescription:
      "Kesejahteraan Mahasiswa IME FTUI adalah bidang yang berfungsi untuk mengadvokasi kesehatan mental, kebutuhan fasilitas, dan finansial mahasiswa Departemen Teknik Elektro.",
    icon: Shield,
    programs: ["KENTAL", "Electrical Engineering Foundation"],
    addedValues: ["Mental health Awareness", "Administrasi"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 5,
    name: "Kesekretariatan",
    abbr: "KESTARI",
    description: "Administrasi dan dokumentasi",
    fullDescription:
      "Bidang kesekretariatan IME FTUI bertanggung jawab untuk mengawasi alur administrasi internal dan eksternal lembaga IME FTUI.",
    icon: FileText,
    programs: ["Internal Games", "Birthday Blast"],
    addedValues: ["Copywriting", "Administrasi"],
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    id: 6,
    name: "Komunikasi dan Informasi",
    abbr: "KOMINFO",
    description: "Media sosial dan publikasi",
    fullDescription:
      "Bidang Komunikasi dan Informasi IME FTUI 2026 bertanggung jawab mengelola informasi internal dan eksternal, menjaga citra IME FTUI, serta menjalin hubungan baik dengan seluruh stakeholder.",
    icon: Network,
    programs: ["PSB IME FTUI", "Website"],
    addedValues: ["Graphic Design", "Relasi dengan Alumni"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 7,
    name: "Penelitian dan Pengembangan",
    abbr: "LITBANG",
    description: "Riset dan inovasi teknologi",
    fullDescription:
      "Penelitian dan Pengembangan merupakan bidang yang berfungsi sebagai evaluator, analisator, dan konsultan bagi seluruh bidang di IME FTUI. ",
    icon: Rocket,
    programs: ["BLUEPRINT", "Human Resource Evaluation"],
    addedValues: ["Consulting", "Structured Problem Solving"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 8,
    name: "Pengabdian Masyarakat",
    abbr: "PENGMAS",
    description: "Kegiatan sosial dan pengabdian",
    fullDescription:
      "Bidang Pengabdian Masyarakan bertanggung jawab dalam mengimplementasikan salah satu tridharma perguruan tinggi yang berkaitan dengan pengabdian masyarakat.",
    icon: HandHeart,
    programs: ["Elektro Charity", "Sociotalk"],
    addedValues: ["Social Awareness", ""],
    color: "from-secondary/20 to-secondary/10",
  },
  {
    id: 9,
    name: "Pengembangan Ilmu Pengetahuan dan Teknologi",
    abbr: "PIPTEK",
    description: "Pengembangan ilmu dan teknologi",
    fullDescription:
      "Bidang Pengabdian Masyarakan bertanggung jawab dalam mengimplementasikan salah satu tridharma perguruan tinggi yang berkaitan dengan pengabdian masyarakat.",
    icon: Cpu,
    programs: ["Elektro Charity", "Sociotalk"],
    addedValues: ["Technical Skills", "Problem Solving"],
    color: "from-primary/20 to-primary/40",
  },
  {
    id: 10,
    name: "Rohani Elektro",
    abbr: "RETRO",
    description: "Kegiatan keagamaan dan spiritual",
    fullDescription:
      "Bidang yang menyelenggarakan kegiatan keagamaan dan pembinaan spiritual bagi seluruh mahasiswa Teknik Elektro.",
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
      "Bidang Kreasi Mahasiswa menjaring, mewadahi, dan mengapresiasi minat dan bakat warga Departemen Teknik Elektro dalam bidang seni, dan Olahraga. Serta mencriptakan suasana bersenang-senang di DTE.",
    icon: Music,
    programs: ["Gladiator", "Electrical Engineering Cup"],
    addedValues: ["Project Management", "Talent Management"],
    color: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    id: 12,
    name: "Keuangan dan Kewirausahaan",
    abbr: "KEWIRUS",
    description: "Keuangan dan entrepreneurship",
    fullDescription:
      "Keuangan dan Kewirausahaan bertanggung jawab atas keuangan dan kewirausahaan IME FTUI. KEWIRUS bertanggung jawab atas seluruh pemasukan dan pengeluaran IME FTUI, serta pencarian pemasukan keuangan untuk dana lembaga IME FTUI. KEWIRUS juga bertanggungjawab untuk mengembangkan skill dan semangat kewirausahaan kepada mahasiswa di DTE.",
    icon: Wallet,
    programs: ["Audit Keuangan", "ELEMENT"],
    addedValues: ["Financial Management", "Entrepreneurship"],
    color: "from-lime-500/20 to-green-500/20",
  },
];

export const timeline = [
  {
    date: "16 Januari 2026",
    event: "Open House",
    description: "Presentasi dan tanya-tanya setiap bidang IME FTUI melalui zoom meeting",
    status: "active",
  },
  {
    date: "18 Januari 2026",
    event: "Open Recruitment",
    description: "Pendaftaran BP IME FTUI 2026 resmi dibuka",
    status: "upcoming",
  },
  {
    date: "25 Januari 2026",
    event: "Last Day of Registration",
    description: "Batas akhir pendaftaran BP IME FTUI 2026",
    status: "upcoming",
  },
  {
    date: "26 Januari 2026",
    event: "Seleksi Wawancara",
    description: "Interview pendaftar dengan bidang pilihan",
    status: "upcoming",
  },
  {
    date: "7 Februari 2026",
    event: "Forum Group Discussion Calon BP IME FTUI",
    description: "Forum Group Discussion Calon BP diadakan secara offline",
    status: "upcoming",
  },
];

export const requirements = [
  "Mahasiswa aktif Departemen Teknik Elektro FTUI angkatan 2025",
  "Berkomitmen dan bertanggung jawab",
  "Memiliki semangat belajar tinggi",
  "Mampu bekerja dalam tim",
  "Bersedia mengikuti rangkaian seleksi",
];

export const faqs = [
  {
    question: "Apa itu IME FTUI?",
    answer:
      "Ikatan Mahasiswa Elektro Fakultas Teknik Universitas Indonesia (IME FTUI) merupakan organisasi yang bergerak dalam bidang kemahasiswaan yang bertujuan untuk mewadahi dan melayani mahasiswa Departemen Teknik Elektro Fakultas Teknik Universitas Indonesia.",
  },
  {
    question: "Siapa yang bisa mendaftar?",
    answer:
      "Mahasiswa Departemen Teknik Elektro Angkatan 2025",
  },
  {
    question: "Berapa bidang yang bisa dipilih?",
    answer:
      "Kamu dapat memilih maksimal 2 bidang sebagai pilihan pertama dan kedua.",
  },
  {
    question: "Apakah perlu pengalaman organisasi sebelumnya untuk mendaftar?",
    answer:
      "Kamu tidak memerlukan pengalaman organisasi sebelumnya untuk mendaftar. Yang terpenting adalah kamu berkomitmen dan ingin belajar.",
  },
];

export const benefits = [
  {
    icon: Link,
    title: "Networking",
    description: "Koneksi dengan mahasiswa dan alumni",
  },
  {
    icon: Handshake,
    title: "Pengembangan Soft Skill",
    description: "Bekerja sama secara langsung untuk mengembangkan soft skill",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Pengalaman langsung mengelola dan mengeksekusi proyek dari awal hingga selesai",
  },
  {
    icon: Building,
    title: "Berkontribusi di Departemen",
    description:
      "Memberikan dampak positif untuk Departemen Teknik Elektro FTUI",
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
