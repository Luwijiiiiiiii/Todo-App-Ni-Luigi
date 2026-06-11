import { PrismaClient } from '@prisma/client'

declare global {
  // Allow global `var` for hot-reload in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'], // optional but useful
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}