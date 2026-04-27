import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  create(organizationId: string, data: {
    clientId: string;
    dueDate: string;
    items: { description: string; qty: number; unitPrice: number }[];
  }) {
    const total = data.items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);

    return this.prisma.invoice.create({
      data: {
        organizationId,
        clientId: data.clientId,
        dueDate: new Date(data.dueDate),
        total,
        items: {
          create: data.items,
        },
      },
      include: { items: true, client: true },
    });
  }

  findAll(organizationId: string) {
    return this.prisma.invoice.findMany({
      where: { organizationId },
      include: { client: true, items: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(organizationId: string, id: string) {
    return this.prisma.invoice.findFirst({
      where: { id, organizationId },
      include: { client: true, items: true, payment: true },
    });
  }

  updateStatus(organizationId: string, id: string, status: string) {
    return this.prisma.invoice.update({
      where: { id },
      data: { status },
    });
  }

  remove(organizationId: string, id: string) {
    return this.prisma.invoice.delete({
      where: { id },
    });
  }
}