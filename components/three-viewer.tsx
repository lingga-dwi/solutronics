"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei"
import React, { Suspense, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type ViewerProps = {
  modelUrl?: string
  height?: number
  /** opsional: host yang diizinkan untuk URL eksternal */
  allowedHosts?: string[]
}

const DEFAULT_MODEL = "/models/default.glb" // taruh di /public/models/default.glb

function isSafeModelUrl(raw: string, allowedHosts: string[]) {
  const trimmed = raw.trim()
  if (!trimmed) return { ok: false, reason: "URL kosong." }

  // hanya izinkan path lokal "/..." atau http/https
  const isLocal = trimmed.startsWith("/")
  const isHttp = /^https?:\/\//i.test(trimmed)
  if (!isLocal && !isHttp) return { ok: false, reason: "Hanya mendukung URL lokal (/...) atau http/https." }

  // wajib ekstensi .glb/.gltf
  const lower = trimmed.toLowerCase()
  if (!(lower.endsWith(".glb") || lower.endsWith(".gltf"))) {
    return { ok: false, reason: "File harus berekstensi .glb atau .gltf." }
  }

  // jika eksternal, enforce allowlist host
  if (isHttp) {
    try {
      const u = new URL(trimmed)
      if (allowedHosts.length && !allowedHosts.includes(u.hostname)) {
        return { ok: false, reason: `Host tidak diizinkan: ${u.hostname}` }
      }
    } catch {
      return { ok: false, reason: "URL tidak valid." }
    }
  }

  return { ok: true as const, reason: "" }
}

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url) as any
  return <primitive object={gltf.scene || gltf} />
}

// Error boundary supaya kalau GLTF gagal load, app tidak blank
class ModelErrorBoundary extends React.Component<
  { onError: (msg: string) => void; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(err: any) {
    const msg = err?.message || "Gagal memuat model. Periksa URL/CORS."
    this.props.onError(msg)
  }

  render() {
    return this.state.hasError ? null : this.props.children
  }
}

export function InlineViewer({
  modelUrl = DEFAULT_MODEL,
  height = 400,
  allowedHosts = [], // contoh: ["yourdomain.com", "cdn.yourdomain.com"]
}: ViewerProps) {
  const [input, setInput] = useState(modelUrl)
  const [activeUrl, setActiveUrl] = useState(modelUrl)
  const [error, setError] = useState<string>("")

  const validation = useMemo(
    () => isSafeModelUrl(input, allowedHosts),
    [input, allowedHosts]
  )

  function load() {
    setError("")
    if (!validation.ok) {
      setError(validation.reason)
      return
    }
    setActiveUrl(input.trim())
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Contoh: /models/default.glb atau https://host-anda/model.glb"
          />
          <Button onClick={load} disabled={!input.trim()}>
            Muat
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setError("")
              setInput(DEFAULT_MODEL)
              setActiveUrl(DEFAULT_MODEL)
            }}
          >
            Reset
          </Button>
        </div>

        {error ? (
          <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm">
            {error}
          </div>
        ) : null}

        {!validation.ok && input.trim() ? (
          <div className="text-xs text-muted-foreground">
            ⚠️ {validation.reason}
          </div>
        ) : null}

        {allowedHosts.length ? (
          <div className="text-xs text-muted-foreground">
            Host yang diizinkan: {allowedHosts.join(", ")}
          </div>
        ) : null}
      </div>

      <div className="w-full" style={{ height }}>
        <Canvas camera={{ position: [2.5, 2, 2.5], fov: 50 }}>
          <color attach="background" args={["#f7f7fb"]} />
          <Suspense
            fallback={
              <Html center>
                <div className="rounded-md bg-secondary px-3 py-2 text-sm">Memuat model…</div>
              </Html>
            }
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} />

            <ModelErrorBoundary
              onError={(msg) => setError(msg)}
            >
              <Model url={activeUrl} />
              <Environment preset="studio" />
            </ModelErrorBoundary>
          </Suspense>

          <OrbitControls makeDefault enableDamping dampingFactor={0.1} />
        </Canvas>
      </div>

      <p className="px-2 pt-2 text-xs text-muted-foreground">
        Saran aman: taruh file di folder <b>/public/models</b> lalu pakai path <b>/models/namafile.glb</b>.
        URL eksternal bisa gagal karena CORS/DNS, jadi dibatasi.
      </p>
    </div>
  )
}

export default InlineViewer

// optional: preload model default biar lebih cepat
useGLTF.preload(DEFAULT_MODEL)
