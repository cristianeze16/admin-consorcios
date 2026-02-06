import { UserRole } from "@prisma/client"

export type Action = "view" | "create" | "edit" | "delete"

export type Module =
  | "dashboard"
  | "consorcios"
  | "unidades"
  | "propietarios"
  | "proveedores"
  | "gastos"
  | "liquidaciones"
  | "pagos"
  | "comunicaciones"
  | "reclamos"
  | "reportes"
  | "configuracion"
  | "mi-cuenta"

type PermissionMap = Record<UserRole, Partial<Record<Module, Action[]>>>

const PERMISSIONS: PermissionMap = {
  SUPER_ADMIN: {
    dashboard: ["view"],
    consorcios: ["view", "create", "edit", "delete"],
    unidades: ["view", "create", "edit", "delete"],
    propietarios: ["view", "create", "edit", "delete"],
    proveedores: ["view", "create", "edit", "delete"],
    gastos: ["view", "create", "edit", "delete"],
    liquidaciones: ["view", "create", "edit", "delete"],
    pagos: ["view", "create", "edit", "delete"],
    comunicaciones: ["view", "create", "edit", "delete"],
    reclamos: ["view", "create", "edit", "delete"],
    reportes: ["view"],
    configuracion: ["view", "edit"],
    "mi-cuenta": ["view", "edit"],
  },
  ADMIN: {
    dashboard: ["view"],
    consorcios: ["view", "create", "edit", "delete"],
    unidades: ["view", "create", "edit", "delete"],
    propietarios: ["view", "create", "edit", "delete"],
    proveedores: ["view", "create", "edit", "delete"],
    gastos: ["view", "create", "edit", "delete"],
    liquidaciones: ["view", "create", "edit", "delete"],
    pagos: ["view", "create", "edit", "delete"],
    comunicaciones: ["view", "create", "edit", "delete"],
    reclamos: ["view", "create", "edit", "delete"],
    reportes: ["view"],
    configuracion: ["view", "edit"],
    "mi-cuenta": ["view", "edit"],
  },
  EMPLEADO: {
    dashboard: ["view"],
    unidades: ["view"],
    propietarios: ["view"],
    proveedores: ["view"],
    gastos: ["view", "create", "edit"],
    pagos: ["view", "create"],
    comunicaciones: ["view"],
    reclamos: ["view", "edit"],
    reportes: ["view"],
    "mi-cuenta": ["view", "edit"],
  },
  PROPIETARIO: {
    dashboard: ["view"],
    "mi-cuenta": ["view", "edit"],
    reclamos: ["view", "create"],
    comunicaciones: ["view"],
    pagos: ["view"],
    liquidaciones: ["view"],
  },
  INQUILINO: {
    dashboard: ["view"],
    "mi-cuenta": ["view", "edit"],
    reclamos: ["view", "create"],
    comunicaciones: ["view"],
    liquidaciones: ["view"],
  },
}

export function hasPermission(
  role: UserRole,
  module: Module,
  action: Action
): boolean {
  const rolePermissions = PERMISSIONS[role]
  if (!rolePermissions) return false
  const moduleActions = rolePermissions[module]
  if (!moduleActions) return false
  return moduleActions.includes(action)
}

export function getModulesForRole(role: UserRole): Module[] {
  const rolePermissions = PERMISSIONS[role]
  if (!rolePermissions) return []
  return Object.keys(rolePermissions) as Module[]
}

export function isAdmin(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "ADMIN"
}

export function isStaff(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "ADMIN" || role === "EMPLEADO"
}
