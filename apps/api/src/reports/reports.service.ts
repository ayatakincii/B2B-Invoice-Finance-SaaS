import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getRevenueByMonth(organizationId: string) {
    const invoices = await this.prisma.invoice.findMany({
      where: { organizationId, status: 'paid' },
      select: { total: true, createdAt: true },
    });

    const grouped: Record<string, number> = {};
    for (const invoice of invoices) {
      const month = invoice.createdAt.toISOString().slice(0, 7);
      grouped[month] = (grouped[month] || 0) + invoice.total;
    }

    return Object.entries(grouped).map(([month, total]) => ({ month, total }));
  }

  async getInvoiceSummary(organizationId: string) {
    const [paid, outstanding, overdue] = await Promise.all([
      this.prisma.invoice.aggregate({ where: { organizationId, status: 'paid' }, _sum: { total: true }, _count: true }),
      this.prisma.invoice.aggregate({ where: { organizationId, status: 'sent' }, _sum: { total: true }, _count: true }),
      this.prisma.invoice.aggregate({ where: { organizationId, status: 'overdue' }, _sum: { total: true }, _count: true }),
    ]);

    return {
      paid: { total: paid._sum.total || 0, count: paid._count },
      outstanding: { total: outstanding._sum.total || 0, count: outstanding._count },
      overdue: { total: overdue._sum.total || 0, count: overdue._count },
    };
  }

  async getExpenseBreakdown(organizationId: string) {
    const expenses = await this.prisma.expense.findMany({
      where: { organizationId },
      select: { category: true, amount: true },
    });

    const grouped: Record<string, number> = {};
    for (const expense of expenses) {
      grouped[expense.category] = (grouped[expense.category] || 0) + expense.amount;
    }

    return Object.entries(grouped).map(([category, total]) => ({ category, total }));
  }
}