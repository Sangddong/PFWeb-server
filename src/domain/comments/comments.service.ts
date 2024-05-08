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
    await this.findComment(data.id);
    await this.checkPassword(data.id, data.password);

    await this.prismaService.comment.update({
      where: { id: data.id },
      data,
    });
  }

  //댓글 삭제 기능
  async deleteComment(data: DeleteCommentsDto) {
    await this.findComment(data.id);
    await this.checkPassword(data.id, data.password);

    await this.prismaService.comment.delete({
      where: { id: data.id },
    });
  }

  //댓글 존재 확인
  async findComment(commentId: number) {
    const comment = await this.prismaService.comment.findUnique({
      where: { id: commentId },
      select: { password: true },
    });

    if (!comment) throw new Error('not existing comment');

    return comment;
  }

  //패스워드 일치 검사
  async checkPassword(commentId: number, commentPassword: string) {
    const comment = await this.findComment(commentId);

    if (comment.password !== commentPassword) throw new Error('wrong password');
  }
}
