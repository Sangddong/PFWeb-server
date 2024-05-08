import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCommentsDto } from './comments.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  //댓글 작성 기능
  async createComment(data: CreateCommentsDto) {
    await this.prismaService.comment.create({ data });
  }

  //댓글 수정 기능

  //댓글 삭제 기능
}
