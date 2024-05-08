import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [LikesController],
  providers: [LikesService],
  exports: [LikesService],
  imports: [PrismaModule, ConfigModule],
})
export class LikesModule {}
