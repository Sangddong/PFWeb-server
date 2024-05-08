import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import {
  CreateCommentsDto,
  DeleteCommentsDto,
  UpdateCommentsDto,
} from './comments.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  //댓글 작성 기능
  async createComment(data: CreateCommentsDto) {
    await this.prismaService.comment.create({ data });
  }

  //댓글 수정 기능
  async editComment(data: UpdateCommentsDto) {
    await this.prismaService.comment.update({
      where: { id: data.id },
      data,
    });
  }

  //댓글 삭제 기능
  async deleteComment(data: DeleteCommentsDto) {
    await this.prismaService.comment.delete({
      where: { id: data.id },
    });
  }
}
