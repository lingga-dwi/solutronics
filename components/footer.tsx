export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <img
              src="/branding/solutronics-logo.png"
              alt="Solutronics"
              className="h-8 w-auto select-none"
            />
            <p className="text-sm text-slate-200/80">
              Layanan 3D Printing, konsultasi desain, dan QC foto/video untuk hasil presisi dan terpercaya.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold">Tautan Cepat</div>
            <ul className="space-y-2 text-sm text-slate-200/80">
              <li>
                <a href="/#tentang" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/#harga" className="hover:text-white">
                  Lihat Harga
                </a>
              </li>
              <li>
                <a href="/#portofolio" className="hover:text-white">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="/#pesan" className="hover:text-white">
                  Pemesanan
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold">Layanan</div>
            <ul className="space-y-2 text-sm text-slate-200/80">
              <li>3D Printing Single & Multi Color</li>
              <li>Konsultasi & Estimasi</li>
              <li>Bantuan Desain / Revisi File</li>
              <li>QC Foto/Video</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold">Kontak</div>
            <ul className="space-y-2 text-sm text-slate-200/80">
              <li>WhatsApp: 085805908809</li>
              <li>Email: solutronic@gmail.com</li>
              <li>
                <a href="https://wa.me/6285805908809" className="hover:text-white" target="_blank" rel="noreferrer">
                  Chat cepat via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-slate-200/70 text-center">
          © 2026 Solutronics. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  )
}
