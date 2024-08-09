import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './domain/comments/comments.module';
import { LikesModule } from './domain/likes/likes.module';
import { ViewModule } from './domain/view/view.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ApiController } from './api/api.controller';
import { HealthCheckModule } from './domain/health-check/health-check.module';
@Module({
  imports: [
    CommentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LikesModule,
    ViewModule,
    ScheduleModule.forRoot(),
    HealthCheckModule,
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
