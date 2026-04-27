import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  create(organizationId: string, data: {
    category: string;
    amount: number;
    date: string;
    receiptUrl?: string;
  }) {
    return this.prisma.expense.create({
      data: {
        ...data,
        date: new Date(data.date),
        organizationId,
      },
    });
  }

  findAll(organizationId: string, category?: string) {
    return this.prisma.expense.findMany({
      where: {
        organizationId,
        ...(category ? { category } : {}),
      },
      orderBy: { date: 'desc' },
    });
  }

  findOne(organizationId: string, id: string) {
    return this.prisma.expense.findFirst({
      where: { id, organizationId },
    });
  }

  remove(organizationId: string, id: string) {
    return this.prisma.expense.delete({
      where: { id },
    });
  }
}