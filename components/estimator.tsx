"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const MATERIALS = {
  PLA: 300, // rupiah per gram
  PETG: 400,
  ABS: 450,
  RESIN: 600,
}

export function Estimator() {
  const [berat, setBerat] = useState<number>(50)
  const [material, setMaterial] = useState<keyof typeof MATERIALS>("PLA")
  const [kompleks, setKompleks] = useState<"rendah" | "sedang" | "tinggi">("sedang")
  const [qty, setQty] = useState<number>(1)

  const estimasi = useMemo(() => {
    const base = MATERIALS[material] * berat
    const faktor = kompleks === "rendah" ? 1 : kompleks === "sedang" ? 1.2 : 1.5
    const subtotal = base * faktor * qty
    const minCharge = 20000 // minimum order
    return Math.max(subtotal, minCharge)
  }, [berat, material, kompleks, qty])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="berat">Berat Per Part (gram)</Label>
          <Input
            id="berat"
            type="number"
            min={1}
            value={berat}
            onChange={(e) => setBerat(Number.parseFloat(e.target.value || "0"))}
          />
        </div>
        <div className="space-y-2">
          <Label>Material</Label>
          <Select value={material} onValueChange={(v) => setMaterial(v as any)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih material" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PLA">PLA</SelectItem>
              <SelectItem value="PETG">PETG</SelectItem>
              <SelectItem value="ABS">ABS</SelectItem>
              <SelectItem value="RESIN">Resin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Kompleksitas</Label>
          <Select value={kompleks} onValueChange={(v) => setKompleks(v as any)}>
            <SelectTrigger>
              <SelectValue placeholder="Kompleksitas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rendah">Rendah</SelectItem>
              <SelectItem value="sedang">Sedang</SelectItem>
              <SelectItem value="tinggi">Tinggi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="qty">Jumlah</Label>
          <Input
            id="qty"
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Number.parseInt(e.target.value || "1"))}
          />
        </div>
      </div>
      <div className="flex items-center justify-between rounded-md border p-3 bg-secondary">
        <span className="text-muted-foreground">Estimasi</span>
        <strong className="text-xl">Rp {estimasi.toLocaleString("id-ID")}</strong>
      </div>
      <Button asChild>
        <a href="#pesan">Lanjut Pesan</a>
      </Button>
    </div>
  )
}
