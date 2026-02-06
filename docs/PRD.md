# PRD - Admin Consorcios (ConsorcioApp)

## 1. Vision del Producto

**ConsorcioApp** es una plataforma web para la administracion integral de consorcios de propiedad horizontal (edificios, barrios cerrados, complejos). Permite a administradores, empleados, propietarios e inquilinos gestionar unidades funcionales, expensas, pagos, comunicaciones y reclamos desde un unico lugar.

### Problema que resuelve

La administracion de consorcios en Argentina se maneja con herramientas fragmentadas (Excel, WhatsApp, papel). Esto genera:
- Falta de transparencia en las expensas
- Demoras en la comunicacion con propietarios/inquilinos
- Dificultad para hacer seguimiento de pagos y morosidad
- Perdida de informacion de reclamos y asambleas
- Imposibilidad de acceder a informacion en tiempo real

### Propuesta de valor

- **Para administradores**: gestion centralizada de multiples consorcios, liquidacion automatica de expensas, control de morosidad
- **Para propietarios/inquilinos**: acceso a sus expensas, historial de pagos, canal de reclamos y avisos del consorcio
- **Para empleados**: herramientas para registrar gastos, pagos y gestionar reclamos

---

## 2. Usuarios y Roles

### 2.1 SUPER_ADMIN
- **Quien**: Dueño de la plataforma / soporte tecnico
- **Acceso**: Total a todos los modulos y configuracion del sistema
- **Puede**: Todo lo que puede un ADMIN + gestionar configuracion global

### 2.2 ADMIN (Administrador de consorcio)
- **Quien**: Administrador profesional que gestiona uno o mas consorcios
- **Acceso**: Total sobre sus consorcios asignados
- **Puede**: CRUD completo de consorcios, unidades, propietarios, proveedores, gastos, liquidaciones, pagos, comunicaciones, reclamos. Ver reportes.

### 2.3 EMPLEADO
- **Quien**: Personal administrativo que asiste al administrador
- **Acceso**: Limitado a operaciones del dia a dia
- **Puede**: Ver unidades, propietarios, proveedores, comunicaciones. Crear/editar gastos y pagos. Editar reclamos. Ver reportes.

### 2.4 PROPIETARIO
- **Quien**: Dueño de una o mas unidades funcionales
- **Acceso**: Solo lectura de su informacion + crear reclamos
- **Puede**: Ver dashboard personal, su cuenta, liquidaciones, pagos, comunicaciones. Crear reclamos.

### 2.5 INQUILINO
- **Quien**: Persona que alquila una unidad funcional
- **Acceso**: Solo lectura de su informacion + crear reclamos
- **Puede**: Ver dashboard personal, su cuenta, liquidaciones, comunicaciones. Crear reclamos.

---

## 3. Modulos y Features

### 3.1 Autenticacion y Autorizacion

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Login por email/password | MVP | Implementado |
| Hashing de passwords con bcrypt | MVP | Implementado |
| Sesiones JWT via NextAuth v5 | MVP | Implementado |
| Middleware de proteccion de rutas | MVP | Implementado |
| Sistema de permisos por rol (RBAC) | MVP | Implementado |
| Navegacion dinamica segun rol | MVP | Implementado |
| Recuperar password por email | v1.1 | Pendiente |
| Registro de nuevos usuarios (invitacion) | v1.1 | Pendiente |
| OAuth (Google) | v2.0 | Pendiente |
| 2FA | v2.0 | Pendiente |

### 3.2 Dashboard

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Metricas: total consorcios | MVP | Implementado (UI) |
| Metricas: total propietarios | MVP | Implementado (UI) |
| Metricas: recaudacion mensual | MVP | Implementado (UI) |
| Metricas: tasa de morosidad | MVP | Implementado (UI) |
| Actividad reciente | MVP | Implementado (UI) |
| Conectar metricas a datos reales | MVP | Pendiente |
| Graficos de tendencia (ingresos/gastos) | v1.1 | Pendiente |
| Dashboard personalizado por rol | v1.1 | Pendiente |

### 3.3 Consorcios

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de consorcios con busqueda/filtros | MVP | Pendiente |
| Crear nuevo consorcio | MVP | Pendiente |
| Editar consorcio | MVP | Pendiente |
| Eliminar consorcio | MVP | Pendiente |
| Detalle de consorcio con unidades asociadas | MVP | Pendiente |
| Gestion de fondo de reserva | v1.1 | Pendiente |
| Reglamento de copropiedad (upload PDF) | v2.0 | Pendiente |

**Campos del consorcio:**
- Nombre, Direccion, Localidad, Provincia, Codigo Postal
- CUIT (unico), Telefono, Email
- Administrador asignado (User)
- Fondo de reserva (Decimal)

### 3.4 Unidades Funcionales

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de unidades con filtro por consorcio | MVP | Pendiente |
| Crear unidad funcional | MVP | Pendiente |
| Editar unidad | MVP | Pendiente |
| Eliminar unidad | MVP | Pendiente |
| Asignar propietario a unidad | MVP | Pendiente |
| Asignar inquilino a unidad | MVP | Pendiente |
| Ver historial de liquidaciones/pagos por unidad | v1.1 | Pendiente |

**Tipos de unidad:** DEPARTAMENTO, COCHERA, LOCAL, BAULERA

**Campos:**
- Numero, Piso, Tipo, Metros cuadrados
- Coeficiente (usado para calcular proporcion de expensas)
- Consorcio, Propietario (opcional), Inquilino (opcional)

### 3.5 Propietarios

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de propietarios con busqueda | MVP | Pendiente |
| Crear propietario | MVP | Pendiente |
| Editar propietario | MVP | Pendiente |
| Eliminar propietario | MVP | Pendiente |
| Vincular propietario con cuenta de usuario | MVP | Pendiente |
| Ver unidades asociadas | MVP | Pendiente |
| Ver estado de cuenta (deuda/pagos) | v1.1 | Pendiente |

**Campos:** Nombre, Apellido, DNI (unico), Email, Telefono, Direccion, Usuario vinculado (opcional)

### 3.6 Inquilinos

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de inquilinos | MVP | Pendiente |
| Crear inquilino con datos de contrato | MVP | Pendiente |
| Editar inquilino | MVP | Pendiente |
| Eliminar inquilino | MVP | Pendiente |
| Vincular inquilino con cuenta de usuario | MVP | Pendiente |
| Alertas de vencimiento de contrato | v1.1 | Pendiente |

**Campos:** Nombre, Apellido, DNI (unico), Email, Telefono, Fecha inicio contrato, Fecha fin contrato, URL contrato, Usuario vinculado (opcional)

### 3.7 Proveedores

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de proveedores con busqueda | MVP | Pendiente |
| Crear proveedor | MVP | Pendiente |
| Editar proveedor | MVP | Pendiente |
| Eliminar proveedor | MVP | Pendiente |
| Ver gastos asociados al proveedor | v1.1 | Pendiente |

**Campos:** Nombre, CUIT (unico), Telefono, Email, Direccion, Rubro

### 3.8 Gastos

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de gastos con filtros (consorcio, tipo, categoria, fecha) | MVP | Pendiente |
| Registrar gasto | MVP | Pendiente |
| Editar gasto | MVP | Pendiente |
| Eliminar gasto | MVP | Pendiente |
| Asociar gasto a proveedor | MVP | Pendiente |
| Asociar gasto a liquidacion | MVP | Pendiente |
| Upload de comprobante | v1.1 | Pendiente |
| Gastos recurrentes (automaticos) | v2.0 | Pendiente |

**Tipos:** ORDINARIO, EXTRAORDINARIO

**Categorias:** LIMPIEZA, MANTENIMIENTO, SEGUROS, SERVICIOS, SUELDOS, IMPUESTOS, REPARACIONES, ADMINISTRACION, OTROS

**Campos:** Descripcion, Monto, Fecha, Tipo, Categoria, Comprobante URL, Consorcio, Proveedor (opcional), Liquidacion (opcional)

### 3.9 Liquidaciones (Expensas)

Este es el modulo core del sistema. Una liquidacion representa las expensas mensuales de un consorcio.

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de liquidaciones por consorcio/periodo | MVP | Pendiente |
| Generar liquidacion mensual | MVP | Pendiente |
| Calculo automatico por coeficiente de unidad | MVP | Pendiente |
| Detalle por unidad (monto ordinario + extraordinario) | MVP | Pendiente |
| Marcar estado de pago por unidad | MVP | Pendiente |
| Calculo de intereses por mora | v1.1 | Pendiente |
| Exportar liquidacion a PDF | v1.1 | Pendiente |
| Envio automatico por email a propietarios | v2.0 | Pendiente |

**Flujo de liquidacion:**
1. Admin selecciona consorcio y periodo (mes/año)
2. Sistema lista todos los gastos del periodo no liquidados
3. Calcula total ordinario y extraordinario
4. Distribuye proporcionalmente por coeficiente de cada unidad
5. Genera DetalleLiquidacion por cada unidad con montos desglosados
6. Admin revisa y confirma
7. Propietarios pueden ver su detalle desde su portal

**Estados de pago por unidad:** PENDIENTE, PAGADO, PARCIAL, VENCIDO

### 3.10 Pagos

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de pagos con filtros | MVP | Pendiente |
| Registrar pago manual | MVP | Pendiente |
| Asociar pago a detalle de liquidacion | MVP | Pendiente |
| Actualizacion automatica del estado de pago | MVP | Pendiente |
| Historial de pagos por unidad | MVP | Pendiente |
| Upload de comprobante de pago | v1.1 | Pendiente |
| Integracion con MercadoPago | v2.0 | Pendiente |
| Recibos de pago automaticos | v2.0 | Pendiente |

**Metodos de pago:** EFECTIVO, TRANSFERENCIA, MERCADOPAGO, CHEQUE, OTRO

**Campos:** Monto, Fecha, Metodo de pago, Referencia, Comprobante URL, Unidad, Detalle de liquidacion (opcional)

### 3.11 Comunicaciones

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de avisos/circulares | MVP | Pendiente |
| Crear comunicacion/aviso | MVP | Pendiente |
| Editar comunicacion | MVP | Pendiente |
| Eliminar comunicacion | MVP | Pendiente |
| Propietarios/inquilinos ven avisos de su consorcio | MVP | Pendiente |
| Notificaciones por email | v2.0 | Pendiente |
| Notificaciones push | v2.0 | Pendiente |

**Campos:** Titulo, Contenido, Fecha, Consorcio

### 3.12 Reclamos

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de reclamos con filtro por estado | MVP | Pendiente |
| Crear reclamo (propietario/inquilino) | MVP | Pendiente |
| Responder reclamo (admin/empleado) | MVP | Pendiente |
| Cambiar estado del reclamo | MVP | Pendiente |
| Historial de reclamos por unidad | v1.1 | Pendiente |
| Adjuntar imagenes al reclamo | v2.0 | Pendiente |

**Estados:** ABIERTO, EN_PROGRESO, RESUELTO, CERRADO

**Campos:** Titulo, Descripcion, Estado, Unidad, Respuesta

### 3.13 Asambleas

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Listado de asambleas | v1.1 | Pendiente |
| Crear asamblea con orden del dia | v1.1 | Pendiente |
| Registrar acta de asamblea | v1.1 | Pendiente |
| Notificar a propietarios | v2.0 | Pendiente |
| Votacion online | v2.0 | Pendiente |

**Campos:** Titulo, Fecha, Orden del dia, Acta, Consorcio

### 3.14 Reportes

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Reporte de morosidad | v1.1 | Pendiente |
| Reporte de ingresos vs gastos | v1.1 | Pendiente |
| Reporte de gastos por categoria | v1.1 | Pendiente |
| Reporte de recaudacion mensual | v1.1 | Pendiente |
| Exportar reportes a PDF/Excel | v2.0 | Pendiente |

### 3.15 Configuracion

| Feature | Prioridad | Estado |
|---------|-----------|--------|
| Gestionar usuarios del sistema | MVP | Pendiente |
| Asignar roles a usuarios | MVP | Pendiente |
| Activar/desactivar usuarios | MVP | Pendiente |
| Configuracion de interes por mora | v1.1 | Pendiente |
| Personalizar categorias de gastos | v2.0 | Pendiente |

---

## 4. Arquitectura Tecnica

### Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript 5 |
| Auth | NextAuth v5 (beta) + bcryptjs |
| Base de datos | PostgreSQL + Prisma ORM |
| UI | shadcn/ui + Radix UI + Tailwind CSS v4 |
| Formularios | React Hook Form + Zod |
| Iconos | Lucide React |
| Notificaciones | Sonner (toasts) |

### Estructura del proyecto

```
src/
├── app/
│   ├── (auth)/              # Rutas de autenticacion
│   │   └── login/
│   ├── (dashboard)/         # Rutas protegidas
│   │   ├── dashboard/
│   │   ├── consorcios/
│   │   ├── unidades/
│   │   ├── propietarios/
│   │   ├── proveedores/
│   │   ├── gastos/
│   │   ├── liquidaciones/
│   │   ├── pagos/
│   │   ├── comunicaciones/
│   │   └── reclamos/
│   └── api/auth/
├── components/
│   ├── ui/                  # shadcn/ui (20+ componentes)
│   ├── app-sidebar.tsx
│   └── providers.tsx
├── lib/
│   ├── auth.ts             # Config NextAuth
│   ├── prisma.ts           # Singleton Prisma
│   ├── permissions.ts      # RBAC
│   └── utils.ts
├── hooks/
├── types/
└── middleware.ts            # Proteccion de rutas
```

### Modelos de Base de Datos

```
User ──< Consorcio ──< UnidadFuncional ──< DetalleLiquidacion ──< Pago
                    │                   ├── Propietario
                    │                   ├── Inquilino
                    │                   └── Reclamo
                    ├── Gasto ──> Proveedor
                    ├── Liquidacion ──< DetalleLiquidacion
                    ├── Comunicacion
                    └── Asamblea
```

---

## 5. Roadmap

### MVP (v1.0)

Objetivo: Sistema funcional para un administrador gestionando consorcios.

1. **Auth completo** - Login, proteccion de rutas, RBAC (HECHO)
2. **CRUD Consorcios** - Alta, baja, modificacion, listado
3. **CRUD Unidades** - Con asignacion de propietario/inquilino
4. **CRUD Propietarios e Inquilinos**
5. **CRUD Proveedores**
6. **Gestion de Gastos** - Registro con tipo, categoria, proveedor
7. **Liquidaciones** - Generacion mensual con calculo por coeficiente
8. **Registro de Pagos** - Con actualizacion de estado
9. **Comunicaciones** - CRUD de avisos
10. **Reclamos** - Crear y gestionar
11. **Dashboard con datos reales**
12. **Gestion de usuarios** (Configuracion)

### v1.1

- Reportes basicos (morosidad, ingresos/gastos)
- Intereses por mora
- Asambleas
- Exportar liquidaciones a PDF
- Alertas de vencimiento de contrato
- Graficos en dashboard

### v2.0

- Integracion MercadoPago
- Notificaciones email/push
- OAuth (Google)
- 2FA
- Upload de comprobantes
- Gastos recurrentes
- App mobile (React Native o PWA)

---

## 6. Requerimientos No Funcionales

### Seguridad
- Passwords hasheados con bcrypt (salt rounds: 12)
- Sesiones JWT con expiracion
- Proteccion CSRF via NextAuth
- Validacion de inputs con Zod en servidor y cliente
- Sanitizacion de datos contra XSS/SQL injection (Prisma parameterized queries)

### Performance
- Server-side rendering con React Server Components
- Paginacion en listados (evitar cargar todos los registros)
- Indices en base de datos para queries frecuentes
- Lazy loading de componentes pesados

### UX
- Diseño responsive (mobile-first)
- Dark mode
- Feedback inmediato con toasts (Sonner)
- Formularios con validacion en tiempo real
- Sidebar colapsable con soporte mobile

### Escalabilidad
- Multi-tenancy: un admin puede gestionar N consorcios
- Modelo de datos soporta crecimiento sin cambios estructurales
- PostgreSQL como DB relacional robusta
- Prisma para migraciones controladas

---

## 7. Metricas de Exito

| Metrica | Objetivo MVP |
|---------|-------------|
| Consorcios gestionados por admin | >= 1 |
| Liquidaciones generadas correctamente | 100% accuracy en calculo |
| Tiempo para generar liquidacion | < 30 segundos |
| Tasa de adopcion de propietarios | >= 50% acceden al portal |
| Reclamos respondidos en < 48hs | >= 80% |

---

## 8. Glosario

| Termino | Descripcion |
|---------|-------------|
| **Consorcio** | Entidad juridica que agrupa a propietarios de un edificio o complejo |
| **Unidad Funcional** | Cada departamento, cochera, local o baulera dentro del consorcio |
| **Coeficiente** | Porcentaje que determina cuanto paga cada unidad de las expensas totales |
| **Expensas** | Gastos comunes del edificio que se distribuyen entre propietarios |
| **Liquidacion** | Documento mensual que detalla los gastos y el monto a pagar por cada unidad |
| **Gasto Ordinario** | Gastos recurrentes y de mantenimiento regular |
| **Gasto Extraordinario** | Gastos no habituales (reparaciones mayores, mejoras) |
| **Fondo de Reserva** | Ahorro del consorcio para emergencias y gastos futuros |
| **Mora** | Interes que se aplica a pagos vencidos |
| **Asamblea** | Reunion de propietarios para tomar decisiones sobre el consorcio |
