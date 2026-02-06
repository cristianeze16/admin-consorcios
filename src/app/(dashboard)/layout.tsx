import { AppSidebar } from "@/components/app-sidebar"
import { Providers } from "@/components/providers"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border/40 bg-white/40 px-4 backdrop-blur-md dark:bg-white/5">
            <SidebarTrigger className="-ml-1 cursor-pointer" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-sm font-medium text-muted-foreground">Admin Consorcios</h1>
          </header>
          <main className="relative flex-1 p-6">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative">{children}</div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </Providers>
  )
}
