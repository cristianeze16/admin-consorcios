import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ConsorciosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Consorcios</h2>
          <p className="text-muted-foreground">Gestión de edificios y consorcios</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Consorcio
        </Button>
      </div>
    </div>
  )
}