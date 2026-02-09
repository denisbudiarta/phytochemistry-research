"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ResearchLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Phytochemistry & Bioactivity of Biological Materials
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Eksplorasi senyawa alami dari material biologis melalui pendekatan
            fitokimia modern dan analisis bioaktivitas untuk membuka potensi
            terapeutik serta aplikasi berkelanjutan.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" className="rounded-2xl">
              Unduh Paper
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl">
              Jelajahi Riset
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-200 to-teal-100 h-80 rounded-3xl shadow-inner flex items-center justify-center"
        >
          <p className="text-slate-500">Ilustrasi ilmiah / gambar riset</p>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Pendahuluan</h2>
            <p className="text-slate-600 leading-relaxed">
              Penelitian ini berfokus pada identifikasi, karakterisasi, dan
              pemanfaatan senyawa bioaktif yang berasal dari material biologis.
              Dengan dukungan inovasi teknologi analitik, riset ini bertujuan
              menjembatani ilmu kimia alami dengan aplikasi biologis untuk
              menghasilkan solusi yang berdampak pada kesehatan dan
              keberlanjutan.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                🔬 Teknologi analisis fitokimia modern
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                🌱 Pemanfaatan sumber daya biologis berkelanjutan
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                🧪 Integrasi uji bioaktivitas dan profil senyawa
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SUBFIELDS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Subbidang Penelitian
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Natural Product Chemistry",
              desc: "Isolasi dan karakterisasi senyawa alami dari berbagai material biologis.",
            },
            {
              title: "Metabolomics",
              desc: "Analisis profil metabolit untuk memahami komposisi kimia secara komprehensif.",
            },
            {
              title: "Bioactivity Screening",
              desc: "Evaluasi aktivitas biologis untuk mengidentifikasi potensi terapeutik.",
            },
            {
              title: "Functional Materials",
              desc: "Pengembangan material fungsional berbasis senyawa alami.",
            },
            {
              title: "Drug Discovery Support",
              desc: "Kontribusi terhadap tahap awal pengembangan kandidat obat.",
            },
            {
              title: "Sustainable Resources",
              desc: "Pendekatan ilmiah untuk pemanfaatan sumber daya alam secara bertanggung jawab.",
            },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="bg-emerald-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Visi & Misi</h2>

          <Card className="rounded-2xl mb-6">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-2">Visi</h3>
              <p className="text-slate-600">
                Menjadi pusat penelitian yang berkontribusi pada kemajuan ilmu
                fitokimia dan bioaktivitas untuk mendukung kesehatan global dan
                keberlanjutan.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Mengembangkan metode analisis inovatif",
              "Mengintegrasikan kimia dan evaluasi biologis",
              "Mendorong pemanfaatan material alami secara berkelanjutan",
            ].map((m, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">{m}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Objective & Target
        </h2>

        <div className="space-y-6">
          {[
            "Mengidentifikasi dan mengkarakterisasi senyawa bioaktif",
            "Mengevaluasi aktivitas biologis menggunakan model terstandarisasi",
            "Mengembangkan potensi aplikasi terapeutik dan fungsional",
          ].map((obj, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6 flex gap-4">
                <span className="font-bold text-xl">{i + 1}.</span>
                <p className="text-slate-600">{obj}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Roadmap Penelitian
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Seleksi material biologis",
              "Ekstraksi & profiling fitokimia",
              "Uji bioaktivitas",
              "Validasi & integrasi data",
              "Publikasi & aplikasi",
            ].map((phase, i) => (
              <Card key={i} className="rounded-2xl text-center">
                <CardContent className="p-6">
                  <p className="font-semibold">Fase {i + 1}</p>
                  <p className="text-slate-600 mt-2">{phase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OUTPUT */}
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Luaran yang Diharapkan</h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Publikasi ilmiah bereputasi</li>
              <li>• Database senyawa bioaktif</li>
              <li>• Dataset bioaktivitas</li>
              <li>• Potensi paten atau prototipe</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Dampak Penelitian</h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Kontribusi pada kemajuan sains</li>
              <li>• Dukungan bagi sektor kesehatan & bioteknologi</li>
              <li>• Pemanfaatan sumber daya alam berkelanjutan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-emerald-600 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Tertarik Berkolaborasi?
          </h2>
          <p className="mb-6 opacity-90">
            Saya terbuka untuk kolaborasi riset, diskusi akademik, maupun
            peluang kemitraan.
          </p>
          <Button size="lg" variant="secondary" className="rounded-2xl">
            Hubungi Saya
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-500">
        © 2026 Personal Research Page · Phytochemistry & Bioactivity
      </footer>
    </div>
  );
}
