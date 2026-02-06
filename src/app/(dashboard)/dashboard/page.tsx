import {
  Building2,
  Users,
  Receipt,
  AlertTriangle,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: {
  title: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  trend?: { value: string; positive: boolean }
}) {
  return (
    <div className="group rounded-xl border border-white/20 bg-white/60 p-6 shadow-sm backdrop-blur-lg transition-all duration-200 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="mt-3">
        <p className="text-3xl font-bold tracking-tight">{value}</p>
        <div className="mt-1 flex items-center gap-2">
          {trend && (
            <span
              className={`flex items-center text-xs font-medium ${
                trend.positive ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {trend.positive ? (
                <ArrowUpRight className="mr-0.5 h-3 w-3" />
              ) : (
                <ArrowDownRight className="mr-0.5 h-3 w-3" />
              )}
              {trend.value}
            </span>
          )}
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ActivityCard({
  title,
  icon: Icon,
  emptyMessage,
}: {
  title: string
  icon: React.ComponentType<{ className?: string }>
  emptyMessage: string
}) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/60 p-6 shadow-sm backdrop-blur-lg dark:border-white/10 dark:bg-white/5">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border/50">
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="mt-1 text-muted-foreground">
          Resumen general de tus consorcios
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Consorcios"
          value="0"
          description="Total administrados"
          icon={Building2}
        />
        <MetricCard
          title="Propietarios"
          value="0"
          description="Registrados en el sistema"
          icon={Users}
        />
        <MetricCard
          title="Recaudación del mes"
          value="$0"
          description="Total cobrado"
          icon={CreditCard}
        />
        <MetricCard
          title="Morosidad"
          value="0%"
          description="Unidades con deuda"
          icon={AlertTriangle}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ActivityCard
          title="Últimos gastos"
          icon={Receipt}
          emptyMessage="No hay gastos registrados aún"
        />
        <ActivityCard
          title="Pagos recientes"
          icon={TrendingUp}
          emptyMessage="No hay pagos registrados aún"
        />
      </div>
    </div>
  )
}
