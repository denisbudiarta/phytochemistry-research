"use client";

import React from "react";

export default function CV() {
  // Data Mata Kuliah dipisahkan di sini agar mudah diupdate
  const mataKuliahAmpuan = [
    "Kimia Organik I",
    "Fitokimia",
    "Sintesis Senyawa Organik",
    "Kimia Heterosiklik",
    "Kimia Kontekstual",
    "Uji bioaktivitas",
    "Kapita Selekta Kimia Organik",
    "Praktikum Kimia Organik Bahan Alam",
    "Praktikum Kimia Organik I",
    "Praktikum Kimia Organik II",
  ];

  const riwayatPendidikan = [
    {
      jenjang: "S3",
      gelar: "Biologi",
      kampus: "Universitas Udayana",
      tahun: "2022",
      isLatest: true,
    },
    {
      jenjang: "S2",
      gelar: "Kimia",
      kampus: "Universitas Gadjah Mada",
      tahun: "1998",
      isLatest: false,
    },
    {
      jenjang: "S1",
      gelar: "Kimia",
      kampus: "Universitas Airlangga",
      tahun: "1990",
      isLatest: false,
    },
  ];

  const penulisanArtikel = [
    {
      volume: "10/2",
      judul: "Pemanfaatan Limbah Serbuk Kayu Merbau (Instia spp) sebagai Pewarna Kain Katun dengan Penambahan Kapur Sirih",
      jurnal: "Jurnal Kimia",
    },
    {
      volume: "10/2",
      judul: "Isolasi, Identifikasi serta Uji Aktivitas Antibakteri pada Minyak Atsiri Sereh Wangi",
      jurnal: "Jurnal Kimia",
    },
    {
      volume: "4/1",
      judul: "Aktifitas Antiinflamasi Topikal Minyak Atsiri dan Ekstrak Eter Tumbuhan Tenggulun, Protium javanicum Burm Terhadap Model Inflamasi Kult pada Tikus",
      jurnal: "Cakra Kimia",
    },
    {
      volume: "6/3",
      judul: "Topical anti-inflammatory activity test and identification of anti-inflammatory active compounds of ether extract of stem bark and leaves resin of tenggulun protium javanicum burm",
      jurnal: "International Journal of Current Advanced Research",
    },
    {
      volume: "6/4",
      judul: "Antioxidant activity and the Identification of the essential and non essential compounds of Piper betle and Piper crocatum Ruiz leaves",
      jurnal: "Research Journal of Chemical and Environmental Sciences",
    },
    {
      volume: "13/2",
      judul: "Suplemen ekstrak daun sirih, Piper betle Linn dalam menurunkan kadar malon dialdehid pada tikus wistar",
      jurnal: "Jurnal Kimia (Journal of Chemistry)",
    },
    {
      volume: "14/2",
      judul: "Pembuatan Virgin Coconut Oil dengan penambahan enzim papain dari ekstrak daun papaya, Carica papaya",
      jurnal: "Jurnal Kimia (Journal of Chemistry)",
    },
    {
      volume: "15/2",
      judul: "Pembuatan virgin coconut oil (VCO) dengan enzim papain dan pengaruh asupan VCO terhadap kolesterol total darah tikus galur wistar jantan",
      jurnal: "Jurnal Kimia (Journal of Chemistry)",
    },
    {
      volume: "53/3",
      judul: "Morphological and molecular characterization of the pathogenic fungi isolated from purple eggplant originating from Bali, Indonesia",
      jurnal: "Sabrao Journal of Breeding and Genetic",
    },
    {
      volume: "13/7",
      judul: "ESTERIFICATION REACTION AND ANTIOXIDANT ACTIVITY OF XANTHONE DERIVATIVE FROM MANGOSTEEN PEEL (Garcinia mangostana L.)",
      jurnal: "INTERNATIONAL JOURNAL OF CURRENT ADVANCED RESEARCH",
    },
  ];

  const presenter = [
    {
      acara: "Seminar International Conference on Basic Science 2020, Univ Patimura Ambon",
      judulArtikel: "Isolation and Identification of Pathogen Fungi Causing Purple Eggplant Wilt Disease ( Solanum melongena L.) in Bali",
      waktuTempat: "4-5 Nopember 2020",
    },
    {
      acara: "Seminar Nasional Sains dan Teknologi (Saintek 2021)",
      judulArtikel: "Pembuatan virgin coconut oil dengan ekstrak jamur Aspergillus niger serta uji antibakteri vco dengan bakteri Staphilococcus aureus",
      waktuTempat: "24-26 Nopember 2021, F MIPA, UniversitasUdayana",
    },
    {
      acara: "Seminar Nasional Senastek IX (2022)",
      judulArtikel: "Reaksi Esterifikasi dan Uji Aktivitas Antioksidan Senyawa Turunan Xanton Hasil Isolasi dari Kulit Buah Manggis (Garcinia mangostana L.)",
      waktuTempat: "29-30 Nopember 2022, The Patra Bali Resort & Villa, Kuta",
    },
    {
      acara: "Seminar International Science and Technology International Conference (STIC 2022)",
      judulArtikel: "Esterification Reaction and Antioxidant Activity test Xanton Derivatives Result of Isolation From Mangosteen Peel ( Garcinia mangostana L)",
      waktuTempat: "16-17 Nopember 2022, F MIPA Universitas Udayana",
    },
    {
      acara: "International Conference of The Indonesia Chemical Society",
      judulArtikel: "Analysis of Secondary Metabolites and Sugar Content in Porang Tubers (Amorphophallus muelleri Blume )",
      waktuTempat: "24 Oktober 2024,Himpunan Kimia Indonesia",
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
                src="/images/suirta.jpeg"
                alt="Prof. Dr. Dra Ida Ayu Raka Astiti Asih, M.Si"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-2">
              <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest">
                Curicullum Vitae
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
               Dr. Drs.I Wayan Suirta, MSi   
              </h1>
              <p className="text-lg text-emerald-600 font-bold tracking-tight">
                Jabatan Fungsional: Lektor Kepala
              </p>
              <p className="text-slate-500 font-medium">
                Instansi: FMIPA Universitas Udayana
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
                    196507191992031002
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    NIDN
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    0019076504
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Tempat, Tanggal Lahir
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    Wongaya Gede dan 19 Juli 1965
                  </p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Jenis Kelamin
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                    Laki-Laki
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Alamat Rumah
                  </label>
                  <p className="font-bold text-slate-700 uppercase">
                   Jalan Nuansa Hijau Utama XXVI/6, Ubung
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
                  <p className="text-sm font-bold">+62 878-6095-2425</p>
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
                       wayansuirta@unud.ac.id
                    </p>
                  </div>
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
                   5984557
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                      Scholar
                    </p>
                    <p className="text-2xl font-black text-slate-700">8</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">
                      H-Index
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                      Scopus
                    </p>
                    <p className="text-2xl font-black text-slate-700">1</p>
                    <p className="text-[8px] font-bold text-slate-400 mt-1 uppercase">
                      H-Index
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
          
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
                  year: 2021,
                  title: "Pembuatan virgin coconut oil dengan ekstrak jamur Aspergillus niger sertauji antibakteri VCO dengan bateri Staphylococcus aureus",
                },
                {
                  year: 2022,
                  title: "Reaksi Esterifikasi dan Uji Aktivitas Antioksidan Senyawa Turunan Xanton Hasil Isolasi dari Kulit Buah Manggis (Garcinia mangostana L.)",
                },
                {
                  year: 2023,
                  title: "Analisis Kadar Glukomanan dan Kalsium oksalat pada Umbi Tanaman Porang (Amorphophallus muelleri Blume)",
                },
                {
                  year: 2024,
                  title: "Analisis Metabolit Primer dan Sekunder serta Aktivitasnya sebagai antioksidan pada Umbi Tanaman Porang (Amorphophallus muelleri Blume)",
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
                    <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {pengalaman.title}
                    </h4>
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
      </div>

    </div>
  );
}
