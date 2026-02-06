import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PropietariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Propietarios</h2>
          <p className="text-muted-foreground">Gestión de propietarios e inquilinos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Propietario
        </Button>
      </div>
    </div>
  )
}