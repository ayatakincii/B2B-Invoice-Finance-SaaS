import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('revenue')
  getRevenue(@CurrentUser() user: any) {
    return this.reportsService.getRevenueByMonth(user.organizationId);
  }

  @Get('invoices')
  getInvoiceSummary(@CurrentUser() user: any) {
    return this.reportsService.getInvoiceSummary(user.organizationId);
  }

  @Get('expenses')
  getExpenseBreakdown(@CurrentUser() user: any) {
    return this.reportsService.getExpenseBreakdown(user.organizationId);
  }
}