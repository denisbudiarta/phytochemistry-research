import React from 'react';

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
    "Bioenergi (S2)"
    
  ];

  const riwayatPendidikan = [
    {
      jenjang: "S3",
      gelar: "Biopestisida",
      kampus: "Universitas Udayana",
      tahun: "2010 — 2014",
      isLatest: true 
    },
    {
      jenjang: "S2",
      gelar: "Kimia Organik",
      kampus: "ITB",
      tahun: "1996 — 1998",
      isLatest: false
    },
    {
      jenjang: "S1",
      gelar: "Kimia Organik",
      kampus: "Universitas Airlangga",
      tahun: "1986-1990",
      isLatest: false
    }
  ];

  const penulisanArtikel = [
    {
      volume: "Vol. 5, No. 03; 2020",
      judul: "Antibacterial activity and antioxidant capacity of selected Local banana peel (Musa sp.) Methanol extracts cultivated in bali",
      jurnal: "International Journal of Agriculture, Environment and Bioresearch (IJAEB 2020) ",
    },
    {
      volume: "Volume Artikel",
      judul: "Judul Artikel",
      jurnal: "Nama Jurnal",
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 font-sans antialiased text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 p-8 md:p-12 relative overflow-hidden">
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
                  Jl. Patih Nambi IA Perum Graha Sepa Nambi I/27  Denpasar
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
                <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
                  <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </span>
                  Riwayat Pendidikan
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                  {riwayatPendidikan.map((edu, index) => (
                    <div key={index} className="relative pl-12 group">
                      {/* Badge Bulat S1/S2/S3 */}
                      <div className={`absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 shadow-sm z-10 flex items-center justify-center font-black text-[10px] 
                        ${edu.isLatest ? 'border-emerald-600 text-emerald-600' : 'border-slate-200 text-slate-400'}`}>
                        {edu.jenjang}
                      </div>
                      
                      {/* Konten Pendidikan */}
                      <div className={`p-5 rounded-2xl transition-colors ${edu.isLatest ? 'bg-slate-50 group-hover:bg-emerald-50' : 'bg-white border border-slate-100 group-hover:bg-slate-50'}`}>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${edu.isLatest ? 'text-emerald-600' : 'text-slate-400'}`}>
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
                  <div className='space-y-2'>
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
                    5982631
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
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
                    <p className="text-2xl font-black text-slate-700">4</p>
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
                  year: 2023,
                  title: "Judul",
                  source: "Sumber Pendanaan",
                  amount: "Nominal Pendanaan",
                },
                {
                  year: 2022,
                  title: "Judul",
                  source: "Sumber Pendanaan",
                  amount: "Nominal Pendanaan",
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
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <a href="/" className="text-emerald-600 hover:underline">
          ← Back to Our Team
        </a>
      </div>
    </div>
  );
}