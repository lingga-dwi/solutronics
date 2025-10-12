import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HargaPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-10">
      <header className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-primary">Harga Cetak 3D</h1>
          <p className="text-muted-foreground">Pricelist ringkas dan catatan penting sebelum produksi.</p>
        </div>
        <Button asChild>
          <Link href="/#pesan">Konsultasi</Link>
        </Button>
      </header>

      <div className="rounded-lg border overflow-hidden">
        <Image
          src="/images/pricelist-solutronics.jpg"
          alt="Pricelist Solutronics 3D Printing"
          width={1600}
          height={2400}
        />
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ringkasan Biaya</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Perhitungan utama berdasarkan berat material dan waktu cetak. Finishing dan pengecatan dihitung terpisah.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Catatan</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            File harus diskalakan & manifold. Jika perlu perbaikan desain, kami dapat membantu dengan biaya tambahan.
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
