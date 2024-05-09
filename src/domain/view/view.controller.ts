import { Controller, Get } from '@nestjs/common';
import { ViewService } from './view.service';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get()
  async incrementView() {
    return await this.viewService.incrementView();
  }
}
