import { prisma } from '@/lib/prisma'

export const findTodoById = async (id: string) => {
  return prisma.todo.findUnique({
    where: { id },
  })
}