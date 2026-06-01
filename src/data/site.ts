export const site = {
  name: "Radiansyah Akmal Sofyan",
  role: "Mahasiswa Teknik Informatika",
  tagline:
    "Mahasiswa Universitas Pamulang yang fokus membangun aplikasi web praktis — dari sistem reservasi hingga tools kampus.",
  location: "Tangerang Selatan, Indonesia",
  status: "Terbuka untuk magang & kolaborasi proyek",
  email: "kmllsfyn@gmail.com",
  github: "https://github.com/Radian08",
  /** Nomor WhatsApp: kode negara + nomor, tanpa + atau spasi (contoh: 6281234567890) */
  whatsapp: "62895322029103",
  resumeUrl: "#",
};

export const highlights = [
  { label: "Kampus", value: "Unpam" },
  { label: "Repo GitHub", value: "6+" },
  { label: "Stack aktif", value: "PHP / Web" },
  { label: "Minat", value: "Backend" },
];

export const skills = [
  { name: "PHP", level: "Menengah" },
  { name: "HTML, CSS, JS", level: "Menengah" },
  { name: "MySQL", level: "Menengah" },
  { name: "Git & GitHub", level: "Menengah" },
  { name: "C++", level: "Dasar–Menengah" },
  { name: "Laravel / MVC", level: "Dasar" },
  { name: "REST API", level: "Dasar–Menengah" },
  { name: "Linux & Deploy", level: "Dasar" },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  href?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Reservasi Pendakian",
    category: "Web App — PHP",
    summary:
      "Aplikasi web untuk mengelola reservasi jadwal pendakian dengan alur booking yang terstruktur.",
    problem:
      "Penjadwalan pendakian manual rentan bentrok slot dan sulit dilacak.",
    approach:
      "Backend PHP dengan validasi jadwal, manajemen data peserta, dan antarmuka admin sederhana.",
    outcome:
      "Alur reservasi terpusat di satu sistem sehingga data jadwal lebih mudah diaudit.",
    stack: ["PHP", "MySQL", "HTML/CSS"],
    github: "https://github.com/Radian08/reservasi-pendakian",
  },
  {
    title: "Sistem Payroll PHP",
    category: "Backend — PHP",
    summary:
      "Aplikasi penggajian karyawan untuk menghitung dan mencatat komponen gaji.",
    problem:
      "Perhitungan gaji manual rawan salah hitung dan lambat saat data pegawai bertambah.",
    approach:
      "Modul CRUD pegawai, komponen gaji, dan laporan dengan struktur kode terpisah per fitur.",
    outcome:
      "Proses hitung gaji dapat diulang konsisten dari data master yang sama.",
    stack: ["PHP", "MySQL"],
    github: "https://github.com/Radian08/payroll-php",
  },
  {
    title: "Todo List App",
    category: "Web — PHP",
    summary:
      "Aplikasi daftar tugas untuk latihan CRUD dan manajemen state sederhana di web.",
    problem:
      "Butuh fondasi kuat operasi Create, Read, Update, Delete sebelum proyek lebih besar.",
    approach:
      "Form input, penyimpanan database, filter status selesai/belum, dan UI ringan.",
    outcome:
      "Dasar full CRUD yang dipakai ulang di proyek PHP lainnya.",
    stack: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/Radian08/todolist",
  },
];

export const education = {
  school: "Universitas Pamulang",
  program: "Teknik Informatika",
  period: "Mahasiswa aktif",
  gpa: "—",
  courses: [
    "Struktur Data & Algoritma",
    "Basis Data",
    "Pemrograman Web",
    "Jaringan Komputer",
  ],
};

export const experiences = [
  {
    title: "Pengembangan proyek pribadi & kuliah",
    org: "GitHub — @Radian08",
    period: "2025 — sekarang",
    description:
      "Aktif mengembangkan aplikasi PHP (reservasi, payroll, todo list) dan mengumpulkan tugas C++ di repo Tugas-Kuliah.",
  },
  {
    title: "Belajar mandiri web development",
    org: "Universitas Pamulang",
    period: "Berjalan",
    description:
      "Mencoba memperdalam dunia IT dan praktik version control untuk portofolio dan tugas akademik.",
  },
];
