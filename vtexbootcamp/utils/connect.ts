// utils/connect.ts
import { PrismaClient } from "@/lib/generated/prisma"; // 👈 Usa la ruta personalizada correcta

declare global {
  // Permite reutilizar el cliente Prisma en desarrollo
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
