import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  {
    title: "Informasi & Edukasi",
    body: "Profil singkat, bahan tersedia, dan tips memilih material.",
  },
  {
    title: "Harga Transparan",
    body: "Tabel harga dan kalkulator agar biaya jelas sejak awal.",
  },
  {
    title: "Pemesanan Praktis",
    body: "Upload file 3D; form pesanan otomatis membuka WhatsApp.",
  },
  {
    title: "Kepercayaan Pengguna",
    body: "Portofolio nyata, testimoni, dan QC foto/video.",
  },
  {
    title: "Dukungan Layanan",
    body: "FAQ, konsultasi gratis, bantuan desain & revisi file.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} className="bg-card">
          <CardHeader>
            <CardTitle className="text-primary">{it.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{it.body}</CardContent>
        </Card>
      ))}
    </div>
  )
}
