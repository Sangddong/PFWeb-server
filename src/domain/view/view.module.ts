import { Module } from '@nestjs/common';
import { ViewService } from './view.service';
import { ViewController } from './view.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [ViewController],
  providers: [ViewService],
  exports: [ViewService],
  imports: [PrismaModule, ConfigModule],
})
export class ViewModule {}
