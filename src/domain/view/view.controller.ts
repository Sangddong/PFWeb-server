import { Controller, Get, Post } from '@nestjs/common';
import { ViewService } from './view.service';
import { Cron } from '@nestjs/schedule';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get('today/read')
  async getTodayView() {
    return await this.viewService.getTodayView();
  }

  @Post('today/increment')
  async incrementTodayView() {
    return await this.viewService.incrementTodayView();
  }

  @Get('total/read')
  async getTotalView() {
    return await this.viewService.getTotalView();
  }

  @Post('total/increment')
  async incrementTotalView() {
    return await this.viewService.incrementTotalView();
  }

  @Cron('0 15 * * *')
  async resetTodayView() {
    await this.viewService.resetView();
  }
}
