"use client"

import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

const DynamicInlineViewer = dynamic(() => import("@/components/three-viewer").then((m) => m.InlineViewer), {
  ssr: false,
})

export default function ViewerPage() {
  const sp = useSearchParams()
  const url = sp.get("url") || "/assets/3d/duck.glb"

  return (
    <main className="w-full h-screen flex flex-col">
      <header className="border-b px-4 py-2 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-primary">Solutronics — Viewer 3D</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="/">Kembali</a>
          </Button>
        </div>
      </header>
      <div className="flex-1 min-h-0">
        <DynamicInlineViewer modelUrl={url} height={undefined as any} />
        <style jsx global>{`
          /* pastikan canvas penuh tinggi area konten */
          main > div > div.w-full {
            height: calc(100vh - 48px);
          }
        `}</style>
      </div>
    </main>
  )
}
