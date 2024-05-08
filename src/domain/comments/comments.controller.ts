import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import {
  CreateCommentsDto,
  DeleteCommentsDto,
  UpdateCommentsDto,
} from './comments.dto';

@Controller()
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  createComment(@Body() data: CreateCommentsDto) {
    this.commentsService.createComment(data);
  }

  @Patch()
  updateComment(@Body() data: UpdateCommentsDto) {
    this.commentsService.editComment(data);
  }

  @Delete()
  deleteComment(@Body() data: DeleteCommentsDto) {
    this.commentsService.deleteComment(data);
  }
}
