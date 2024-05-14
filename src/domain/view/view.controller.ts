import { Controller, Get, Post } from '@nestjs/common';
import { ViewService } from './view.service';
import { Cron } from '@nestjs/schedule';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get('today')
  async getTodayView() {
    return await this.viewService.getTodayView();
  }

  @Get('total')
  async getTotalView() {
    return await this.viewService.getTotalView();
  }

  @Cron('6 16 * * *')
  async resetTodayView() {
    await this.viewService.resetView();
  }
}
