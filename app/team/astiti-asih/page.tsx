export default function CVAstitiAsih() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="border-b pb-6 mb-8">
          <h1 className="text-3xl font-bold text-emerald-700">
            Prof. Dr. Dra Ida Ayu Raka Astiti Asih, M.Si
          </h1>
          <p className="text-slate-600 mt-2">
            Fakultas MIPA – Jurusan Kimia  
            Universitas Udayana
          </p>
        </div>
  
        {/* Personal Information */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p><strong>Birth:</strong> Buduk, Badung – 2 June 1964</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>NIP:</strong> 196406021992032001</p>
            <p><strong>Rank:</strong> Pembina Tk I / IVb</p>
            <p><strong>Functional Position:</strong> Lektor Kepala</p>
            <p><strong>Email:</strong> astiti_asih@unud.ac.id</p>
            <p><strong>SINTA ID:</strong> 5982631</p>
            <p><strong>H-Index (Google Scholar):</strong> 15</p>
            <p><strong>H-Index (Scopus):</strong> 4</p>
          </div>
        </section>
  
        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>S1 – Universitas Airlangga</strong>  
              <br />Medicinal Chemistry (1984–1990)
            </li>
            <li>
              <strong>S2 – Universitas Padjadjaran</strong>  
              <br />Organic Chemistry of Natural Products (1998–2000)
            </li>
            <li>
              <strong>S3 – Universitas Udayana</strong>  
              <br />Basic Medical Sciences (2015–2018)
            </li>
          </ul>
        </section>
  
        {/* Research (Last 5 Years) */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Selected Research (2020–2025)</h2>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Virgin Coconut Oil enzymatic extraction and antibacterial study (2020–2021)</li>
            <li>Mimosa pudica extract as antihyperglycemia agent (2021)</li>
            <li>Nano-chitosan coriander seed extract for glucose reduction (2022–2023)</li>
            <li>Green corrosion inhibitor from papaya seed tannin (2024)</li>
            <li>Amla tea phytopharmaceutical candidate (2024)</li>
            <li>6-Shogaol nano spray gel anti-inflammatory formulation (2025)</li>
          </ul>
        </section>
  
        {/* Publications */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Recent Publications (Scopus Indexed)</h2>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>Antioxidant Activity of Flavonoid Glycoside Extract – IJ Design & Nature (2022)</li>
            <li>Evaluation of Antioxidant Activity of Secang Wood Extract (2023)</li>
            <li>Esterification Reaction and Antioxidant Activity of Xanthone Derivative (2024)</li>
            <li>Anti-Inflammatory Activities of Nanoformulated Extract (2025)</li>
            <li>Therapeutic Potential of Red Ginger Bioactive Compounds (2025)</li>
          </ul>
        </section>
  
        {/* Back Button */}
        <div className="mt-12">
          <a
            href="/#our-team"
            className="text-emerald-600 hover:underline"
          >
            ← Back to Our Team
          </a>
        </div>
  
      </div>
    );
  }