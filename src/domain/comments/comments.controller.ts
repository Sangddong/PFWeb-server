import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import {
  CreateCommentsDto,
  DeleteCommentsDto,
  UpdateCommentsDto,
} from './comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  async createComment(@Body() data: CreateCommentsDto) {
    await this.commentsService.createComment(data);
  }

  @Patch()
  async updateComment(@Body() data: UpdateCommentsDto | DeleteCommentsDto) {
    if (UpdateCommentsDto) await this.commentsService.editComment(data);
    else await this.commentsService.deleteComment(data);
  }

  @Get()
  async showComments() {
    return await this.commentsService.getComments();
  }
}
