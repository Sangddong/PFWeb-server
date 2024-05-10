import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('data')
  getData() {
    return { message: 'NestJS Connected' };
  }
}
