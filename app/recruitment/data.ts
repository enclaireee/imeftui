import { Link, Handshake, ClipboardList, Building } from "lucide-react";

// Toggle this to control registration status
// true = buttons redirect to form, false = buttons show "Coming Soon" toast
export const REGISTRATION_OPEN = false;

export const RECRUITMENT_DEADLINE = new Date("2026-01-25T23:59:59");
export const REGISTRATION_FORM_URL = "https://forms.gle/h8QMy68MRfBip7Qq5";

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
  fullDescription: string;
  programs: string[];
  addedValues: string[];
  logoDark: string;
  logoLight: string;
  tugasUrl?: string;
}

export const divisi: Divisi[] = [
  {
    id: 1,
    name: "Akademis dan Profesi",
    abbr: "AKPRO",
    fullDescription:
      "Akademis dan Profesi IME FTUI atau Akademis dan Keprofesian merupakan bidang yang bertanggungjawab dalam mengadvokasi, mewadahi, serta memfasilitasi warga DTE dalam aspek akademis dan pascakampus.",
    programs: ["Diktat", "Company Visit"],
    addedValues: ["Academic Skill", "Professional Networking"],
    logoDark: "/akproDark.webp",
    logoLight: "/akproLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1TrGwnfBgHg0ShxodbGTqSGMv4MowoNWr",
  },
  {
    id: 2,
    name: "Kajian dan Aksi Strategis",
    abbr: "Kastrat",
    fullDescription:
      "Kajian dan Aksi Strategis merupakan bidang di IME FTUI yang bertanggung jawab atas fungsi pengkajian, penanaman, dan pencerdasan serta peningkatan iklim diskusi warga DTE terhadap isu POLEKSOSBUDHANKAMLING dan keelektroan.",
    programs: ["Distro", "Sociotalk"],
    addedValues: ["Copywriting", "Issue Analysis"],
    logoDark: "/kastratDark.webp",
    logoLight: "/kastratLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1-T4b-zOoXCqHg2LvkzNPwo75zI-NckXx",
  },
  {
    id: 3,
    name: "Kemahasiswaan",
    abbr: "KEMA",
    fullDescription:
      "Kemahasiswaan merupakan bidang yang bertanggung jawab dalam mengawal pembinaan baik intra maupun pasca kampus yang dilaksanakan oleh Departemen Teknik Elektro.",
    programs: ["PONSEL", "Sharing Session"],
    addedValues: ["People Management", "Critical Thinking"],
    logoDark: "/kemaDark.webp",
    logoLight: "/kemaLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1v3rUSy6eD2spY-SDRZC-PkpuWz1eOscr",
  },
  {
    id: 4,
    name: "Kesejahteraan Mahasiswa",
    abbr: "KESMA",
    fullDescription:
      "Kesejahteraan Mahasiswa IME FTUI adalah bidang yang berfungsi untuk mengadvokasi kesehatan mental, kebutuhan fasilitas, dan finansial mahasiswa Departemen Teknik Elektro.",
    programs: ["KENTAL", "Electrical Engineering Foundation"],
    addedValues: ["Mental health Awareness", "Advocating Student Needs"],
    logoDark: "/kesmaDark.webp",
    logoLight: "/kesmaLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1JetjJpymaCJCdp89OyVEBJLH9dC_9QJb",
  },
  {
    id: 5,
    name: "Kesekretariatan",
    abbr: "KESTARI",
    fullDescription:
      "Bidang kesekretariatan IME FTUI bertanggung jawab untuk mengawasi alur administrasi internal dan eksternal lembaga IME FTUI.",
    programs: ["Internal Games", "Birthday Blast"],
    addedValues: ["Copywriting", "Administrasi"],
    logoDark: "/kestariDark.webp",
    logoLight: "/kestariLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1t4QP1xB-IQCQYMeM0p4f1eMK4Ik_CQ35",
  },
  {
    id: 6,
    name: "Komunikasi dan Informasi",
    abbr: "KOMINFO",
    fullDescription:
      "Bidang Komunikasi dan Informasi IME FTUI 2026 bertanggung jawab mengelola informasi internal dan eksternal, menjaga citra IME FTUI, serta menjalin hubungan baik dengan seluruh stakeholder.",
    programs: ["PSB IME FTUI", "Website"],
    addedValues: ["Graphic Design", "Relasi dengan Alumni"],
    logoDark: "/kominDark.webp",
    logoLight: "/kominLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1Hi-f8E0clGLqabfwh13CAgBfCJiJidi0",
  },
  {
    id: 7,
    name: "Penelitian dan Pengembangan",
    abbr: "LITBANG",
    fullDescription:
      "Penelitian dan Pengembangan merupakan bidang yang berfungsi sebagai evaluator, analisator, dan konsultan bagi seluruh bidang di IME FTUI. ",
    programs: ["BLUEPRINT", "Human Resource Evaluation"],
    addedValues: ["Consulting", "Structured Problem Solving"],
    logoDark: "/litbangDark.webp",
    logoLight: "/litbangLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1yCgFc-QgIr_yoJVuIqfVu8Ew6sCvwohT",
  },
  {
    id: 8,
    name: "Pengabdian Masyarakat",
    abbr: "PENGMAS",
    fullDescription:
      "Pengabdian Masyarakat adalah bidang IME FTUI yang bertanggung jawab untuk mewadahi dan menumbuhkan sikap kepedulian mahasiswa DTE terhadap masyarakat dan lingkungan hidup, serta menyalurkan core competence DTE kepada masyarakat.",
    programs: ["Elektro Charity", "GRBM"],
    addedValues: ["Environmental Awareness", "Communication"],
    logoDark: "/pengmasDark.webp",
    logoLight: "/pengmasLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1-FcIe95CIsJ-IrTsA3IL5xICvJlEyv5T",
  },
  {
    id: 9,
    name: "Pengembangan Ilmu Pengetahuan dan Teknologi",
    abbr: "PIPTEK",
    fullDescription:
      "Bidang yang berfungsi sebagai fasilitator, katalisator, dan kolaborator dalam pengembangan minat dan bakat di bidang keilmiahan, serta sebagai Apresiator untuk menghargai pencapain warga DTE dalam bidang ilmiah",
    programs: ["Electrocomp", "Nest UI"],
    addedValues: ["Project management", "Communication"],
    logoDark: "/piptekDark.webp",
    logoLight: "/piptekLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/12KIjqRytVVJhTRp72ymRcvjjoW2op8Cw",
  },
  {
    id: 10,
    name: "Rohani Elektro",
    abbr: "RETRO",
    fullDescription:
      "Rohani Elektro adalah bidang yang berfungsi untuk menyalakan iklim keagamaan di Departemen Teknik Elektro. Serta sebagai perpanjangan tangan FUSI FTUI di lingkup departemen ",
    programs: ["KIAS", "RASIK"],
    addedValues: ["leadership", "Critical Thinking"],
    logoDark: "/retroDark.webp",
    logoLight: "/retroLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1EDDlWILzghECa9gf7zQ5DtFySjH7b3Qp",
  },
  {
    id: 11,
    name: "Kreasi Mahasiswa",
    abbr: "SIWA",
    fullDescription:
      "Bidang Kreasi Mahasiswa menjaring, mewadahi, dan mengapresiasi minat dan bakat warga Departemen Teknik Elektro dalam bidang seni, dan Olahraga. Serta mencriptakan suasana bersenang-senang di DTE.",
    programs: ["Gladiator", "Electrical Engineering Cup"],
    addedValues: ["Project Management", "Talent Management"],
    logoDark: "/siwaDark.webp",
    logoLight: "/siwaLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1IjTTU3DzlxY7E5MxZX0sTjr3qZwX3WoW",
  },
  {
    id: 12,
    name: "Keuangan dan Kewirausahaan",
    abbr: "KEWIRUS",
    fullDescription:
      "Keuangan dan Kewirausahaan bertanggung jawab atas keuangan dan kewirausahaan IME FTUI. KEWIRUS bertanggung jawab atas seluruh pemasukan dan pengeluaran IME FTUI, serta pencarian pemasukan keuangan untuk dana lembaga IME FTUI. KEWIRUS juga bertanggungjawab untuk mengembangkan skill dan semangat kewirausahaan kepada mahasiswa di DTE.",
    programs: ["Audit Keuangan", "ELEMENT"],
    addedValues: ["Financial Management", "Entrepreneurship"],
    logoDark: "/wirusDark.webp",
    logoLight: "/wirusLight.webp",
    tugasUrl: "https://drive.google.com/drive/folders/1HN_q-dkDWc502y7yWB78_CqZw3odkvcM",
  },
];

export const timeline = [
  {
    date: "16 Januari 2026",
    event: "Open House",
    description:
      "Presentasi dan tanya-tanya setiap bidang IME FTUI melalui zoom meeting",
    status: "upcoming",
  },
  {
    date: "18 Januari 2026",
    event: "Open Recruitment",
    description: "Pendaftaran BP IME FTUI 2026 resmi dibuka",
    status: "active",
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
    answer: "Mahasiswa Departemen Teknik Elektro Angkatan 2025",
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
  { id: 1, title: "Elektrifikasi 2025", image: "/Elektrifikasi 2025.webp" },
  { id: 2, title: "PSB Genap 2025", image: "/PSB Genap 2025.webp" },
  { id: 3, title: "PersDept", image: "/PersDept.webp" },
  { id: 4, title: "Ponsel 2025", image: "/Ponsel 2025.webp" },
  { id: 5, title: "Rasik 2025", image: "/Rasik 2025.webp" },
  { id: 6, title: "ShaReg 2025", image: "/ShaReg 2025.webp" },
  { id: 7, title: "Sociotalk 2025", image: "/Sociotalk 2025.webp" },
  { id: 8, title: "Teknik Cup 2025", image: "/Teknik Cup 2025.webp" },
];
