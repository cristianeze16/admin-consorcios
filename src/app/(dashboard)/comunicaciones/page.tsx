import { Button } from "@/components/ui/button"
import { Plus, Megaphone } from "lucide-react"

export default function ComunicacionesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Comunicaciones</h2>
          <p className="mt-1 text-muted-foreground">Avisos y circulares para propietarios</p>
        </div>
        <Button className="cursor-pointer gap-2 shadow-sm transition-all duration-200 hover:shadow-md">
          <Plus className="h-4 w-4" />
          Nuevo Aviso
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/60 py-24 backdrop-blur-lg dark:border-white/10 dark:bg-white/5">
        <div className="rounded-xl bg-primary/10 p-4">
          <Megaphone className="h-10 w-10 text-primary" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Sin comunicaciones</h3>
        <p className="mt-1 max-w-sm text-center text-sm text-muted-foreground">
          Publicá avisos y circulares para mantener informados a los propietarios e inquilinos.
        </p>
        <Button variant="outline" className="mt-6 cursor-pointer gap-2">
          <Plus className="h-4 w-4" />
          Crear aviso
        </Button>
      </div>
    </div>
  )
}
