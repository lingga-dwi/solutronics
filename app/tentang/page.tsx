import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TentangPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      {/* Hero intro */}
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Tentang Solutronics</h1>
          <p className="text-muted-foreground leading-relaxed">
            Solutronics adalah studio 3D printing dan konsultasi desain yang berfokus pada akses mudah, harga
            transparan, dan kualitas terjamin melalui QC foto/video. Kami melayani pelanggan pendidikan, maker, dan
            bisnis.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Konsultasi Gratis</Badge>
            <Badge variant="secondary">Estimasi Transparan</Badge>
            <Badge variant="secondary">QC Foto/Video</Badge>
          </div>
        </div>
        <Image
          src="/images/design-mode/3d-printing-production-1200x800.jpg"
          alt="Workshop dan sample hasil cetak 3D"
          width={900}
          height={600}
          className="rounded-lg border bg-card"
          priority
        />
      </div>

      {/* Keunggulan */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Keunggulan Kami</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Akses & Kecepatan</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Proses pemesanan ringkas melalui WhatsApp dengan feedback cepat dan timeline jelas.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Kualitas Terukur</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              QC foto/video sebelum pengiriman. Opsi reprint gratis untuk cacat produksi.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Harga Transparan</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Estimator berat & material di situs, ditambah tabel harga yang mudah dibaca.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mesin & Material */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Mesin & Material</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>FDM/FFF</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Material: PLA, PETG, ABS. Cocok untuk prototipe fungsional, jig/fixture, dan part ukuran sedang.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Resin (SLA/DLP)</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Detail tinggi dan permukaan halus. Ideal untuk miniatur, casing kecil, dan part estetis.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alur Kerja */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Alur Kerja</h2>
        <ol className="grid gap-4 md:grid-cols-4 text-muted-foreground">
          <li className="rounded-md border bg-card p-4">
            <span className="font-medium text-foreground">1. Kirim File</span>
            <p>Unggah STL/OBJ atau link model.</p>
          </li>
          <li className="rounded-md border bg-card p-4">
            <span className="font-medium text-foreground">2. Estimasi</span>
            <p>Kami evaluasi material, berat, dan waktu.</p>
          </li>
          <li className="rounded-md border bg-card p-4">
            <span className="font-medium text-foreground">3. Produksi</span>
            <p>Pencetakan sesuai spesifikasi & QC internal.</p>
          </li>
          <li className="rounded-md border bg-card p-4">
            <span className="font-medium text-foreground">4. Pengiriman</span>
            <p>Foto/video QC lalu dikirim ke alamat Anda.</p>
          </li>
        </ol>
      </section>

      {/* Galeri singkat */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Galeri</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Image
            src="/contoh-hasil-cetak-3d-miniatur.jpg"
            alt="Contoh miniatur"
            width={480}
            height={320}
            className="rounded-md border bg-card"
          />
          <Image
            src="/produk-3d-teknis-fungsional.jpg"
            alt="Produk teknis"
            width={480}
            height={320}
            className="rounded-md border bg-card"
          />
          <Image
            src="/model-3d-resin-detail-tinggi.jpg"
            alt="Model resin detail tinggi"
            width={480}
            height={320}
            className="rounded-md border bg-card"
          />
        </div>
      </section>
    </main>
  )
}
