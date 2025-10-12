"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/textarea" // gunakan Textarea lokal
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const WA_NUMBER = "6281234567890" // TODO: ganti ke nomor Solutronics agar langsung terhubung

export function UploadWhatsapp() {
  const [nama, setNama] = useState("")
  const [material, setMaterial] = useState("PLA")
  const [catatan, setCatatan] = useState("")
  const [fileName, setFileName] = useState("")

  function openWhatsApp() {
    const msg =
      `Halo Solutronics,%0A` +
      `Nama: ${nama || "-"}%0A` +
      `Material: ${material}%0A` +
      `File: ${fileName || "-"}%0A` +
      `Catatan: ${catatan || "-"}`
    const url = `https://wa.me/${WA_NUMBER}?text=${msg}`
    window.open(url, "_blank")
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        openWhatsApp()
      }}
      className="space-y-4 rounded-lg border bg-card p-4"
    >
      <div className="space-y-2">
        <Label htmlFor="nama">Nama</Label>
        <Input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Anda" />
      </div>
      <div className="space-y-2">
        <Label>Material</Label>
        <Select value={material} onValueChange={setMaterial}>
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
        <Label htmlFor="file">Upload File 3D</Label>
        <Input
          id="file"
          type="file"
          accept=".stl,.obj,.zip"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
        <p className="text-xs text-muted-foreground">
          File tidak diunggah ke server. Nama file akan disertakan otomatis di chat WhatsApp.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="catatan">Catatan</Label>
        <Textarea
          id="catatan"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
          placeholder="Ukuran, jumlah, warna, deadline, dll."
        />
      </div>
      <Button type="submit" className="w-full">
        Kirim ke WhatsApp
      </Button>
    </form>
  )
}
