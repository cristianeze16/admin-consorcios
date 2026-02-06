import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function GastosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gastos</h2>
          <p className="text-muted-foreground">Registro y control de gastos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Gasto
        </Button>
      </div>
    </div>
  )
}