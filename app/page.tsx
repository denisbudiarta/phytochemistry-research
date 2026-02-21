"use client";

import React from 'react';
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import UI Components (Shadcn)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import Icons (Lucide React) - Semua ikon yang Anda gunakan dikumpulkan di sini
import { 
  FileText, 
  Mail, 
  CheckCircle2, 
  Target, 
  Microscope, 
  Settings,   
  Package,    
  ShoppingCart,
  Quote, 
  Lightbulb, 
  Rocket,
  Beaker, 
  Leaf,
} from 'lucide-react';

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
    { ref: subfieldsRef, name: 'Sub Bidang' },
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

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 80, // Offset untuk navbar
        behavior: "smooth",
      });
    }
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
                className={`hover:text-emerald-600 ${
                  activeSection === sec.name
                    ? "text-emerald-600 font-semibold"
                    : ""
                }`}
              >
                {sec.name}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
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
                  className={`hover:text-emerald-600 text-left ${
                    activeSection === sec.name
                      ? "text-emerald-600 font-semibold"
                      : ""
                  }`}
                >
                  {sec.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            className="w-full h-full object-cover"
            alt="Background Riset"
          />
          {/* Overlay Gelap/Gradasi agar teks terbaca */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/100"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute bottom-0 -right-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto space-y-8">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 bg-emerald-50 px-6 py-2 text-sm font-semibold uppercase tracking-wider rounded-full shadow-sm"
                  >
                    Kelompok Bidang Kajian
                  </Badge>
                </motion.div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                    Fitokimia dan Bioaktivitas <br />
                    <span className="text-emerald-600 italic">
                      Bahan Hayati
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-500 font-medium italic">
                    "Phytochemistry and Bioactivity of Biological Materials"
                  </p>
                </motion.div>

                {/* Features/Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-8 pt-4"
                >
                  <div className="flex items-center gap-2 text-slate-600 font-semibold">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      <Leaf size={20} />
                    </div>
                    <span>Natural Resources</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-semibold">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      <Beaker size={20} />
                    </div>
                    <span>Phytochemical Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-semibold">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      <Microscope size={20} />
                    </div>
                    <span>Bioactivity Testing</span>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                >
                  <Button
                    onClick={() => scrollToSection(introRef)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95"
                  >
                    Jelajahi Riset
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* INTRO SECTION - Scientific Landscape */}
      <section ref={introRef} className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section (Konsisten dengan Tujuan & Sasaran) */}
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-1"
            >
              Fundamental & Inovasi
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Lanskap Riset Fitokimia
            </h2>
            <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 1. Definisi & Peran (Card Utama) */}
            <Card className="lg:col-span-8 border-none shadow-sm bg-slate-50/50 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-600 rounded-lg text-white">
                    <Lightbulb size={20} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    Metabolit Sekunder & Bioaktivitas
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-justify">
                  <span className="font-bold text-slate-900">Fitokimia</span>{" "}
                  merupakan zat kimia tanaman dengan struktur bervariasi yang
                  berfungsi untuk perlindungan dan reproduksi, termasuk
                  fitoaleksin, fungsi hormonal, hingga alelokimia untuk
                  pertahanan herbivora. Sering disebut sebagai{" "}
                  <span className="italic font-bold text-emerald-700">
                    metabolit sekunder
                  </span>
                  , zat non-nutrisi ini memberikan efek preventif terhadap
                  penyakit kronis.
                </p>
                <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase mb-3 flex items-center gap-2">
                      <Target size={16} className="text-emerald-600" /> Spektrum
                      Penyakit
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Antikanker",
                        "Antimikroba",
                        "Antiinflamasi",
                        "Antioksidan",
                        "Antidiabetes",
                      ].map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase mb-3 flex items-center gap-2">
                      <Quote size={16} className="text-emerald-600" /> Grup
                      Senyawa
                    </h4>
                    <p className="text-xs italic text-slate-500">
                      Fenolik, flavonoid, antosianin, terpena, terpenoid,
                      alkaloid, dan lainnya berpotensi tinggi untuk eksplorasi
                      kesehatan & lingkungan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Inovasi Teknologi (Card Samping) */}
            <Card className="lg:col-span-4 border-none shadow-sm bg-slate-900 text-white overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500 rounded-lg text-slate-900">
                    <Rocket size={20} />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Inovasi Teknologi
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Ekstraksi Modern
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Pemanfaatan ultrasonik & microwave untuk efisiensi solven
                      dan waktu ekstraksi.
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Nanoteknologi
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Penerapan nanoenkapsulasi biopolimer untuk melindungi
                      komponen bioaktif dari degradasi.
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Iradiasi
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Teknik dekontaminasi mikroba untuk menjaga keamanan tanpa
                      merusak kadar zat aktif.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Metodologi Analisis (Bottom Grid) */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  type: "In Vitro",
                  desc: "Teknik dalam lingkungan terkendali luar organisme (biologi seluler). Fokus pada mekanisme spesifik.",
                  icon: <Microscope size={18} />,
                },
                {
                  type: "In Vivo",
                  desc: "Eksperimen menggunakan organisme hidup utuh (studi hewan/uji klinis) untuk observasi efek sistemik.",
                  icon: <CheckCircle2 size={18} />,
                },
                {
                  type: "In Silico",
                  desc: "Simulasi komputer untuk memprediksi interaksi senyawa dengan patogen secara efisien.",
                  icon: <Settings size={18} />,
                },
              ].map((method) => (
                <Card
                  key={method.type}
                  className="border-none shadow-sm bg-white hover:bg-emerald-50/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-emerald-600">
                      {method.icon}
                      <h5 className="font-bold text-slate-800 italic">
                        {method.type}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {method.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBFIELDS */}
      <section ref={subfieldsRef} className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Tetap Simpel */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center rounded-full border border-emerald-500 bg-white px-4 py-1 text-sm font-medium text-emerald-600">
              Fokus Riset
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Sub Bidang Penelitian
            </h2>
          </div>

          {/* List Layout Tanpa Card */}
          <div className="divide-y divide-slate-200">
            {[
              {
                title: "Fitokimia & Bioaktivitas Kesehatan",
                desc: "Ekstraksi dan isolasi metabolit sekunder dengan aktivitas antimikroba, antikanker, antioksidan, antiinflamasi, dan antidiabetes.",
                hoverColor: "group-hover:text-emerald-500",
                numColor: "group-hover:text-emerald-100",
              },
              {
                title: "Aplikasi Pertanian & Pangan",
                desc: "Senyawa bioaktif sebagai pestisida nabati dan penambah cita rasa alami.",
                hoverColor: "group-hover:text-blue-500",
                numColor: "group-hover:text-blue-100",
              },
              {
                title: "Nanoteknologi Fitokimia",
                desc: "Peningkatan stabilitas dan efektivitas senyawa bioaktif melalui pendekatan nano.",
                hoverColor: "group-hover:text-purple-500",
                numColor: "group-hover:text-purple-100",
              },
              {
                title: "Identifikasi & Karakterisasi Senyawa",
                desc: "Penentuan struktur dan karakterisasi senyawa aktif.",
                hoverColor: "group-hover:text-amber-500",
                numColor: "group-hover:text-amber-100",
              },
              {
                title: "Studi Mekanisme Keaktifan",
                desc: "Pendekatan in vitro, in vivo, dan in silico untuk memahami mekanisme kerja metabolit.",
                hoverColor: "group-hover:text-rose-500",
                numColor: "group-hover:text-rose-100",
              },
              {
                title: "Pengembangan Produk Aplikatif",
                desc: "Formulasi produk obat, skincare, dan pestisida nabati berbasis fitokimia.",
                hoverColor: "group-hover:text-cyan-500",
                numColor: "group-hover:text-cyan-100",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-6 py-8 transition-all hover:pl-4"
              >
                {/* Nomor Besar di Samping */}
                <span
                  className={`text-4xl font-black text-slate-200 transition-colors ${item.numColor}`}
                >
                  0{i + 1}
                </span>

                <div className="space-y-1">
                  <h3
                    className={`text-xl font-bold transition-colors ${item.hoverColor}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section
        ref={visionRef}
        className="bg-white py-24 px-6 relative overflow-hidden"
      >
        {/* Dekorasi Latar Belakang Dot Pattern */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-3">
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4"
            >
              Core Values
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Visi & Misi
            </h2>
          </div>

          {/* Section Visi */}
          <div className="mb-16 text-center">
            <Card className="border-none bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl rounded-[2rem] overflow-hidden">
              <CardContent className="p-10 md:p-14 relative">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-white/10" />
                <div className="inline-flex p-3 bg-white/20 rounded-2xl mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-emerald-100">
                  Visi
                </h3>
                <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                  "meningkatkan riset unggulan, baik tingkat nasional maupun
                  internasional dalam mengungkap potensi bahan hayati lokal
                  melalui pendekatan fitokimia dan bioaktivitas untuk
                  kemandirian obat bahan alam"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Section Misi */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200"></div>
              <div className="flex items-center gap-2 px-4">
                <Rocket className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-xl uppercase tracking-wider text-slate-700">
                  Misi
                </h3>
              </div>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Menyelenggarakan penelitian komprehensif mengenai isolasi, karakterisasi, dan standardisasi senyawa metabolit sekunder dari bahan alam.",
                "Mengembangkan metode uji bioaktivitas (antioksidan, antikanker, antimikroba) secara in vitro dan in vivo yang valid dan terstandar, serta mengembangkan studi in-silico.",
                "Membangun kolaborasi dengan industri farmasi dan kosmetik untuk hilirisasi produk berbasis bahan hayati.",
                "Meningkatkan kompetensi peneliti dalam teknik analisis kimia bahan alam mutakhir.",
              ].map((m, i) => (
                <Card
                  key={i}
                  className="group border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-6 flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-emerald-600 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <p className="text-slate-600 leading-relaxed text-[15px] pt-1">
                      {m}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE & TARGET - Updated Design */}
      <section ref={objectivesRef} className="bg-slate-50/50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-1"
            >
              Riset & Pengembangan
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Tujuan & Sasaran Penelitian
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kolom Tujuan */}
            <Card className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all">
              <CardHeader className="bg-emerald-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Tujuan</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-5">
                  {[
                    "Mengetahui, memisahkan, dan mengidentifikasi jenis-jenis senyawa metabolit sekunder.",
                    "Menentukan struktur molekul senyawa aktif yang terisolasi.",
                    "Menguji aktivitas biologis atau bioaktivitas dari ekstrak atau senyawa murni.",
                    "Menemukan bahan baku obat baru (lead compounds) yang aman dan efektif.",
                    "Memastikan kualitas dan keamanan produk herbal atau obat bahan alam.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start group">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Kolom Sasaran */}
            <Card className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all">
              <CardHeader className="bg-slate-800 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Sasaran</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-5">
                  {[
                    "Melakukan uji kualitatif pendahuluan golongan senyawa kimia.",
                    "Mengukur efektivitas terhadap target biologis (antioksidan, toksisitas, dll).",
                    "Fokus pada senyawa pertahanan diri organisme.",
                    "Optimasi pelarut dan metode ekstraksi senyawa aktif.",
                    "Pengembangan produk fungsional (nutrasetika, kosmetik, obat).",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start group">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      {/* ROADMAP PENELITIAN - Green Palette Design */}
      <section ref={roadmapRef} className="bg-slate-50 py-24 px-6 font-sans">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-1"
            >
              Timeline Penelitian
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Roadmap Penelitian & Pengembangan
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-dashed border-emerald-200 ml-6 space-y-10">
            {[
              {
                year: "2024 - 2028",
                category: "R & D",
                title: "Plant Science Research Activities",
                color: "bg-emerald-700",
                items: [
                  "Eksplorasi tanaman dengan bioaktif tertentu",
                  "Uji bioaktivitas",
                  "Isolasi dan identifikasi senyawa aktif dari bagian aktif tanaman",
                ],
              },
              {
                year: "2028 - 2032",
                category: "Technology",
                title: "Processing Research Activities",
                color: "bg-green-600",
                items: [
                  "Penerapan teknologi dalam peningkatan keaktifan bahan",
                  "Penentuan struktur senyawa Tunggal hasil isolasi",
                ],
              },
              {
                year: "2032 - 2036",
                category: "Product",
                title: "Utilization Research Activities",
                color: "bg-lime-600",
                items: [
                  "Pembuatan obat herbal terstandarisasi",
                  "Pembuatan aroma terapi, kosmetik (krim kecantikan, sabun, sampo, dll)",
                  "Pembuatan pestisida nabati",
                ],
              },
              {
                year: "2036 - 2040",
                category: "Market",
                title: "Market Research Activities",
                color: "bg-teal-800",
                items: ["Pemasaran produk bahan"],
              },
            ].map((step, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${step.color} outline outline-4 outline-white`}
                ></div>

                <Card className="border-none shadow-sm overflow-hidden bg-white transition-all hover:shadow-md">
                  {/* Card Header with Color Palette */}
                  <div
                    className={`${step.color} p-4 text-white flex justify-between items-center`}
                  >
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-none text-[10px] uppercase font-bold"
                      >
                        {step.category}
                      </Badge>
                      <h3 className="font-bold text-sm md:text-base tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <span className="opacity-80 text-[10px] font-mono font-bold whitespace-nowrap ml-2">
                      {step.year}
                    </span>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {step.items.map((point, idx) => (
                        <li key={idx} className="flex gap-3 items-start group">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${step.color} group-hover:scale-125 transition-transform`}
                          />
                          <span className="text-slate-600 text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTPUT - Innovation Pipeline / Luaran Selection Data */}
      <section ref={outputRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-1"
            >
              Rencana Strategis 2024 - 2040
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Roadmap & Luaran Penelitian
            </h2>
            <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid gap-8">
            {[
              {
                phase: "R & D",
                year: "2024 - 2028",
                title: "Plant Science Research Activities",
                icon: <Microscope className="w-6 h-6" />,
                bgColor: "bg-emerald-700",
                activities: [
                  "Eksplorasi tanaman dengan bioaktif tertentu",
                  "Uji bioaktivitas",
                  "Isolasi dan identifikasi senyawa aktif dari bagian aktif tanaman",
                ],
                outputs:
                  "Publikasi nasional terakreditasi, publikasi internasional, dan internasional bereputasi",
              },
              {
                phase: "Technology",
                year: "2028 - 2032",
                title: "Processing Research Activities",
                icon: <Settings className="w-6 h-6" />,
                bgColor: "bg-emerald-600",
                activities: [
                  "Penerapan teknologi dalam peningkatan keaktifan bahan",
                  "Penentuan struktur senyawa Tunggal hasil isolasi",
                ],
                outputs:
                  "Publikasi nasional terakreditasi, publikasi internasional, internasional bereputasi, dan PATEN sederhana",
              },
              {
                phase: "Product",
                year: "2032 - 2036",
                title: "Utilization Research Activities",
                icon: <Package className="w-6 h-6" />,
                bgColor: "bg-emerald-500",
                activities: [
                  "Pembuatan obat herbal terstandarisasi",
                  "Pembuatan aroma terapi, kosmetik (krim kecantikan, sabun, sampo, dll)",
                  "Pembuatan pestisida nabati",
                ],
                outputs: "HKI, PATEN, Produk",
              },
              {
                phase: "Market",
                year: "2036 - 2040",
                title: "Market Research Activities",
                icon: <ShoppingCart className="w-6 h-6" />,
                bgColor: "bg-slate-800",
                activities: ["Pemasaran produk bahan"],
                outputs: "PATEN, Produk yang siap dipasarkan",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Sisi Kiri: Fase & Waktu */}
                  <div
                    className={`${item.bgColor} md:w-64 p-8 text-white flex flex-col justify-center items-center text-center space-y-2`}
                  >
                    <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">
                      Fase {index + 1}
                    </span>
                    <h3 className="text-3xl font-black">{item.phase}</h3>
                    <p className="text-emerald-100 font-medium">{item.year}</p>
                    <div className="pt-4 opacity-50 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>

                  {/* Sisi Kanan: Detail & Luaran */}
                  <div className="flex-1 p-8 grid md:grid-cols-2 gap-8 bg-white">
                    {/* Aktivitas */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div
                          className={`w-1 h-4 ${item.bgColor} rounded-full`}
                        ></div>
                        Aktivitas Riset
                      </h4>
                      <h5 className="font-bold text-slate-800 mb-4 leading-tight text-lg italic">
                        "{item.title}"
                      </h5>
                      <ul className="space-y-3">
                        {item.activities.map((act, i) => (
                          <li
                            key={i}
                            className="flex gap-3 items-start text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Luaran (Data dari image_8a0b64.png) */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 self-start">
                      <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Luaran Diharapkan
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed font-medium">
                        {item.outputs}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM - Updated Professional Design */}
      <section ref={teamsRef} className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-1"
            >
              Personel & Kontak
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Tim Peneliti Kami
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Prof. Dr. Dra. Wiwik Susanah Rita, M.Si.",
                role: "Ketua",
                email: "ketua@institusi.ac.id",
                image: "/images/wiwik-s.jpeg",
                cvLink: "/team/wiwik",
              },
              {
                name: "Prof. Dr. Dra. Wiwik Susanah Rita, M.Si.",
                role: "Ketua",
                email: "ketua@institusi.ac.id",
                image: "/images/wiwik-s.jpeg",
                cvLink: "/team/wiwik",
              },
              {
                name: "Prof. Dr. Dra. Wiwik Susanah Rita, M.Si.",
                role: "Ketua",
                email: "ketua@institusi.ac.id",
                image: "/images/wiwik-s.jpeg",
                cvLink: "/team/wiwik",
              },
              {
                name: "Prof. Dr. Dra. Wiwik Susanah Rita, M.Si.",
                role: "Ketua",
                email: "ketua@institusi.ac.id",
                image: "/images/wiwik-s.jpeg",
                cvLink: "/team/wiwik",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all flex flex-col"
              >
                {/* Bagian Gambar (Header Card) */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Gradasi */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Konten Nama & Posisi */}
                <CardHeader className="p-6 text-center space-y-1">
                  <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
                    {member.name}
                  </CardTitle>
                  <p className="text-emerald-600 font-semibold text-sm tracking-wide">
                    {member.role}
                  </p>
                </CardHeader>

                {/* Bagian Tombol Aksi */}
                <CardContent className="p-6 pt-0 mt-auto">
                  <div className="flex flex-col gap-3">
                    {/* Button CV (Page Individual) */}
                    <button
                      onClick={() => (window.location.href = member.cvLink)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all"
                    >
                      <FileText size={16} className="text-slate-400" />
                      Profil & CV
                    </button>

                    {/* Button Email (Pop Up Mailto) */}
                    <button
                      onClick={() =>
                        (window.location.href = `mailto:${member.email}`)
                      }
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 rounded-xl text-sm font-bold text-white hover:bg-emerald-700 shadow-sm shadow-emerald-200 transition-all active:scale-95"
                    >
                      <Mail size={16} />
                      Hubungi Saya
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-500">
        © 2026 Personal Research Page · Phytochemistry & Bioactivity
      </footer>
    </div>
  );
}