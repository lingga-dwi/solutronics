"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 justify-self-start flex-shrink-0"
          aria-label="Solutronics Home"
        >
          <img
            src="/branding/solutronics-logo.png"
            alt="Solutronics"
            className="h-8 md:h-9 w-auto select-none"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src = "/branding/solutronics-logo.jpg"
            }}
          />
        </Link>

        {/* Desktop links centered */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center justify-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Beranda
            </Link>
            <Link href="/#tentang" className="text-sm text-muted-foreground hover:text-foreground">
              Tentang Kami
            </Link>
            <Link href="/#harga" className="text-sm text-muted-foreground hover:text-foreground">
              Lihat Harga
            </Link>
            <Link href="/#portofolio" className="text-sm text-muted-foreground hover:text-foreground">
              Portofolio
            </Link>
          </div>
        </div>

        {/* Desktop CTA aligned right */}
        <div className="hidden md:flex justify-end flex-shrink-0">
          <Button asChild className="h-10 px-4">
            <Link href="/#pesan">Buat Pesanan</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-sm justify-self-end" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-7xl px-6 py-2 flex flex-col">
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
              href="/#tentang"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Tentang Kami
            </Link>
            <Link
              href="/#harga"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Lihat Harga
            </Link>
            <Link
              href="/#portofolio"
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              Portofolio
            </Link>

            <Button asChild className="mt-2">
              <Link href="/#pesan" onClick={() => setOpen(false)}>
                Buat Pesanan
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
