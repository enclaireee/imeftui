export interface BidangCard {
  title: string;
  description: string;
  image: string;
  slug: string;
  externalUrl?: string;
}

export interface BidangLink {
  label: string;
  url: string;
}

export interface BidangDetail {
  title: string;
  subtitle: string;
  logo: string;
  sectionTitle: string;
  links: BidangLink[];
}

export const bidangList: BidangCard[] = [
  {
    title: "Penelitian Dan Pengembangan",
    description: "Informasi Terkait QC dan FPT",
    image: "/fotoLitbang.png",
    slug: "litbang",
  },
  {
    title: "Kesejahteraan Mahasiswa",
    description: "Informasi terkait advokasi kesejahteraan",
    image: "/fotoKesma.png",
    slug: "kesma",
  },
  {
    title: "Pengembangan Ilmu Pengetahuan Dan Teknologi",
    description: "Informasi Seputar Lomba Keilmiahan",
    image: "/fotoPiptek.png",
    slug: "piptek",
  },
  {
    title: "Keuangan Dan Kewirausahaan",
    description: "Informasi keuangan lembaga",
    image: "/fotoWirus.png",
    slug: "wirus",
  },
  {
    title: "Akademis Dan Keprofesian",
    description: "Website Official Akademis dan Keprofesian",
    image: "/Image2.webp",
    slug: "akpro",
    externalUrl: "https://akproime.com/",
  },
];

export const bidangDetails: Record<string, BidangDetail> = {
  litbang: {
    title: "LITBANG IME FTUI 2026",
    subtitle: "Penelitian Dan Pengembangan IME FTUI 2026",
    logo: "/logoLitbang.webp",
    sectionTitle: "SOP Kesekretarian 2026",
    links: [
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
    ],
  },
  kesma: {
    title: "KESMA IME FTUI 2026",
    subtitle: "Kesejahteraan Mahasiswa IME FTUI 2026",
    logo: "/logoKesma.webp",
    sectionTitle: "SOP Kesekretarian 2026",
    links: [
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
    ],
  },
  piptek: {
    title: "PIPTEK IME FTUI 2026",
    subtitle: "Pengembangan Ilmu Pengetahuan Dan Teknologi IME FTUI 2026",
    logo: "/logoPiptek.webp",
    sectionTitle: "SOP Kesekretarian 2026",
    links: [
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
    ],
  },
  wirus: {
    title: "WIRUS IME FTUI 2026",
    subtitle: "Keuangan Dan Kewirausahaan IME FTUI 2026",
    logo: "/logoWirus.webp",
    sectionTitle: "SOP Kesekretarian 2026",
    links: [
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
    ],
  },
  akpro: {
    title: "AKPRO IME FTUI 2026",
    subtitle: "Akademis Dan Keprofesian IME FTUI 2026",
    logo: "/logoAkpro.webp",
    sectionTitle: "SOP Kesekretarian 2026",
    links: [
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
      { label: "Zoom Meeting", url: "https://zoom.us" },
    ],
  },
};
