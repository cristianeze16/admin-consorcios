import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function LiquidacionesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Liquidaciones</h2>
          <p className="text-muted-foreground">Liquidación mensual de expensas</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Liquidación
        </Button>
      </div>
    </div>
  )
}