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
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="text-lg font-bold">ConsorcioApp</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navMain.map((group) => {
          const visibleItems = group.items.filter((item) =>
            hasPermission(role, item.module, "view")
          )
          if (visibleItems.length === 0) return null
          return (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {visibleItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={pathname === item.url}>
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
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-3 px-2 py-1.5">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <p className="text-sm font-medium truncate">{session?.user?.name}</p>
                <p className="text-xs text-muted-foreground truncate">{role}</p>
              </div>
            </div>
          </SidebarMenuItem>
          {hasPermission(role, "configuracion", "view") && (
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/configuracion">
                  <Settings className="h-4 w-4" />
                  <span>Configuración</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => signOut({ callbackUrl: "/login" })}>
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
