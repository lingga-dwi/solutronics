import { FileUp, MessageSquare, Package } from "lucide-react"

export default function HowToOrder() {
  const steps = [
    {
      title: "Upload / Isi Detail",
      desc: "Kirim file STL/SKP/3MF atau isi spesifikasi: bahan, warna, ukuran, dan deadline.",
      Icon: FileUp,
    },
    {
      title: "Konsultasi & Review",
      desc: "Diskusikan desain via WhatsApp. Kami bantu optimasi & verifikasi kelayakan print.",
      Icon: MessageSquare,
    },
    {
      title: "Produksi & Pengiriman",
      desc: "Cetak, QC foto/video, lalu kirim. Ambil sendiri atau kurir. Garansi hasil rapi.",
      Icon: Package,
    },
  ]

  return (
    <section id="cara-pemesanan" aria-labelledby="cara-pemesanan-heading" className="relative py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="cara-pemesanan-heading"
          className="text-center text-balance text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Cara Pemesanan
        </h2>
        <p className="mt-2 text-center text-muted-foreground text-sm md:text-base">
          Alur cepat dari upload file hingga barang Anda diterima.
        </p>

        {/* Garis penghubung dihapus sesuai permintaan */}

        <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl border bg-card p-5 text-center shadow-sm transition-colors hover:bg-accent/30"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.Icon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">{s.title}</span>
              </div>
              <h3 className="text-sm md:text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tombol CTA di bawah grid dihapus agar section lebih ringkas */}
      </div>
    </section>
  )
}
