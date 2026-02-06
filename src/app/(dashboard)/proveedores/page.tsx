import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProveedoresPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Proveedores</h2>
          <p className="text-muted-foreground">Gestión de proveedores y servicios</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Proveedor
        </Button>
      </div>
    </div>
  )
}