"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CvPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Back Button */}
        <Button
          onClick={() => router.back()}
          className="mb-6 bg-emerald-600 text-white hover:bg-emerald-700"
        >
          ← Kembali
        </Button>

        <h1 className="text-3xl font-bold text-center mb-6">
          CV Prof. Dr. Dra. Ida Ayu Raka Astiti Asih, M.Si
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Pribadi</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Nama Lengkap: Prof. Dr. Dra. Ida Ayu Raka Astiti Asih, M.Si</li>
            <li>Jenis Kelamin: Perempuan</li>
            <li>Tempat & Tanggal Lahir: Buduk, Badung, 2 Juni 1964</li>
            <li>NIP: 196406021992032001</li>
            <li>Pangkat/Golongan: Pembina Tk I/IVb</li>
            <li>Jabatan Fungsional: Lektor Kepala</li>
            <li>Instansi: Fakultas MIPA, Jurusan Kimia, Universitas Udayana</li>
            <li>Alamat Rumah: Jl Kebo Iwa Utara II Gang Citarum No.10, Denpasar Bali (80117)</li>
            <li>Nomor HP: 082146327601</li>
            <li>Email: astiti_asih@unud.ac.id / dayu_as@yahoo.com</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Keluarga</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Suami: Ida Bagus Wirya Wijaya, S.Sos, MM</li>
            <li>Anak:
              <ul className="list-disc list-inside ml-5">
                <li>Ida Ayu Prasastiasih Dewi, S.I.Kom., M.Kom</li>
                <li>Ida Bagus Surya Wijaya SE</li>
                <li>Ida Ayu Padma Trisna Dewi, SH, MH</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Mata Kuliah yang Diampu</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Kimia Anorganik</li>
            <li>Kimia Bahan Alam Anorganik</li>
            <li>Kimia Organologam</li>
            <li>Kimia Bioanorganik</li>
            <li>Kimia Anorganik Lanjut</li>
            <li>Kapsel Anorganik</li>
            <li>Kimia Korosi</li>
            <li>Kimia Unsur</li>
            <li>Elusidasi Struktur Senyawa Organik Lanjut</li>
            <li>Kimia Zat Padat</li>
            <li>Metodologi Penelitian</li>
            <li>Ilmu Alamiah Dasar</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Riwayat Pendidikan</h2>
          <table className="w-full table-auto border border-gray-200 text-slate-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Program</th>
                <th className="border px-2 py-1">Nama PT</th>
                <th className="border px-2 py-1">Bidang Ilmu</th>
                <th className="border px-2 py-1">Tahun Masuk</th>
                <th className="border px-2 py-1">Tahun Lulus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">S1</td>
                <td className="border px-2 py-1">Universitas Airlangga</td>
                <td className="border px-2 py-1">Kimia Medisinal</td>
                <td className="border px-2 py-1">1984</td>
                <td className="border px-2 py-1">1990</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">S2</td>
                <td className="border px-2 py-1">Universitas Padjadjaran</td>
                <td className="border px-2 py-1">Kimia Organik Bahan Alam</td>
                <td className="border px-2 py-1">1998</td>
                <td className="border px-2 py-1">2000</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">S3</td>
                <td className="border px-2 py-1">Universitas Udayana</td>
                <td className="border px-2 py-1">Ilmu Alam Dasar Kedokteran</td>
                <td className="border px-2 py-1">2015</td>
                <td className="border px-2 py-1">2018</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Pengalaman Penelitian 5 Tahun Terakhir</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>2020 - Pembuatan Virgin Coconut Oil dengan Proses Ekstraksi Enzimatis dari Jamur Aspergillus niger serta Uji Antibakteri VCO dengan Staphylococcus aureus</li>
            <li>2021 - Pembuatan Virgin Coconut Oil dengan Ekstrak Jamur Aspergillus niger serta Uji Antibakteri VCO</li>
            <li>2021 - Asupan Ekstrak Etanol Daun Putri Malu (Mimosa Pudica L) sebagai Obat Alternatif Antihiperglikemia</li>
            <li>2022 - Efek Nano Partikel Ekstrak Biji Ketumbar (Coriandrum sativum) dengan Komposisi Kitosan</li>
            <li>2022 - Sintesis dan Pengembangan Produk Nano-Kitosan Ekstrak Kulit Pisang Hijau Lumut</li>
            <li>2022 - Reaksi Esterifikasi dan Uji Aktivitas Anti Oksidan Senyawa Turunan Xanton Hasil Isolasi</li>
            <li>2023 - Efek Kombinasi Nanopartikel Ekstrak Biji Ketumbar dan Daun Putri Malu</li>
            <li>2024 - Efektifitas Ekstrak Tanin Biji Pepaya sebagai Green Inhibitor Korosi</li>
            <li>2024 - Pengembangan Teh Buah Amla sebagai Kandidat Fitofarmaka</li>
            <li>2024 - Sintesis dan Karakterisasi Nanoselulosa dari Ampas Tebu</li>
            <li>2025 - Identifikasi Senyawa 6-Shogaol dan Optimasi Formulasi Nano Spray Gel Ekstrak Jahe Merah</li>
          </ul>
        </section>

        <section>
          <p className="text-sm text-slate-400 mt-6">
            Semua data yang tercantum dalam biodata ini adalah benar dan dapat dipertanggungjawabkan secara hukum. 
            Apabila di kemudian hari ditemukan ketidak-sesuaian, saya sanggup menerima risikonya.
          </p>
          <p className="text-right text-slate-500 mt-2">Denpasar, Februari 2026</p>
          <p className="text-right text-slate-500">Ida Ayu Raka Astiti Asih</p>
        </section>
      </div>
    </div>
  );
}