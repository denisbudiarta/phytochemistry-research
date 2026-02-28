"use client";

import React from "react";

export default function CVAstitiAsih() {
  // Data Mata Kuliah dipisahkan di sini agar mudah diupdate
  const mataKuliahAmpuan = [
    "Organik 1 (S1)",
    "Organik 2 (S1)",
    "Organik 3 (S1)",
    "Reaksi dan Sintesis Senyawa Organik",
    "Fitokimia (S1)",
    "Pestisida Nabati (S1)",
    "Biopestisida (S2)",
    "Bioaktivitas Bahan Alam Hayati (S2)",
    "Uji Bioaktivitas (S1)",
    "Bioenergi (S2)",
  ];

  const riwayatPendidikan = [
    {
      jenjang: "S3",
      gelar: "Biopestisida",
      kampus: "Universitas Udayana",
      tahun: "2010 — 2014",
      isLatest: true,
    },
    {
      jenjang: "S2",
      gelar: "Kimia Organik",
      kampus: "Institut Teknologi Bandung",
      tahun: "1996 — 1998",
      isLatest: false,
    },
    {
      jenjang: "S1",
      gelar: "Kimia Organik",
      kampus: "Universitas Airlangga",
      tahun: "1986-1990",
      isLatest: false,
    },
  ];

  const penulisanArtikel = [
    {
      volume: "Vol. 5, No. 03; 2020",
      judul: "Antibacterial activity and antioxidant capacity of selected Local banana peel (Musa sp.) Methanol extracts cultivated in bali",
      jurnal: "International Journal of Agriculture, Environment and Bioresearch (IJAEB 2020)",
    },
    {
      volume: "Volume 8 Nomor 1, Mei 2020",
      judul: "Aktivitas antijamur ekstrak n-butanol dari daun Trembesi (Albizia saman (Jacq.) Merr) terhadap jamur Candida albicans dan penentuan total flavonoid",
      jurnal: "Cakra Kimia (Indonesian E-Journal of Applied Chemistry)",
    },
    {
      volume: "Volume 8 Nomor 2, Mei 2020",
      judul: "Aktivitas Antibakteri Ekstrak Metanol Kulit Pisang Pecah Seribu (Musa x Paradisiaca L.) terhadap Bakteri Staphylococcus aureus dan Escherichia coli",
      jurnal: "Cakra Kimia (Indonesian E-Journal of Applied Chemistry)",
    },
    {
      volume: "Volume 28 Nomer 3, July 2021",
      judul: "Antibacterial Activity of Flavonoids from Ethyl Acetate Extract of Milk Banana Peel (Musa x paradisiaca L.)",
      jurnal: "Hayati Journal of Biosciences (Scopus Q2)",
    },
    {
      volume: "Volume 15 Nomer 2, Juli 2021",
      judul: "Uji Aktivitas Antibakteri Ekstrak Metanol Kulit Pisang Hijau Lumut (Musa x paradisiaca L.) terhadap Bakteri Staphylococcus aureus dan Escherichia coli Serta Identifikasi Golongan Senyawa Metabolit Sekunder",
      jurnal: "Jurnal Kimia",
    },
    {
      volume: "Volume 15, no. 1, halaman 124-131, 2022",
      judul: "Cervical anticancer activities of Annona squamosa Linn. Leaf isolate",
      jurnal: "Veterinary World (Scopus Q1)",
    },
    {
      volume: "Volume 2022",
      judul: "Antifungal Activity of Phenolic Compounds from Samanea saman Leaves Against Stem Rot Disease on Dragon Fruits Caused by Fusarium Solani",
      jurnal: "PGPR 2021 First Asian PGPR Indonesian Chapter International e-Conference 2021 KnE Life Sciences Knowledge E",
    },
    {
      volume: "Volume 6, Issue 2, 2022: 6-12",
      judul: "Degradation of dying industry wastewater with natural zeolite-TiO2/ZnO photocatalyst",
      jurnal: "International Journal of Chemistry Studies",
    },
    {
      volume: "Vol. 17, No. 2, April, 2022, pp. 319-323",
      judul: "Antioxidant Activity of Flavonoid Glycoside Extract of Solanum betaceum on the Kidney of Wistar Rats",
      jurnal: "International Journal of Design & Nature and Ecodynamics (Scopus Q2)",
    },
    {
      volume: "1177, 012050, 2023",
      judul: "Antibacterial Efficacy of Susu Banana (Musa paradisiaca L.) Peel Methanol Extract and The Total Contents of Flavonoid and Phenolic Compounds",
      jurnal: "IOP Conference Series: Earth and Environmental Science (Scopus)",
    },
    {
      volume: "Vo. 22, No. 04, Juli 2023, 177-182",
      judul: "Sabun Mandi Antioksidan dari Beras Merah dan Virgin Coconut Oil (VCO)",
      jurnal: "Buletin Udayana Mengabdi",
    },
    {
      volume: "Vo. 22, No. 02, Maret 2023, pp. 76-81",
      judul: "Pemanfaatan Kulit Pisang Hijau Lumut (Musa x paradisiaca L.) sebagai Bahan Aktif Masker Peel Off dan Sabun Mandi Antibakteri",
      jurnal: "Buletin Udayana Mengabdi",
    },
    {
      volume: "15(3): 278-287, 2023",
      judul: "Antibacterial Activity and Characterization of Chitosan Nanoparticles Prepared from Hijau Lumut Banana (Musa paradisiaca L.) Peel Ethyl Acetate Extract",
      jurnal: "Nano Biomedicine and Engineering (Scopus Q3)",
    },
    {
      volume: "18 (1): 51-60, 2024",
      judul: "Aktivitas Antibakteri Ekstrak n-Heksana Kulit Pisang Hijau Lumut (Musa × paradisiaca L.) serta Identifikasi Senyawanya",
      jurnal: "Jurnal Kimia (Journal of Chemistry)",
    },
    {
      volume: "16(1): 420-426, 2024",
      judul: "Active compounds of Michelia champaca bark extract against Curvularia verruculosa fungi causing leaf spot disease in rice (Oryza sativa L.)",
      jurnal: "Jounal of Applied and Natural Science (Scopus Q4)",
    },
    {
      volume: "3071, 020003 (2024)",
      judul: "The toxic compounds from citrus parasite (Scurrula ferruginea (Jack) Danser.)",
      jurnal: "AIP Conference Proceeding (Scopus)",
    },
    {
      volume: "Volume 13; Issue 7; July 2024; Page No.3177-3182, 2024",
      judul: "Esterification Reaction and Antioxidant Activity of Xanthone Derivative From Mangosteen Peel (Garcinia mangostana L.)",
      jurnal: "International Journal of Current Advanced Research",
    },
    {
      volume: "Volume: 11 Issue: 4, 23-30, 2024",
      judul: "Antioxidant Activity of Herbal Soap Formulations Extract Gaharu Leaves (Gyrinops Versteegii)",
      jurnal: "European Journal of Biomedical AND Pharmaceutical sciences",
    },
    {
      volume: "Volume:19 Issue:1, 96-104, 2025",
      judul: "Fitoremediasi Tanah Tercemar Tembaga (Cu) Oleh Tanaman Keladi Hias (Caladium Bicolor) Dan Lidah Mertua (Sansevieria Trifasciata)",
      jurnal: "Jurnal Kimia (Journal of Chemistry)",
    },
    {
      volume: "Volume:19 Issue:2, 217-224, 2025",
      judul: "Aktivitas Antibakteri dan Kandungan Senyawa Ekstrak n-Heksana Kulit Pisang Pecah Seribu (Musa × paradisiaca L.)",
      jurnal: "Jurnal Kimia (Journal of Chemistry)",
    },
    {
      volume: "Volume:11 Issue:1, 540-557, 2026",
      judul: "Formulation And Characterization Of Nanoemulsion from Cinnamon Bark Essential Oil (Cinnamomum Burmanii)",
      jurnal: "World Journal of Pharmacy and Pharmaceutical Sciences",
    },
  ];

  const presenter = [
    {
      acara: "International Seminar on Chemistry (ISoC) 2020",
      judulArtikel: "Antibacterial Activity of Flavonoids from Ethyl Acetate Extract of Milk Banana Peel (Musa x paradisiaca L.)",
      waktuTempat: "Surabaya, 31st August 2020",
    },
    {
      acara: "1st Asian PGPR Indonesia Chapter International E-conference",
      judulArtikel: "Antifungal Activity of Phenolic Compounds from Samanea saman (Jacq.) Merr) Leaves against Stem Rot Disease on Dragon Fruits Caused by Fusarium solani",
      waktuTempat: "Bali, 28th August 2021",
    },
    {
      acara: "Seminar Nasional Sains dan Teknologi (SENASTEK)",
      judulArtikel: "Senyawa Antibakteri dalam Ekstrak Etilasetat Kulit Pisang Hijau Lumut (Musa paradisiaca L.)",
      waktuTempat: "Bali, 24-26 November 2021",
    },
    {
      acara: "International Seminar on Chemistry (ISoC) 2022",
      judulArtikel: "The Toxic Compounds from Citrus Parasite (Scurrula ferruginea (Jack) Danser)",
      waktuTempat: "Surabaya, 12-13th October 2022",
    },
    {
      acara: "Science and Technology International Conference (STIC) 2022",
      judulArtikel: "Flavonoid from Chloroform Extract of Samanea saman Jacq. Leaves as an Inhibitor of The Growth of Fusarium solani, The Cause of Dragon Fruit Stem Rot Disease",
      waktuTempat: "Bali, 16-17 November 2022",
    },
    {
      acara: "Senastek IX dan Senasdimas I",
      judulArtikel: "Masker Peel Off dan Sabun Mandi Antibakteri dengan Bahan Aktif Kulit Pisang Hijau Lumut (Musa x paradisiaca L.)",
      waktuTempat: "Bali, 29 November-1 Desember 2022",
    },
    {
      acara: "International Conference on Sustainable Agriculture, Food and Energi (SAFE) 2023",
      judulArtikel: "Flavonoid from Chloroform Extract of Samanea saman Jacq. Leaves as an Inhibitor of The Growth of Fusarium solani, The Cause of Dragon Fruit Stem Rot Disease",
      waktuTempat: "May 28-29, 2023, Chiang Mai, Thailand",
    },
    {
      acara: "International Congress on Pure and Applied Chemistry (ICPAC) 2023",
      judulArtikel: "Antibacterial Compounds from Ethyl Acetate Extract of Hijau Lumut Banana (Musa x paradisiaca L.) Peels",
      waktuTempat: "12-17 September 2023, Bali",
    },
    {
      acara: "Senastek X & Senasdimas II 2023",
      judulArtikel: "Pengembangan Produk Nano-Kitosan Ekstrak Kulit Pisang Hijau Lumut (Musa x paradisiaca L.) sebagai Produk Krim Antijerawat dan Identifikasi Senyawa Aktifnya",
      waktuTempat: "7-9 November 2023, Bali",
    },
    {
      acara: "Senastek X & Senasdimas II 2023",
      judulArtikel: "Pelatihan Pembuatan Sabun Antiseptik Alami dengan Bahan Aktif Ekstrak Kulit Pisang (Musa x Paradisiaca) dan Gel Lidah Buaya (Aloe vera) di Desa Selumbung Kecamatan Manggis, Kabupaten Karangasem Bali",
      waktuTempat: "7-9 November 2023, Bali",
    },
    {
      acara: "The Science and Technology International Conference (STIC) 2023",
      judulArtikel: "Preparation and Characterization of Nano-Chitosan from Hijau Lumut Banana (Musa x paradisiaca L.) Peel Ethanol Extract and Their Antibacterial Activity Against Propionibacterium acnes",
      waktuTempat: "21-22 November 2023, Bali",
    },
    {
      acara: "International Conference on Recent Advances in Bio-Nano Composites for Enhancing Human Health",
      judulArtikel: "Anticancer Bioactive Molecules from Indonesian Medicinal plants",
      waktuTempat: "8-9 January 2024, Gulbarga University, Kalaburagi, Karnataka, India",
    },
    {
      acara: "International Conference of The Indonesian Chemical Society (Icics) 2024",
      judulArtikel: "Anticancer Compounds from Some Indonesian Medicinal plants",
      waktuTempat: "24 Oktober 2024, Bali",
    },
    {
      acara: "SENASTEK XI 2024",
      judulArtikel: "Aktivitas Antikanker Rimpang Jeringau (Acorus calamus L.) terhadap Sel Hela, Sel Penyebab Kanker Serviks",
      waktuTempat: "29-30 Oktober 2024, Bali",
    },
    {
      acara: "The 6th International on Chemistry (ISC)",
      judulArtikel: "Antibacterial Compounds from Ethyl Acetate Extract of Hijau Lumut Banana (Musa x Paradisiaca L.) Peels",
      waktuTempat: "8-9 May 2025, Bali",
    },
    {
      acara: "SENASTEK XII 2025",
      judulArtikel: "Sabun Padat Antiacne dengan Bahan Aktif Kombinasi Rumput Laut (Eucheuma Cottonii) dan Kulit Pisang Hijau Lumut (Musa X paradisiaca L.)",
      waktuTempat: "26-27 November 2025",
    },
    {
      acara: "SENASTEK XII 2025",
      judulArtikel: "Aktivitas Antikanker Payudara Kandungan Senyawa dalam Ekstrak Etilasetat Kulit Pisang Pecah (Musa x paradisiaca), Studi In Vitro dan In Silico",
      waktuTempat: "26-27 November 2025",
    },
    {
      acara: "The 4th Science and Technology International Conference (STIC) 2025",
      judulArtikel: "Toxicity Assay and Identification of Active Compounds in Pecah Banana Peel Extract (Musa x paradisiaca L.)",
      waktuTempat: "27-28 Oktober 2025",
    },
  ];

  const hki = [
    {
      tahun: "2018",
      judul: "Ekstrak buah Momordica charantia sebagai penurun kadar glukosa",
      jenis: "Paten",
      noIDP: "IDP: 000053073",
    },
    {
      tahun: "2023",
      judul: "Ekstrak metanol daun srikaya (Annona squamosa linn) sebagai bahan antikanker",
      jenis: "Paten Sederhana",
      noIDP: "1DS000006515",
    },
    {
      tahun: "2023",
      judul: "Cara Pembuatan Sabun Antiseptik dengan Bahan Aktif Kulit Pisang dan Gel Lidah Buaya",
      jenis: "HKI, Karya Rekaman Video",
      noIDP: "000550859",
    },
  ];

  const buku = [
     {
    tahun: "2022",
    judul: "Analisis Metabolit Primer dan Sekunder",
    jenis: "Buku Ajar",
    halaman: "138 halaman",
  },
  {
    tahun: "2024",
    judul: "Pengendali Hayati Agen Pengendali Hayati untuk Beberapa Patogen",
    jenis: "Buku Referensi",
    halaman: "76 halaman",
  },
  {
    tahun: "2024",
    judul: "Kimia Bahan Alam",
    jenis: "Buku Referensi",
    halaman: "159 halaman",
  },
  {
    tahun: "2025",
    judul: "Nanopartikel Daun Sembung (Blumea balsamifera L.) Sebagai Anti Diabetes Mellitus",
    jenis: "Buku Referensi",
    halaman: "87 halaman",
  },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 font-sans antialiased text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          <button
            onClick={() => window.history.back()}
            className="absolute top-6 left-8 flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors font-bold text-xs uppercase tracking-widest group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back
          </button>
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-40 bg-slate-100 rounded-2xl flex-shrink-0 border-4 border-white shadow-md flex items-center justify-center text-slate-300">
              <img
                src="/images/wiwik-s.jpeg"
                alt="Prof. Dr. Dra Ida Ayu Raka Astiti Asih, M.Si"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-2">
              <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest">
                Curicullum Vitae
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Prof. Dr. Dra.Wiwik Susanah Rita, M.Si.
              </h1>
              <p className="text-lg text-emerald-600 font-bold tracking-tight">
                Jabatan Fungsional: Guru Besar
              </p>
              <p className="text-slate-500 font-medium">
                Instansi: P.S. Kimia FMIPA Universitas Udayana
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>{" "}
                Detail Kepegawaian & Pribadi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    NIP
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    196903231992032001
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    NIDN
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    0023036908
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Tempat, Tanggal Lahir
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    Gresik, 23 Maret 1969
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Jenis Kelamin
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    Perempuan
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Alamat Rumah
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    Jl. Patih Nambi IA Perum Graha Sepa Nambi I/27 Denpasar
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
                <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </span>
                  Riwayat Pendidikan
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                  {riwayatPendidikan.map((edu, index) => (
                    <div key={index} className="relative pl-12 group">
                      {/* Badge Bulat S1/S2/S3 */}
                      <div
                        className={`absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 shadow-sm z-10 flex items-center justify-center font-black text-[10px] 
                        ${
                          edu.isLatest
                            ? "border-emerald-600 text-emerald-600"
                            : "border-slate-200 text-slate-400"
                        }`}
                      >
                        {edu.jenjang}
                      </div>

                      {/* Konten Pendidikan */}
                      <div
                        className={`p-5 rounded-2xl transition-colors ${
                          edu.isLatest
                            ? "bg-slate-50 group-hover:bg-emerald-50"
                            : "bg-white border border-slate-100 group-hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-black uppercase tracking-widest ${
                            edu.isLatest ? "text-emerald-600" : "text-slate-400"
                          }`}
                        >
                          {edu.tahun}
                        </span>
                        <h3 className="font-bold text-slate-800 text-lg leading-tight mt-1">
                          {edu.gelar}
                        </h3>
                        <p className="text-sm text-slate-600 font-medium">
                          {edu.kampus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION MATA KULIAH - SEKARANG MENGGUNAKAN MAP */}
              <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">
                  Mata Kuliah Ampuan
                </h2>
                <ul className="space-y-3">
                  {mataKuliahAmpuan.map((mk, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-sm font-bold text-slate-700 leading-tight group-hover:text-emerald-600 transition-colors">
                        {mk}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="space-y-6">
            <section className="bg-emerald-600 rounded-[2.5rem] p-8 shadow-lg shadow-emerald-100 text-white">
              <h2 className="text-xs font-black opacity-60 uppercase tracking-widest mb-6">
                Hubungi Saya
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold">+62 813-3875-7770</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold truncate">
                      wiwiksr@yahoo.com;
                    </p>
                    <p className="text-sm font-bold truncate">
                      susanah.rita@unud.ac.id
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">
                Lulusan yang Dihasilkan
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-black text-xs">
                      S3
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      Doktor
                    </span>
                  </div>
                  <span className="text-lg font-black text-emerald-700">
                    2{" "}
                    <span className="text-[10px] font-bold opacity-60">
                      Orang
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-700 text-white rounded-lg flex items-center justify-center font-black text-xs">
                      S2
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      Magister
                    </span>
                  </div>
                  <span className="text-lg font-black text-slate-700">
                    10{" "}
                    <span className="text-[10px] font-bold opacity-60">
                      Orang
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-400 text-white rounded-lg flex items-center justify-center font-black text-xs">
                      S1
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      Sarjana
                    </span>
                  </div>
                  <span className="text-lg font-black text-slate-700">
                    48{" "}
                    <span className="text-[10px] font-bold opacity-60">
                      Orang
                    </span>
                  </span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 text-center">
                Indeks Akademik
              </h2>
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                    SINTA ID
                  </p>
                  <div className="bg-slate-50 py-3 rounded-2xl border border-slate-100 inline-block px-8 text-xl font-black text-emerald-600 tracking-wider">
                    5982477
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                      Sinta
                    </p>
                    <p className="text-1xl font-black text-slate-700">1.145</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">
                      Score Overall
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                      Scholar
                    </p>
                    <p className="text-2xl font-black text-slate-700">15</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">
                      H-Index
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                      Scopus
                    </p>
                    <p className="text-2xl font-black text-slate-700">6</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">
                      H-Index
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                      Wos
                    </p>
                    <p className="text-2xl font-black text-slate-700">2</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">
                      H-Index
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="grid space-y-6">
          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m16 6-4 4-4-4" />
                  <path d="M12 22v-8" />
                  <path d="m8 18 4-4 4 4" />
                </svg>
              </span>
              Pengalaman Penulisan Artikel (5 Tahun Terakhir)
            </h2>

            <div className="grid gap-4">
              {penulisanArtikel.map((riset, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 flex justify-between items-start gap-4 hover:border-emerald-200 hover:bg-white transition-all duration-300 group"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-emerald-700 transition-colors">
                      {riset.judul}
                    </h4>
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-tight">
                      {riset.jurnal}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-500 shadow-sm whitespace-nowrap">
                    {riset.volume}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
              </span>
              Pengalaman Penelitian Terpilih (5 Tahun Terakhir)
            </h2>
            <div className="space-y-4">
              {[
                {
                  year: 2020,
                  title: "Aktivitas antikanker serviks ekstrak dan isolat daun Srikaya (Annnona squamasa Linn) serta identifikasi senyawa aktifnya",
                  source: "Sumber : Penelitian Invensi Udayana",
                  amount: "Jumlah : 125 Juta",
                },
                {
                  year: 2021,
                  title: "Aktivitas Antibakteri Nanopartikel-Ekstrak Kulit Pisang Hijau Lumut (Musa x paradisiaca L.) terhadap Staphylococcus aureus dan Escherichia coli",
                  source: "Sumber : Penelitian Unggulan Udayana",
                  amount: "Jumlah : 37 Juta",
                },
                {
                  year: 2021,
                  title: "Aktivitas antioksidan ekstrak glikosida Flavonoid terong belanda (solanum betaceum Cav) pada ginjal tikus wistar dengan aktivitas fisik maksimal (Tahun ke-2)",
                  source: "Sumber : Penelitian Unggulan Udayana",
                  amount: "Jumlah : 50 Juta",
                },
                {
                  year: 2021,
                  title: "Aktivitas antikanker serviks ekstrak dan isolat daun Srikaya (Annnona squamasa Linn) serta identifikasi senyawa aktifnya (tahun ke-2)",
                  source: "Sumber : Penelitian Invensi Udayana",
                  amount: "Jumlah : 131,3 Juta",
                },
                {
                  year: 2022,
                  title: "Senyawa Aktif dan Aktivitas Fungisida Ekstrak Kulit Kayu Cempaka Kuning (Michelia champaca) Terhadap Jamur Curvularia verruculosa Penyebab Penyakit Bercak Daun Pada Tanaman Padi (Oryza sativa L.)",
                  source: "Sumber : PUPS",
                  amount: "Jumlah : 25 Juta",
                },
                {
                  year: 2023,
                  title: "Pengembangan Produk Nano-Kitosan Ekstrak Kulit Pisang Hijau Lumut (Musa x paradisiaca L.) sebagai Produk Krim Antijerawat dan Identifikasi Senyawa Aktifnya",
                  source: "Sumber : Penelitian Invensi Udayana",
                  amount: "Jumlah : 99,25 Juta",
                },
                {
                  year: 2024,
                  title: "Aktivitas Antikanker Rimpang Jeringau (Acorus calamus L.) terhadap Sel Hela, Sel Penyebab Kanker Serviks",
                  source: "Sumber : Penelitian Unggulan Udayana",
                  amount: "Jumlah : 58,5 Juta",
                },
                {
                  year: 2025,
                  title: "Aktivitas Antikanker Payudara Kandungan Senyawa dalam Ekstrak Etilasetat Kulit Pisang Pecah (Musa x paradisiaca), Studi In vitro dan In silico",
                  source: "Sumber : Senior Academic Research",
                  amount: "Jumlah : 44,67 Juta",
                },
                {
                  year: 2025,
                  title: "Formulasi dan Aplikasi Produk Biokontrol Streptomyces Berbasis Nanopartikel Kitosan sebagai Agen Protektan Patogen Busuk pada Kentang (Solanum tuberosum)",
                  source: "Sumber : Senior Academic Research",
                  amount: "Jumlah : 44,33 Juta",
                },
                {
                  year: 2025,
                  title: "Sabun Padat Antiacne dengan Bahan Aktif Kombinasi Rumput laut (Eucheuma cottonii) dan kulit pisang hijau lumut (Musa x paradisiaca L.)",
                  source: "Sumber : PAKPRI",
                  amount: "Jumlah : 49,67 Juta",
                },
              ].map((pengalaman, index) => (
                <div
                  key={index}
                  className="group flex gap-5 p-4 rounded-2xl hover:bg-emerald-50 transition-colors"
                >
                  <div className="font-black text-2xl text-slate-800 group-hover:text-emerald-800 transition-colors italic">
                    {pengalaman.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {pengalaman.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium italic italic">
                      {pengalaman.source}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-medium italic italic">
                      {pengalaman.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m16 6-4 4-4-4" />
                  <path d="M12 22v-8" />
                  <path d="m8 18 4-4 4 4" />
                </svg>
              </span>
              Pengalaman sebagai Presenter pada Pertemuan Ilmiah (5 Tahun
              Terakhir)
            </h2>

            <div className="grid gap-4">
              {presenter.map((presenter, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 flex justify-between items-start gap-4 hover:border-emerald-200 hover:bg-white transition-all duration-300 group"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 leading-snug uppercase group-hover:text-emerald-700 transition-colors">
                      {presenter.judulArtikel}
                    </h4>
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-tight">
                      {presenter.acara}
                    </p>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {presenter.waktuTempat}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m16 6-4 4-4-4" />
                  <path d="M12 22v-8" />
                  <path d="m8 18 4-4 4 4" />
                </svg>
              </span>
              Pengalaman Perolehan HKI Dalam 5 Tahun Terakhir
            </h2>

            <div className="grid gap-4">
              {hki.map((hki, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 flex justify-between items-start gap-4 hover:border-emerald-200 hover:bg-white transition-all duration-300 group"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 leading-snug uppercase group-hover:text-emerald-700 transition-colors">
                      {hki.judul}
                    </h4>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {hki.tahun}
                    </p>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {hki.jenis}
                    </p>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {hki.noIDP}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m16 6-4 4-4-4" />
                  <path d="M12 22v-8" />
                  <path d="m8 18 4-4 4 4" />
                </svg>
              </span>
              Pengalaman MEMBUAT BUKU 5 Tahun Terakhir
            </h2>

            <div className="grid gap-4">
              {buku.map((buku, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 flex justify-between items-start gap-4 hover:border-emerald-200 hover:bg-white transition-all duration-300 group"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 leading-snug uppercase group-hover:text-emerald-700 transition-colors">
                      {buku.judul}
                    </h4>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {buku.tahun}
                    </p>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {buku.jenis}
                    </p>
                    <p className="text-xs text-slate-800 font-bold uppercase tracking-tight">
                      {buku.halaman} Halaman
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
