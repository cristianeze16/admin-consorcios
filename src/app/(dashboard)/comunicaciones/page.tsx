import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ComunicacionesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Comunicaciones</h2>
          <p className="text-muted-foreground">Avisos y circulares para propietarios</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Aviso
        </Button>
      </div>
    </div>
  )
}