import { Controller, Get, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  async getLikes() {
    return await this.likesService.getLikeRecord();
  }

  @Post('like')
  async like() {
    return await this.likesService.like();
  }

  @Post('cancelLike')
  async cancelLike() {
    return await this.likesService.cancelLike();
  }
}
