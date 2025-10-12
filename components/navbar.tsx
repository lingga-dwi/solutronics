"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Solutronics Home">
          <img
            src="/branding/solutronics-logo.png"
            alt="Solutronics"
            className="h-7 md:h-8 w-auto select-none"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src = "/branding/solutronics-logo.jpg"
            }}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* Beranda dropdown (anchor scroll) */}
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Beranda
          </Link>

          {/* Standalone pages */}
          <Link href="/tentang" className="text-sm text-muted-foreground hover:text-foreground">
            Tentang Kami
          </Link>
          <Link href="/harga" className="text-sm text-muted-foreground hover:text-foreground">
            Harga
          </Link>
          <Link href="/layanan-3d" className="text-sm text-muted-foreground hover:text-foreground">
            Layanan 3D
          </Link>

          {/* CTA Konsultasi ke section pesan di landing */}
          <Button asChild>
            <Link href="/#pesan">Konsultasi</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-sm" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-6xl px-6 py-2 flex flex-col">
            {/* Beranda dropdown simple (submenu list) */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground font-medium"
            >
              Beranda
            </Link>

            {/* Standalone pages */}
            <Link
              href="/tentang"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Tentang Kami
            </Link>
            <Link
              href="/harga"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Harga
            </Link>
            <Link
              href="/layanan-3d"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Layanan 3D
            </Link>

            <Button asChild className="mt-2">
              <Link href="/#pesan" onClick={() => setOpen(false)}>
                Konsultasi
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
