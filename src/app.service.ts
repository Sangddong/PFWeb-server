import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello = 'Hello from Nest.js!';
    const client = process.env.CORS_ORIGIN;
    return hello + client;
  }
}
