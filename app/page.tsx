"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ResearchLandingPage() {
  const introRef = useRef<HTMLElement | null>(null);
  const subfieldsRef = useRef<HTMLElement | null>(null);
  const visionRef = useRef<HTMLElement | null>(null);
  const objectivesRef = useRef<HTMLElement | null>(null);
  const roadmapRef = useRef<HTMLElement | null>(null);
  const outputRef = useRef<HTMLElement | null>(null);
  const teamsRef = useRef<HTMLElement | null>(null);


  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Pendahuluan');

  const sectionRefs = [
    { ref: introRef, name: 'Pendahuluan' },
    { ref: subfieldsRef, name: 'Subbidang' },
    { ref: visionRef, name: 'Visi & Misi' },
    { ref: objectivesRef, name: 'Objective' },
    { ref: roadmapRef, name: 'Roadmap' },
    { ref: outputRef, name: 'Luaran' },
    { ref: teamsRef, name: 'Our Team' },
  ];

  const handleScroll = (
    ref: React.RefObject<HTMLElement | null>,
    section: string
  ) => {
    const current = ref.current;
    if (!current) return;
  
    current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const refCurrent = sectionRefs[i].ref.current;
        if (refCurrent && scrollPos >= refCurrent.offsetTop) {
          setActiveSection(sectionRefs[i].name);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [sectionRefs]);  

  return (
    <div className="min-h-screen text-slate-800">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
          <div className="hidden md:flex gap-6">
            {sectionRefs.map((sec) => (
              <button
                key={sec.name}
                onClick={() => handleScroll(sec.ref, sec.name)}
                className={`hover:text-emerald-600 ${activeSection === sec.name ? 'text-emerald-600 font-semibold' : ''}`}
              >
                {sec.name}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <span className="block w-6 h-0.5 bg-slate-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-slate-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-slate-800"></span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-inner">
            <div className="flex flex-col px-6 py-4 gap-4">
              {sectionRefs.map((sec) => (
                <button
                  key={sec.name}
                  onClick={() => handleScroll(sec.ref, sec.name)}
                  className={`hover:text-emerald-600 text-left ${activeSection === sec.name ? 'text-emerald-600 font-semibold' : ''}`}
                >
                  {sec.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fitokimia dan Bioaktivitas Bahan Hayati
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Eksplorasi senyawa alami dari material biologis melalui pendekatan
            fitokimia modern dan analisis bioaktivitas untuk membuka potensi
            terapeutik serta aplikasi berkelanjutan.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" className="rounded-2xl bg-emerald-600">Unduh Paper</Button>
            <Button size="lg" variant="outline" className="rounded-2xl">Jelajahi Riset</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-200 to-teal-100 h-80 rounded-2xl shadow-inner flex items-center justify-center"
        >
            <img
              src="/images/hero.jpg"
              alt="Ilustrasi Riset"
              className="w-full h-full object-cover rounded-2xl"
            />
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section ref={introRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Pendahuluan</h2>
            <p className="text-slate-600 leading-relaxed">
              Penelitian ini berfokus pada identifikasi, karakterisasi, dan pemanfaatan senyawa bioaktif yang berasal dari material biologis. Dengan dukungan inovasi teknologi analitik, riset ini bertujuan menjembatani ilmu kimia alami dengan aplikasi biologis untuk menghasilkan solusi yang berdampak pada kesehatan dan keberlanjutan.
            </p>
          </div>
          <div className="grid gap-4">
            <Card className="rounded-2xl"><CardContent className="p-6">🔬 Teknologi analisis fitokimia modern</CardContent></Card>
            <Card className="rounded-2xl"><CardContent className="p-6">🌱 Pemanfaatan sumber daya biologis berkelanjutan</CardContent></Card>
            <Card className="rounded-2xl"><CardContent className="p-6">🧪 Integrasi uji bioaktivitas dan profil senyawa</CardContent></Card>
          </div>
        </div>
      </section>

      {/* SUBFIELDS */}
      <section ref={subfieldsRef} className="bg-emerald-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Subbidang Penelitian</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Fitokimia & Bioaktivitas Kesehatan", desc: "Ekstraksi dan isolasi metabolit sekunder dengan aktivitas antimikroba, antikanker, antioksidan, antiinflamasi, dan antidiabetes." },
            { title: "Aplikasi Pertanian & Pangan", desc: "Senyawa bioaktif sebagai pestisida nabati dan penambah cita rasa alami." },
            { title: "Nanoteknologi Fitokimia", desc: "Peningkatan stabilitas dan efektivitas senyawa bioaktif melalui pendekatan nano." },
            { title: "Identifikasi & Karakterisasi Senyawa", desc: "Penentuan struktur dan karakterisasi senyawa aktif." },
            { title: "Studi Mekanisme Keaktifan", desc: "Pendekatan in vitro, in vivo, dan in silico untuk memahami mekanisme kerja metabolit." },
            { title: "Pengembangan Produk Aplikatif", desc: "Formulasi produk obat, skincare, dan pestisida nabati berbasis fitokimia." }
          ].map((item,i) => (
            <Card key={i} className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section ref={visionRef} className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Visi & Misi</h2>
          <Card className="rounded-2xl mb-6">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-2">Visi</h3>
              <p className="text-slate-600">meningkatkan riset unggulan, baik tingkat nasional maupun internasional dalam mengungkap potensi bahan hayati lokal melalui pendekatan fitokimia dan bioaktivitas untuk kemandirian obat bahan alam</p>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Menyelenggarakan penelitian komprehensif mengenai isolasi, karakterisasi, dan standardisasi senyawa metabolit sekunder dari bahan alam.",
              "Mengembangkan metode uji bioaktivitas (antioksidan, antikanker, antimikroba) secara in vitro dan in vivo yang valid dan terstandar, serta mengembangkan studi in-silico.",
              "Membangun kolaborasi dengan industri farmasi dan kosmetik untuk hilirisasi produk berbasis bahan hayati.",
              "Meningkatkan kompetensi peneliti dalam teknik analisis kimia bahan alam mutakhir. "
            ].map((m,i)=>(
              <Card key={i} className="rounded-2xl"><CardContent className="p-6">{m}</CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVE & TARGET - Updated Design */}
      <section ref={objectivesRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tujuan & Sasaran Penelitian</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tujuan */}
            <div className="bg-white rounded-3xl shadow hover:shadow-lg transition p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">🎯 Tujuan</h3>
              <ul className=" space-y-3 text-slate-600">
                <li>Mengetahui, memisahkan, dan mengidentifikasi jenis-jenis senyawa metabolit sekunder dalam suatu bahan hayati.</li>
                <li>Menentukan struktur molekul senyawa aktif yang terisolasi.</li>
                <li>Menguji aktivitas biologis atau bioaktivitas dari ekstrak atau senyawa murni.</li>
                <li>Menemukan bahan baku obat baru (lead compounds) yang aman dan efektif.</li>
                <li>Memastikan kualitas dan keamanan produk herbal atau obat bahan alam.</li>
              </ul>
            </div>

            {/* Sasaran */}
            <div className="bg-white rounded-3xl shadow hover:shadow-lg transition p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">🎯 Sasaran</h3>
              <ul className="list-disc space-y-3 text-slate-600">
                <li>Melakukan uji kualitatif pendahuluan untuk mendeteksi golongan senyawa kimia dalam sampel tumbuhan atau hewan.</li>
                <li>Mengukur efektivitas senyawa terhadap target biologis, misalnya uji antioksidan, uji toksisitas, uji antikanker, atau uji antimikroba.</li>
                <li>Fokus pada senyawa yang tidak berperan langsung dalam pertumbuhan dasar, melainkan untuk pertahanan diri organisme.</li>
                <li>Menentukan pelarut dan metode ekstraksi yang tepat untuk menghasilkan senyawa aktif secara maksimal.</li>
                <li>Sasaran akhirnya adalah pengembangan produk fungsional untuk kesehatan manusia, seperti nutrasetika, kosmetik, atau obat-obatan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section ref={roadmapRef} className="bg-emerald-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Roadmap Penelitian</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                year: "2024",
                title: "Plant Science Research Activities",
                desc: "Eksplorasi awal tanaman potensial, identifikasi spesies unggulan, serta pengumpulan material biologis untuk analisis lebih lanjut.",
                icon: "🌿"
              },
              {
                year: "2028",
                title: "Processing Research Activities",
                desc: "Pengembangan metode ekstraksi, pemurnian senyawa, serta optimalisasi proses fitokimia berbasis teknologi modern.",
                icon: "🧪"
              },
              {
                year: "2032",
                title: "Utilization Research Activities",
                desc: "Evaluasi bioaktivitas dan pengembangan aplikasi fungsional untuk kesehatan, farmasi, dan bioteknologi.",
                icon: "💊"
              },
              {
                year: "2036",
                title: "Market Research Activities",
                desc: "Analisis potensi komersialisasi, kesiapan industri, serta strategi hilirisasi inovasi berbasis riset.",
                icon: "📊"
              }
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow hover:shadow-xl transition duration-300 border-0">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-emerald-600 font-semibold mb-1">{item.year}</p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
        {/* <section className="bg-white py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Roadmap Penelitian
            </h2>

            <div className="relative border-l-2 border-emerald-200">
              {[
                {
                  year: "2024",
                  title: "Plant Science Research Activities",
                  desc: "Eksplorasi tanaman potensial dan identifikasi material biologis unggulan."
                },
                {
                  year: "2028",
                  title: "Processing Research Activities",
                  desc: "Optimalisasi ekstraksi dan karakterisasi senyawa bioaktif."
                },
                {
                  year: "2032",
                  title: "Utilization Research Activities",
                  desc: "Pengembangan aplikasi terapeutik dan material fungsional."
                },
                {
                  year: "2036",
                  title: "Market Research Activities",
                  desc: "Strategi hilirisasi, kesiapan industri, dan komersialisasi inovasi."
                }
              ].map((item, i) => (
                <div key={i} className="mb-12 ml-6 relative"> */}
                  
                  {/* DOT */}
                  {/* <span className="absolute -left-9 flex items-center justify-center w-8 h-8 bg-emerald-600 rounded-full text-white">
                    ✓
                  </span>

                  <p className="text-emerald-600 font-semibold">
                    {item.year}
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

      {/* INNOVATION PIPELINE / LUARAN */}
      {/* <section className="bg-emerald-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Target Luaran & Dampak Inovasi
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
           
            <div className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">R & D</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Publikasi nasional terakreditasi</li>
                <li>• Publikasi internasional</li>
                <li>• Publikasi internasional bereputasi</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">Technology</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Publikasi nasional terakreditasi</li>
                <li>• Publikasi internasional & bereputasi</li>
                <li>• PATEN sederhana</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-3">Product</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• HKI</li>
                <li>• PATEN</li>
                <li>• Produk siap pakai</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Market</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• PATEN</li>
                <li>• Produk siap dipasarkan</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* OUTPUT - Innovation Pipeline / Luaran Selection Data */}
      <section ref={outputRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Target Luaran & Dampak Inovasi</h2>

          {/* Desktop Horizontal Pipeline */}
          <div className="hidden md:flex justify-between items-start relative">
            {[
              { year: '2024', title: 'R & D', desc: 'Publikasi nasional terakreditasi, publikasi internasional, dan internasional bereputasi', icon: '🔬' },
              { year: '2024', title: 'Technology', desc: 'Publikasi nasional terakreditasi, publikasi internasional, internasional bereputasi, dan PATEN sederhana', icon: '⚙️' },
              { year: '2024', title: 'Product', desc: 'HKI, PATEN, Produk', icon: '💊' },
              { year: '2024', title: 'Market', desc: 'PATEN, Produk yang siap dipasarkan', icon: '📊' }
            ].map((step,i) => (
              <div key={i} className="flex-1 text-center relative">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-emerald-600 text-white flex items-center justify-center rounded-full mx-auto text-4xl mb-4">
                  {step.icon}
                </div>

                <p className="text-emerald-600 font-semibold mb-1">{step.year}</p>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>

                {/* Connector Line */}
                {/* {i < 3 && <div className="absolute top-8 right-0 w-full h-0.5 bg-emerald-300 transform translate-x-full"></div>} */}
              </div>
            ))}
          </div>

          {/* Mobile Vertical Pipeline */}
          <div className="md:hidden relative border-l-2 border-emerald-200 pl-6">
            {[
              { year: '2024', title: 'R & D', desc: 'Publikasi nasional terakreditasi, publikasi internasional, dan internasional bereputasi', icon: '🔬' },
              { year: '2024', title: 'Technology', desc: 'Publikasi nasional terakreditasi, publikasi internasional, internasional bereputasi, dan PATEN sederhana', icon: '⚙️' },
              { year: '2024', title: 'Product', desc: 'HKI, PATEN, Produk', icon: '💊' },
              { year: '2024', title: 'Market', desc: 'PATEN, Produk yang siap dipasarkan', icon: '📊' }
            ].map((step,i) => (
              <div key={i} className="mb-12 relative">
                {/* Dot */}
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white text-2xl">
                  {step.icon}
                </span>

                <p className="text-emerald-600 font-semibold">{step.year}</p>
                <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
                <p className="text-slate-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM SECTION - LinkedIn Removed */}
      <section ref={teamsRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tim Peneliti</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                img: '/images/person1.jpg',
                name: 'Prof. Dr. Dra. Wiwik Susanah Rita, M.Si.',
                position: 'Ketua',
                rank: 'Guru besar/ Pembina Utama Madya'
              },
              {
                img: '/images/person2.jpg',
                name: 'Prof. Dr. Dra. I A Raka Astiti Asih, M.Si.',
                position: 'Anggota 1',
                rank: 'Guru besar/ Pembina Tk.1'
              },
              {
                img: '/images/person3.jpg',
                name: 'Dr. Drs. I Wayan Suirta, M.Si.',
                position: 'Anggota 2',
                rank: 'Lektor Kepala/ Pembina Tk.1'
              },
              {
                img: '/images/person4.jpg',
                name: 'Drs. I Wayan Suarsa, M.Si.',
                position: 'Anggota 3',
                rank: 'Lektor/Penata'
              }
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center">
                <img src={person.img} alt={person.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-slate-600 mb-1">{person.position}</p>
                <p className="text-emerald-600 font-medium mb-3">{person.rank}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-emerald-600 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Tertarik Berkolaborasi?</h2>
          <p className="mb-6 opacity-90">Saya terbuka untuk kolaborasi riset, diskusi akademik, maupun peluang kemitraan.</p>
          <Button size="lg" variant="secondary" className="rounded-2xl">Hubungi Saya</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-500">© 2026 Personal Research Page · Phytochemistry & Bioactivity</footer>
    </div>
  );
}