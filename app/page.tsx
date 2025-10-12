"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Estimator } from "@/components/estimator"
import { UploadWhatsapp } from "@/components/upload-whatsapp"
import { FeatureCards } from "@/components/feature-cards"
import dynamic from "next/dynamic"
import HowToOrder from "@/components/how-to-order"
import { MessageCircle } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const DynamicInlineViewer = dynamic(() => import("@/components/three-viewer").then((m) => m.InlineViewer), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="beranda" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-balance text-4xl md:text-5xl font-bold text-primary">Solutronics 3D Printing</h1>
            <p className="text-pretty text-muted-foreground">
              Jasa 3D Printing cepat & presisi. Hitung biaya instan, unggah file STL/OBJ, dan konsultasi gratis. Cocok
              untuk prototipe, tugas kuliah, hingga produksi kecil.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <a href="#harga">Lihat Harga</a>
              </Button>
              <Button asChild className="bg-success text-success-foreground hover:opacity-90">
                <a href="#pesan" className="inline-flex items-center gap-2">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  <span>Konsultasi WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/design-mode/960x0.jpg"
              alt="Affinite Diagram: ringkasan fitur situs"
              width={900}
              height={600}
              className="rounded-lg border"
              priority
            />
          </div>
        </div>
      </section>

      {/* Cara Pemesanan Ringkas */}
      <HowToOrder />

      {/* Latar Belakang */}
      <section id="tentang" className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-primary">Background</h2>
            <p className="text-muted-foreground">
              Kami menghadirkan layanan percetakan 3D yang mudah diakses, harga jelas & fleksibel, serta konsultasi
              gratis. Situs ini memadukan profil perusahaan, tabel harga, kalkulator estimasi, pemesanan praktis via
              WhatsApp, serta portofolio dan testimoni untuk membangun kepercayaan.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Company Profile yang ringkas namun informatif</li>
              <li>Harga transparan dengan estimasi cepat</li>
              <li>Upload file 3D dan form pesanan → WhatsApp</li>
              <li>Portofolio, testimoni, dan FAQ</li>
            </ul>
          </div>
          <Image
            src="/images/design-mode/3d-printing-production-1200x800.jpg"
            alt="Slide Background Affinite"
            width={900}
            height={600}
            className="rounded-lg border"
          />
        </div>
      </section>

      {/* Fitur utama */}
      <section id="fitur" className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-primary mb-8">Fitur Utama</h2>
          <FeatureCards />
        </div>
      </section>

      {/* Harga & Estimator */}
      <section id="harga" className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle>Tabel Harga (contoh)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="grid grid-cols-3 gap-3">
                  <span className="font-medium text-foreground">Material</span>
                  <span className="font-medium text-foreground">Basis</span>
                  <span className="font-medium text-foreground">Catatan</span>

                  <span>PLA</span>
                  <span>Rp 30.000/100g</span>
                  <span>Ekonomis, warna beragam</span>

                  <span>PETG</span>
                  <span>Rp 40.000/100g</span>
                  <span>Tahan panas</span>

                  <span>ABS</span>
                  <span>Rp 45.000/100g</span>
                  <span>Kuat, finishing baik</span>

                  <span>Resin</span>
                  <span>Rp 60.000/100g</span>
                  <span>Detail tinggi</span>
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

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <Image
              src="/images/pricelist-solutronics.jpg"
              alt="Price List Solutronics 3D Printing"
              width={800}
              height={1200}
              className="rounded-lg border bg-card"
            />
            <div className="space-y-3 text-muted-foreground">
              <h3 className="text-xl font-semibold text-foreground">Catatan Harga</h3>
              <ul className="list-disc pl-6">
                <li>Harga aktual mengikuti berat material, kompleksitas, dan finishing.</li>
                <li>Kalkulator di samping membantu estimasi cepat, bukan penawaran final.</li>
                <li>Silakan kirim file STL/OBJ atau link model untuk penawaran akurat.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pemesanan Praktis */}
      <section id="pesan" className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-primary">Pemesanan Online Praktis</h2>
            <p className="text-muted-foreground">
              Upload file 3D (STL/OBJ) atau isi form singkat. Setelah klik "Kirim ke WhatsApp", chat akan terbuka dengan
              detail pesanan Anda untuk proses konsultasi dan penawaran harga.
            </p>
            <Image
              src="/images/solution-idea.jpg"
              alt="Rangkuman Solution Idea Affinite"
              width={900}
              height={600}
              className="rounded-lg border"
            />
          </div>
          <UploadWhatsapp />
        </div>
      </section>

      {/* Portofolio & Testimoni */}
      <section id="portofolio" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-primary mb-8">Portofolio & Testimoni</h2>
          <div className="mb-8 rounded-lg border bg-card p-2">
            <div className="text-sm text-muted-foreground px-2 py-2">Preview 3D Interaktif (contoh)</div>
            <div className="h-[420px] w-full rounded-md overflow-hidden border">
              <DynamicInlineViewer />
            </div>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/3">
                <Image
                  src="/contoh-hasil-cetak-3d-miniatur.jpg"
                  alt="Contoh hasil cetak 3D miniatur"
                  width={900}
                  height={600}
                  className="rounded-md border bg-card w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <Image
                  src="/produk-3d-teknis-fungsional.jpg"
                  alt="Produk 3D teknis fungsional"
                  width={900}
                  height={600}
                  className="rounded-md border bg-card w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <Image
                  src="/model-3d-resin-detail-tinggi.jpg"
                  alt="Model 3D resin detail tinggi"
                  width={900}
                  height={600}
                  className="rounded-md border bg-card w-full h-auto"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8" />
            <CarouselNext className="-right-4 md:-right-8" />
          </Carousel>

          <div className="mt-10">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2">
                  <Card>
                    <CardContent className="pt-6 text-muted-foreground">
                      “Proses cepat, hasil rapi. Estimatornya membantu banget!” — Adit, Mahasiswa
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <Card>
                    <CardContent className="pt-6 text-muted-foreground">
                      “Komunikasi enak lewat WA, revisi desain dibantu sampai pas.” — Dita, Desainer Produk
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
        <div className="mx-auto max-w-4xl px-6">
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
