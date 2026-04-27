import { Controller, Get, Post, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('expenses')
@UseGuards(JwtAuthGuard)
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Post()
  create(@CurrentUser() user: any, @Body() body: {
    category: string;
    amount: number;
    date: string;
    receiptUrl?: string;
  }) {
    return this.expensesService.create(user.organizationId, body);
  }

  @Get()
  findAll(@CurrentUser() user: any, @Query('category') category?: string) {
    return this.expensesService.findAll(user.organizationId, category);
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id') id: string) {
    return this.expensesService.findOne(user.organizationId, id);
  }

  @Delete(':id')
  remove(@CurrentUser() user: any, @Param('id') id: string) {
    return this.expensesService.remove(user.organizationId, id);
  }
}