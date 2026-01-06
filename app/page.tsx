"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Estimator } from "@/components/estimator"
import { UploadWhatsapp } from "@/components/upload-whatsapp"
import dynamic from "next/dynamic"
import HowToOrder from "@/components/how-to-order"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const DynamicInlineViewer = dynamic(() => import("@/components/three-viewer").then((m) => m.InlineViewer), {
  ssr: false,
})

export default function Home() {
  const portfolioImages = [
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.45 (1).jpeg",
      alt: "Portofolio Solutronics 1",
      title: "Hasil Cetak 3D",
      meta: "Portofolio Solutronics",
      description: "Contoh kualitas permukaan dan warna untuk casing dan part custom.",
    },
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.45 (2).jpeg",
      alt: "Portofolio Solutronics 2",
      title: "Prototipe Arsitektur",
      meta: "Portofolio Solutronics",
      description: "Model maket dengan detail presisi untuk presentasi desain.",
    },
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.45.jpeg",
      alt: "Portofolio Solutronics 3",
      title: "Figur Resin",
      meta: "Portofolio Solutronics",
      description: "Cetak figur dengan finishing halus dan detail rapih.",
    },
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.46 (1).jpeg",
      alt: "Portofolio Solutronics 4",
      title: "Enclosure Custom",
      meta: "Portofolio Solutronics",
      description: "Produksi sarung elektronik dengan toleransi ketat.",
    },
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.46 (2).jpeg",
      alt: "Portofolio Solutronics 5",
      title: "Prototype Fungsional",
      meta: "Portofolio Solutronics",
      description: "Komponen uji fungsi sebelum produksi massal.",
    },
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.46.jpeg",
      alt: "Portofolio Solutronics 6",
      title: "Aksesori Custom",
      meta: "Portofolio Solutronics",
      description: "Variasi warna untuk part estetis dan merchandising.",
    },
    {
      src: "/porto/WhatsApp Image 2026-01-06 at 00.44.47.jpeg",
      alt: "Portofolio Solutronics 7",
      title: "Detail Miniatur",
      meta: "Portofolio Solutronics",
      description: "Miniatur dengan detail kecil tetap presisi dan bersih.",
    },
  ]
  const [portfolioPage, setPortfolioPage] = useState(1)
  const pageSize = 6
  const totalPortfolioPages = Math.ceil(portfolioImages.length / pageSize)
  const pageImages = portfolioImages.slice((portfolioPage - 1) * pageSize, portfolioPage * pageSize)

  const [testimonialApi, setTestimonialApi] = useState<any>(null)

  return (
    <main>
      {/* Hero */}
      <section id="beranda" className="bg-gradient-to-b from-white via-white to-secondary/40">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20 min-h-[70vh]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Solutronics 3D Printing
              </p>
              <div className="space-y-1 font-extrabold leading-[0.95] uppercase">
                <div className="text-4xl sm:text-5xl lg:text-6xl text-foreground">Profesional</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl text-muted-foreground">3D Printing</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl text-muted-foreground">untuk</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl text-primary">Proyek Anda.</div>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                Produksi in-house dengan mesin presisi: siap prototipe, part teknis, hingga figur detail tinggi.
                Konsultasi gratis, estimasi cepat, dan QC foto/video di setiap pesanan.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="bg-success text-success-foreground hover:opacity-90 shadow-md"
                >
                  <a href="https://wa.me/6285805908809" target="_blank" rel="noreferrer">
                    <span className="inline-flex items-center gap-2">
                      <img
                        src="/images/design-mode/%E2%80%94Pngtree%E2%80%94whatsapp%20icon%20vector_8704827.png"
                        alt=""
                        className="h-5 w-5"
                      />
                      <span>Konsultasi Sekarang</span>
                    </span>
                  </a>
                </Button>
                <span className="text-sm text-muted-foreground">
                  Pricelist & estimator lengkap tersedia di bagian Harga.
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-primary/5 blur-3xl" />
              <Image
                src="/images/design-mode/Gemini_Generated_Image_9zop879zop879zop.png"
                alt="Solutronics 3D Printing - workshop dan hasil cetak"
                width={1200}
                height={900}
                className="w-full h-auto max-w-[1080px] justify-self-end drop-shadow-2xl object-contain mx-auto lg:ml-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cara Pemesanan Ringkas */}
      <HowToOrder />

      {/* Latar Belakang */}
      <section id="tentang" className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-primary">Tentang Kami</h2>
            <p className="text-muted-foreground">
              Kami bantu Anda mencetak 3D dengan cepat, rapi, dan harga jelas. Estimasi transparan, pemesanan langsung
              via WhatsApp, plus bukti kualitas melalui portofolio & QC foto/video.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Estimasi & tabel harga sederhana sejak awal.</li>
              <li>Form pemesanan terhubung otomatis ke WhatsApp.</li>
              <li>Portofolio nyata dan QC foto/video sebagai bukti hasil.</li>
              <li>FAQ, konsultasi gratis, dan opsi bantuan desain.</li>
            </ul>
            <div className="space-y-2">
              <p className="font-semibold text-primary">Fitur Utama:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>3D Printing single & multi color dengan QC foto/video.</li>
                <li>Kalkulator estimasi & tabel harga transparan.</li>
                <li>Pemesanan mudah via WhatsApp dengan upload file.</li>
                <li>Bantuan desain/revisi file serta konsultasi gratis.</li>
              </ul>
            </div>
          </div>
          <Image
            src="/porto/tentang.png"
            alt="Foto produksi Solutronics"
            width={900}
            height={600}
            className="rounded-lg border object-cover object-center"
          />
        </div>
      </section>

      {/* Harga & Estimator */}
      <section id="harga" className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-primary">Harga & Kalkulator Estimasi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ringkasan price list sesuai gambar yang kami cantumkan. Untuk penawaran akurat, kirim file STL/OBJ atau
              link model; kalkulator membantu estimasi cepat.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] items-start">
            <Card>
              <CardHeader>
                <CardTitle>Price List</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm text-muted-foreground">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">3D Printing Single Color</p>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="font-medium text-foreground">Layer Height</span>
                      <span className="font-medium text-foreground">Harga (Rp/gram)</span>

                      <span>0.10 mm</span>
                      <span>1.200</span>

                      <span>0.12 mm</span>
                      <span>1.000</span>

                      <span>0.16 mm</span>
                      <span>900</span>

                      <span>0.20 mm</span>
                      <span>700</span>

                      <span>0.28 mm</span>
                      <span>500</span>

                      <span>0.30 mm</span>
                      <span>400</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Cocok untuk part fungsional/umum dengan 1 warna. Berat dan kompleksitas mempengaruhi total biaya.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">3D Printing Multi Color</p>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="font-medium text-foreground">Layer Height</span>
                      <span className="font-medium text-foreground">Harga (Rp/gram)</span>

                      <span>0.10 mm</span>
                      <span>1.700</span>

                      <span>0.12 mm</span>
                      <span>1.500</span>

                      <span>0.16 mm</span>
                      <span>1.400</span>

                      <span>0.20 mm</span>
                      <span>1.200</span>

                      <span>0.28 mm</span>
                      <span>1.000</span>

                      <span>0.30 mm</span>
                      <span>900</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Untuk kebutuhan multi warna atau variasi finishing. Harga mengikuti layer height dan jumlah warna.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Estimasi</CardTitle>
              </CardHeader>
              <CardContent>
                <Estimator />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3 text-muted-foreground">
            <h3 className="text-xl font-semibold text-foreground">Catatan Harga</h3>
            <ul className="list-disc pl-6">
              <li>Harga aktual mengikuti berat material, kompleksitas, dan finishing.</li>
              <li>Kalkulator membantu estimasi cepat; bukan penawaran final.</li>
              <li>Silakan kirim file STL/OBJ atau link model untuk penawaran akurat.</li>
              <li>Bisa bantuan desain/revisi file bila diperlukan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pemesanan Praktis */}
      <section id="pesan" className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr] items-start">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-primary">Pemesanan Online Praktis</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Upload file 3D (STL/OBJ) atau isi form singkat. Setelah klik "Kirim ke WhatsApp", chat akan terbuka
                dengan detail pesanan Anda untuk proses konsultasi dan penawaran harga.
              </p>
              <div className="rounded-xl">
                <UploadWhatsapp />
              </div>
            </div>
            <div className="space-y-3 rounded-lg border bg-card p-2 shadow-sm">
              <div className="text-sm text-muted-foreground px-2 py-2">Preview 3D Interaktif (contoh)</div>
              <div className="h-[360px] w-full rounded-md overflow-hidden border bg-muted/30">
                <DynamicInlineViewer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portofolio & Testimoni */}
      <section id="portofolio" className="py-16 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-primary">Portofolio & Testimoni</h2>
            <p className="text-muted-foreground max-w-2xl">
              Cuplikan hasil cetak 3D terbaru kami dengan variasi material, warna, dan detail. Semua foto diambil dari
              proyek nyata Solutronics.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pageImages.map((item) => (
              <Card key={item.src} className="overflow-hidden border bg-background shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>

          {totalPortfolioPages > 1 && (
            <div className="flex justify-center gap-3">
              {Array.from({ length: totalPortfolioPages }, (_, idx) => {
                const page = idx + 1
                const isActive = page === portfolioPage
                return (
                  <Button
                    key={page}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    className="w-10"
                    onClick={() => setPortfolioPage(page)}
                  >
                    {page}
                  </Button>
                )
              })}
            </div>
          )}

          <div className="mt-10">
            <Carousel className="w-full" opts={{ align: "start", loop: true }} setApi={setTestimonialApi}>
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <Card>
                    <CardContent className="pt-6 text-muted-foreground">
                      “Proses cepat, hasil rapi. Estimatornya membantu banget!” — Lingga, Mahasiswa
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card>
                    <CardContent className="pt-6 text-muted-foreground">
                      “Komunikasi enak lewat WA, revisi desain dibantu sampai pas.” — Jehan, Mahasiswa
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card>
                    <CardContent className="pt-6 text-muted-foreground">
                      “Hasil detail bersih, QC foto/video sebelum dikirim bikin yakin.” — Abigail, Mahasiswa
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card>
                    <CardContent className="pt-6 text-muted-foreground">
                      “Respon cepat, estimasi jelas, file dibantu cek sebelum cetak.” — Aini, Mahasiswa
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-8" />
              <CarouselNext className="-right-4 md:-right-8" />
            </Carousel>
            {/*
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                "Proses cepat, hasil rapi. Estimatornya membantu banget!" — Adit, Mahasiswa
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                "Komunikasi enak lewat WA, revisi desain dibantu sampai pas." — Dita, Desainer Produk
              </CardContent>
            </Card>
          */}</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="a">
              <AccordionTrigger>File apa yang bisa diunggah?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                STL/OBJ lebih disarankan. Bila Anda hanya punya gambar, kirimkan saja untuk kami bantu estimasi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Berapa lama produksi?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Umumnya 1–3 hari kerja tergantung ukuran, material, dan antrian. Kami informasikan estimasi setelah cek
                file.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionTrigger>Bagaimana pembayaran?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Transfer bank atau e-wallet. DP mungkin diperlukan untuk pesanan besar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="d">
              <AccordionTrigger>Apakah bisa membantu desain dari nol?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Bisa. Kami menyediakan jasa modeling sederhana hingga revisi file sebelum dicetak.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="e">
              <AccordionTrigger>Material apa yang tersedia?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Umumnya PLA/ABS/PETG. Untuk kebutuhan khusus (TPU/Nylon/Resin) silakan konsultasi dulu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f">
              <AccordionTrigger>Apakah ada minimal order?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tidak ada minimal. Biaya mengikuti berat/material & waktu cetak.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="g">
              <AccordionTrigger>Bagaimana pengecekan kualitas (QC)?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Kami foto/video hasil cetak sebelum pengiriman. Reprint gratis untuk cacat produksi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="h">
              <AccordionTrigger>Pengiriman tersedia ke mana?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pickup di workshop, kurir instan (kota tertentu), atau ekspedisi nasional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  )
}
