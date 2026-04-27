import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(organizationId: string, data: { name: string; email: string; address?: string }) {
    return this.prisma.client.create({
      data: { ...data, organizationId },
    });
  }

  findAll(organizationId: string) {
    return this.prisma.client.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(organizationId: string, id: string) {
    return this.prisma.client.findFirst({
      where: { id, organizationId },
    });
  }

  update(organizationId: string, id: string, data: { name?: string; email?: string; address?: string }) {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }

  remove(organizationId: string, id: string) {
    return this.prisma.client.delete({
      where: { id },
    });
  }
}