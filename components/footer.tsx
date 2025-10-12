export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Solutronics</p>
        <p>Harga transparan • Konsultasi gratis • Viewer 3D</p>
      </div>
    </footer>
  )
}
