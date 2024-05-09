import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './domain/comments/comments.module';
import { LikesModule } from './domain/likes/likes.module';
import { ViewModule } from './domain/view/view.module';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    CommentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LikesModule,
    ViewModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
