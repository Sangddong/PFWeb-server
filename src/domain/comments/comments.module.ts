import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { ConfigModule } from '@nestjs/config/dist';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
  imports: [PrismaModule, ConfigModule],
})
export class CommentsModule {}
