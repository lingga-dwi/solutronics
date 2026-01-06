import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Layanan3DPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <header className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-primary">Layanan 3D</h1>
          <p className="text-muted-foreground">
            Cetak 3D cepat & presisi, plus jasa pembuatan desain dari brief Anda. Mulai dari prototipe, custom part,
            hingga miniatur detail tinggi.
          </p>
        </div>
        <Button asChild>
          <Link href="/#pesan">Mulai Konsultasi</Link>
        </Button>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>FDM/FFF (PLA/PETG/ABS)</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Cocok untuk part fungsional, jig, dan casing. Biaya ekonomis, kuat, dan ideal untuk iterasi cepat.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resin (SLA/DLP)</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Detail tinggi & permukaan halus. Ideal untuk miniatur, figur, dan produk estetis.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Finishing & Perakitan</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Sanding, priming, cat dasar, pemasangan insert/brass, dan perakitan sederhana sesuai kebutuhan.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3D Custom</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Pembuatan part khusus sesuai ukuran/kegunaan Anda. Kami bantu optimasi orientasi, layer, dan infill agar
            kuat sekaligus hemat biaya.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Jasa Desain 3D/CAD</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Tidak punya file 3D? Cukup kirim sketsa/foto/brief. Kami buatkan model 3D untuk dicetak (STL) atau kebutuhan
            desain (STEP/OBJ) dengan revisi terarah.
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Image
          src="/images/solution-idea.jpg"
          alt="Ilustrasi alur layanan"
          width={900}
          height={600}
          className="rounded-lg border bg-card"
        />
        <div className="space-y-3 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-primary">Bagaimana Kami Bekerja</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>
              Kirim file STL/OBJ atau brief (sketsa/foto/ukuran) bila perlu dibuatkan model.
            </li>
            <li>
              Terima estimasi material, waktu, dan biaya. Untuk jasa desain, kami kirim pratinjau untuk approval/revisi.
            </li>
            <li>Produksi & QC, finishing opsional, lalu pengemasan & pengiriman aman.</li>
          </ol>
          <div className="pt-2">
            <Button variant="secondary" asChild>
              <Link href="/#harga">Lihat Harga</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
