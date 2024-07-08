import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCommentsDto, DeleteCommentsDto } from './comments.dto';

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
  async updateComment(@Body() data: DeleteCommentsDto) {
    return await this.commentsService.deleteComment(data);
  }

  @Get()
  async getComments(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    return await this.commentsService.getComments(page, limit);
  }

  @Get('count')
  async getTotalComment() {
    return await this.commentsService.getTotalComments();
  }
}
