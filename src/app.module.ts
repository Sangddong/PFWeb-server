import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './domain/comments/comments.module';
import { LikesModule } from './domain/likes/likes.module';
import { ViewModule } from './domain/view/view.module';
@Module({
  imports: [
    CommentsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LikesModule,
    ViewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
