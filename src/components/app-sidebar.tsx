"use client"

import {
  Building2,
  Home,
  Users,
  DoorOpen,
  Receipt,
  CreditCard,
  Wallet,
  Truck,
  Megaphone,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { type UserRole } from "@prisma/client"
import { hasPermission, type Module } from "@/lib/permissions"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const navMain = [
  {
    title: "General",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: Home, module: "dashboard" as Module },
      { title: "Consorcios", url: "/consorcios", icon: Building2, module: "consorcios" as Module },
    ],
  },
  {
    title: "Gestión",
    items: [
      { title: "Unidades", url: "/unidades", icon: DoorOpen, module: "unidades" as Module },
      { title: "Propietarios", url: "/propietarios", icon: Users, module: "propietarios" as Module },
      { title: "Proveedores", url: "/proveedores", icon: Truck, module: "proveedores" as Module },
    ],
  },
  {
    title: "Finanzas",
    items: [
      { title: "Gastos", url: "/gastos", icon: Receipt, module: "gastos" as Module },
      { title: "Liquidaciones", url: "/liquidaciones", icon: Wallet, module: "liquidaciones" as Module },
      { title: "Pagos", url: "/pagos", icon: CreditCard, module: "pagos" as Module },
    ],
  },
  {
    title: "Comunicación",
    items: [
      { title: "Avisos", url: "/comunicaciones", icon: Megaphone, module: "comunicaciones" as Module },
      { title: "Reclamos", url: "/reclamos", icon: MessageSquare, module: "reclamos" as Module },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const role = (session?.user?.role ?? "PROPIETARIO") as UserRole

  const initials = session?.user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) ?? "?"

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border px-6 py-5">
        <Link href="/dashboard" className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <Building2 className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">ConsorcioApp</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        {navMain.map((group) => {
          const visibleItems = group.items.filter((item) =>
            hasPermission(role, item.module, "view")
          )
          if (visibleItems.length === 0) return null
          return (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/40">
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {visibleItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        className="cursor-pointer rounded-lg transition-all duration-150"
                      >
                        <Link href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-2.5">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-sidebar-primary text-xs text-sidebar-primary-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <p className="text-sm font-medium truncate text-sidebar-foreground">{session?.user?.name}</p>
                <p className="text-xs truncate text-sidebar-foreground/50">{role}</p>
              </div>
            </div>
          </SidebarMenuItem>
          {hasPermission(role, "configuracion", "view") && (
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="cursor-pointer rounded-lg transition-all duration-150">
                <Link href="/configuracion">
                  <Settings className="h-4 w-4" />
                  <span>Configuración</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="cursor-pointer rounded-lg transition-all duration-150 hover:text-red-400"
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
