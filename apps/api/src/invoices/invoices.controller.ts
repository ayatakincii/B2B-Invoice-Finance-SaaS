import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Post()
  create(@CurrentUser() user: any, @Body() body: {
    clientId: string;
    dueDate: string;
    items: { description: string; qty: number; unitPrice: number }[];
  }) {
    return this.invoicesService.create(user.organizationId, body);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.invoicesService.findAll(user.organizationId);
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id') id: string) {
    return this.invoicesService.findOne(user.organizationId, id);
  }

  @Put(':id/status')
  updateStatus(@CurrentUser() user: any, @Param('id') id: string, @Body() body: { status: string }) {
    return this.invoicesService.updateStatus(user.organizationId, id, body.status);
  }

  @Delete(':id')
  remove(@CurrentUser() user: any, @Param('id') id: string) {
    return this.invoicesService.remove(user.organizationId, id);
  }
}