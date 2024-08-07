import { Controller, Get } from '@nestjs/common';
import { ViewService } from './view.service';
import { Cron } from '@nestjs/schedule';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get()
  async getView() {
    return await this.viewService.getView();
  }

  @Cron('0 0 15 * * *')
  async resetTodayView() {
    await this.viewService.resetView();
  }
}
