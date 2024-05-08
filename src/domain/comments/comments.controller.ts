import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCommentsDto } from './comments.dto';

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
}
