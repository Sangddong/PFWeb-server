import { Controller, Get } from '@nestjs/common';
import { ViewService } from './view.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get()
  async incrementView() {
    return await this.viewService.incrementView();
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async resetTodayView() {
    await this.viewService.resetView();
  }
}
