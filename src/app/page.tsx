import Link from "next/link"
import {
  Building2,
  Shield,
  BarChart3,
  CreditCard,
  Users,
  FileText,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl dark:bg-black/40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">ConsorcioApp</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Funcionalidades
          </a>
          <a href="#stats" className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Resultados
          </a>
          <a href="#pricing" className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Planes
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/login"
            className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:shadow-md"
          >
            Comenzar gratis
          </Link>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/15 via-background to-accent/20" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <CheckCircle2 className="h-4 w-4" />
          Plataforma de gestión para consorcios
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Administrá tus{" "}
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            consorcios
          </span>{" "}
          de forma simple
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Expensas, pagos, comunicaciones y reclamos en un solo lugar.
          La herramienta que todo administrador necesita.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/login"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Comenzar ahora
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#features"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border/50 bg-white/50 px-8 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Ver funcionalidades
          </a>
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/20 bg-white/40 p-2 shadow-2xl backdrop-blur-lg dark:border-white/10 dark:bg-white/5">
          <div className="rounded-xl bg-linear-to-br from-primary/10 via-background to-accent/10 p-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-lg bg-white/60 dark:bg-white/5" />
              <div className="col-span-2 h-24 rounded-lg bg-white/60 dark:bg-white/5" />
              <div className="col-span-2 h-16 rounded-lg bg-white/60 dark:bg-white/5" />
              <div className="h-16 rounded-lg bg-white/60 dark:bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Building2,
    title: "Gestión de Consorcios",
    description: "Administrá múltiples edificios con sus unidades funcionales, propietarios e inquilinos desde un solo panel.",
  },
  {
    icon: FileText,
    title: "Liquidación de Expensas",
    description: "Generá liquidaciones mensuales automáticas distribuyendo gastos por coeficiente de cada unidad.",
  },
  {
    icon: CreditCard,
    title: "Control de Pagos",
    description: "Registrá pagos por transferencia, efectivo o MercadoPago. Seguimiento de morosidad en tiempo real.",
  },
  {
    icon: BarChart3,
    title: "Reportes y Métricas",
    description: "Dashboard con métricas clave: recaudación, morosidad, gastos por categoría y tendencias mensuales.",
  },
  {
    icon: MessageSquare,
    title: "Comunicaciones y Reclamos",
    description: "Publicá avisos para los residentes y gestioná reclamos con seguimiento de estado.",
  },
  {
    icon: Shield,
    title: "Roles y Permisos",
    description: "5 roles con permisos granulares: Super Admin, Admin, Empleado, Propietario e Inquilino.",
  },
]

function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Funcionalidades
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Todo lo que necesitás para administrar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Herramientas diseñadas para simplificar la gestión diaria de consorcios de propiedad horizontal.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-white/20 bg-white/60 p-6 backdrop-blur-lg transition-all duration-200 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: "100%", label: "Precisión en cálculos", description: "Distribución automática por coeficiente" },
  { value: "5", label: "Roles de usuario", description: "Permisos granulares por módulo" },
  { value: "9+", label: "Módulos integrados", description: "Gestión completa en un solo lugar" },
  { value: "24/7", label: "Acceso online", description: "Desde cualquier dispositivo" },
]

function Stats() {
  return (
    <section id="stats" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/20 bg-linear-to-br from-primary/10 via-white/60 to-accent/10 p-12 backdrop-blur-lg dark:from-primary/5 dark:via-white/5 dark:to-accent/5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Resultados
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Diseñado para la eficiencia
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: "Inicial",
    price: "Gratis",
    description: "Para administradores que están comenzando",
    features: [
      "Hasta 2 consorcios",
      "Hasta 20 unidades",
      "Liquidaciones mensuales",
      "1 usuario admin",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "$15.000",
    period: "/mes",
    description: "Para administraciones en crecimiento",
    features: [
      "Hasta 10 consorcios",
      "Unidades ilimitadas",
      "Reportes avanzados",
      "5 usuarios",
      "Soporte prioritario",
    ],
    cta: "Elegir plan",
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Para grandes administraciones",
    features: [
      "Consorcios ilimitados",
      "Unidades ilimitadas",
      "API de integración",
      "Usuarios ilimitados",
      "Soporte dedicado",
    ],
    cta: "Contactar",
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Planes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Elegí el plan que se adapte a tu necesidad
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Comenzá gratis y escalá a medida que crece tu cartera de consorcios.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 backdrop-blur-lg transition-all duration-200 ${
                plan.highlighted
                  ? "border-primary/30 bg-white/80 shadow-xl dark:bg-white/10"
                  : "border-white/20 bg-white/60 dark:border-white/10 dark:bg-white/5"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Más popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={`mt-8 block cursor-pointer rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-sm hover:shadow-md"
                    : "border border-border/50 bg-white/50 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-2xl border border-white/20 bg-linear-to-br from-primary/10 via-white/60 to-accent/10 p-16 backdrop-blur-lg dark:from-primary/5 dark:via-white/5 dark:to-accent/5">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Empezá a gestionar tus consorcios hoy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Creá tu cuenta gratis y configurá tu primer consorcio en minutos. Sin tarjeta de crédito.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Crear cuenta gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-white/40 backdrop-blur-md dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <Building2 className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-semibold">ConsorcioApp</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Ingresar
          </Link>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            Hecho en Argentina
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
