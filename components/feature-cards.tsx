import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
  {
    title: "Informasi & Edukasi",
    body: "Company profile, keunggulan, bahan & karakter.",
  },
  {
    title: "Harga Transparan",
    body: "Tabel harga + kalkulator estimasi sederhana.",
  },
  {
    title: "Pemesanan Praktis",
    body: "Upload file 3D, form pesanan terhubung WhatsApp.",
  },
  {
    title: "Kepercayaan Pengguna",
    body: "Portofolio, testimoni, dan QC foto/video.",
  },
  {
    title: "Dukungan Layanan",
    body: "FAQ, konsultasi gratis, opsi bantuan desain.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
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
