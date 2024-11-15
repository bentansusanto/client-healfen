import { Content } from "@/types/landingtype";

export const homeHero:Content = {
    heading: "Experience the next level of financial control.",
    body: "CRM software helps companies streamline processes, improve customer satisfaction, and increase sales by organizing customer data, tracking customer interactions, and automating certain tasks.",
    bg_section: "bg-homepage-herosection.png"
}

export const ourProblem:Content = {
    heading: "Alasan Kenapa Harus Menggunakan Healfen Untuk Efektivitas Bisnis Anda",
    subheading: "Problem Market",
    body: "Masalah yang sering terjadi didalam bisnis kecil sampai menengah",
    problem: [
        {
            title: "Keuangan",
            desc: "Kesulitan melacak pemasukan dan pengeluaran? Sistem kami menyediakan pencatatan otomatis dan laporan keuangan yang akurat.",
        },
        {
            title: "Stok Barang",
            desc: "Kehabisan stok atau kelebihan barang di gudang? Aplikasi kami membantu memantau dan mengelola inventaris secara real-time.",
        },
        {
            title: "Data Pelanggan",
            desc: "Bingung melacak riwayat pelanggan dan kebutuhan mereka? Simpan dan kelola data pelanggan dengan rapi dan aman.",
        },
        {
            title: "Kesulitan Memantau Performa Bisnis Secara Realtime",
            desc: "Banyak pemilik bisnis merasa sulit memantau kinerja bisnis saat ini karena data yang tidak selalu terbarui.",
        },
    ]
}

export const whyChooseUs:Content = {
    heading: "Mengapa Harus Memilih Healfen ?",
    subheading: "Why Choose Us",
    body: "4  alasan mengapa Healfen adalah pilihan tepat untuk bisnis Anda.",
    benefit: [
        {
            title: "Manajemen Keuangan yang Mudah",
            desc: "Catat pemasukan, pengeluaran, dan laporan secara otomatis dengan fitur pengelolaan keuangan kami yang terintegrasi.",
            icon: "keuangan"
        },
        {
            title: "Pengaturan Stok yang Efisien",
            desc: "Lacak stok barang secara langsung untuk menghindari kekurangan atau kelebihan persediaan.",
            icon: "stocks"
        },
        {
            title: "Penyimpanan Data Pelanggan Aman",
            desc: "Simpan dan kelola informasi pelanggan untuk memahami kebutuhan dan meningkatkan pelayanan.",
            icon: "pelanggan"
        },
        {
            title: "Laporan Analitik yang Mudah Dipahami",
            desc: "Dapatkan laporan analitik yang ringkas dan mudah dipahami untuk memantau performa bisnis. Dengan insight yang jelas, Anda dapat mengambil keputusan lebih efektif untuk pertumbuhan bisnis.",
            icon: "analytics"
        },
    ],
    bg_section: "bg-why-choose-us.png"
}

export const faqData:Content = {
    heading: "Pertanyaan yang Sering Diajukan",
    subheading: "FAQ",
    faq: [
        {
            question: "Apakah aplikasi ini cocok untuk bisnis kecil hingga menengah?",
            answer: "Ya, aplikasi kami dirancang untuk mendukung kebutuhan bisnis dari skala kecil hingga menengah.",
        },
        {
            question: "Bagaimana cara kerja fitur manajemen stok?",
            answer: "Kami menyediakan sistem pemantauan stok otomatis, sehingga Anda dapat melihat jumlah stok secara real-time dan menerima notifikasi ketika persediaan rendah.",
        },
        {
            question: "Apakah data keuangan saya aman?",
            answer: "Kami menggunakan enkripsi berlapis untuk memastikan semua data keuangan Anda aman dan hanya dapat diakses oleh Anda.",
        },
    ],
    bg_section: "bg-faq-section.svg"
}

export const packageData:Content = {
    heading: "Paket Layanan Healfen App",
    subheading: "Package Services",
    package: [
        {
            title: "Basic",
            subs_detail: "month",
            price: 500000,
            benefit: ["Free trial 10 days for access dashboard admin", "Team support 24/7", "Maintenance every month"],
            recomended: false
        },
        {
            title: "Business",
            subs_detail: "year",
            price: 1500000,
            benefit: ["Free trial 10 days for access dashboard admin", "Team support 24/7", "Maintenance every month"],
            recomended: true
        },
        {
            title: "Enterprice",
            subs_detail: "2 years",
            price: 3000000,
            benefit: ["Free trial 10 days for access dashboard admin", "Team support 24/7", "Maintenance every month"],
            recomended: false
        },
    ]
}

export const ctaData:Content = {
    heading: "Nikmati kemudahan manajemen bisnis hanya dalam satu aplikasi.",
    body: "Daftarkan bisnis Anda dan rasakan manfaat dari sistem manajemen keuangan, stok, dan pelanggan yang efisien. Claim uji coba aplikasi kami secara gratis!",
    bg_section: "bg-cta-section.png",
}

