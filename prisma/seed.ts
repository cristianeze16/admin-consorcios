import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@consorcioapp.com" },
    update: {},
    create: {
      email: "admin@consorcioapp.com",
      name: "Administrador",
      password: hashedPassword,
      role: "SUPER_ADMIN",
    },
  })

  console.log("Seed completado:")
  console.log(`  Usuario: ${admin.email}`)
  console.log(`  Rol: ${admin.role}`)
  console.log(`  Password: admin123`)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
