"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type ViewerProps = {
  modelUrl?: string
  height?: number
}

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url) as any
  return <primitive object={gltf.scene || gltf} />
}

export function InlineViewer({ 
  modelUrl = "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf", 
  height = 400 
}: ViewerProps) {
  const [url, setUrl] = useState(modelUrl)

  return (
    <div className="w-full">
      <div className="flex gap-2 p-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Tempel URL .glb/.gltf Anda (pastikan CORS mengizinkan)"
        />
        <Button onClick={() => setUrl((u) => u)}>Muat</Button>
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
            <Model url={url} />
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls makeDefault enableDamping dampingFactor={0.1} />
        </Canvas>
      </div>
      <p className="px-2 pt-2 text-xs text-muted-foreground">
        Tips: Gunakan file .glb/.gltf yang dapat diakses publik. Untuk keamanan CORS, host file Anda dan pastikan akses
        anonymous diizinkan.
      </p>
    </div>
  )
}

export default InlineViewer