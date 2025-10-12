"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KontakPage() {
  const [nama, setNama] = useState("")
  const [pesan, setPesan] = useState("Halo Solutronics, saya ingin konsultasi pesanan 3D printing.")

  const waLink = `https://wa.me/6285363533275?text=${encodeURIComponent(`Saya ${nama}. ${pesan}`)}`

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-10">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-2">Kontak</h1>
        <p className="text-muted-foreground">Konsultasi cepat via WhatsApp atau form singkat di bawah.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h2>
          <p className="text-muted-foreground">Klik tombol di bawah untuk membuka chat.</p>
          <Button asChild className="mt-3">
            <Link href={waLink} target="_blank">
              Chat via WhatsApp
            </Link>
          </Button>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold text-foreground mb-2">Form Singkat</h2>
          <div className="grid gap-3">
            <input
              className="rounded-md border bg-background px-3 py-2"
              placeholder="Nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <textarea
              className="rounded-md border bg-background px-3 py-2 min-h-24"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            />
            <Button asChild>
              <Link href={waLink} target="_blank">
                Kirim ke WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-4">
        <h2 className="text-xl font-semibold text-foreground mb-2">Jam Operasional</h2>
        <p className="text-muted-foreground">Senin–Jumat 09.00–17.00 WIB, Sabtu 09.00–13.00 WIB</p>
      </section>
    </main>
  )
}
