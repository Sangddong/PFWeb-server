import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCommentsDto, DeleteCommentsDto } from './comments.dto';
import * as bcrypt from 'bcrypt';

import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  //댓글 작성 기능
  async createComment(data: CreateCommentsDto) {
    const hash = bcrypt.hashSync(data.password, 10);
    const now = dayjs().tz('Asia/Seoul').format().replace('+09:00', 'Z');
    const newData = { ...data, password: hash, createdAt: now };

    await this.prismaService.comment.create({ data: newData });
  }

  //댓글 삭제 기능
  async deleteComment(data: DeleteCommentsDto) {
    const checkPassword = await this.checkPassword(data.id, data.password);

    if (!checkPassword) return false;

    await this.prismaService.comment.update({
      where: { id: data.id },
      data: { isDeleted: true },
    });
    return true;
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
    const checked = bcrypt.compare(commentPassword, comment.password);

    return checked;
  }

  //댓글 개수 반환
  async countComments() {
    return await this.prismaService.comment.count({
      where: { isDeleted: false },
    });
  }

  //댓글 반환 기능 (페이지네이션)
  async getComments(page: number, limit: number) {
    const take = Math.max(limit, 1);
    const skip = (page - 1) * take;

    const comments = await this.prismaService.comment.findMany({
      where: { isDeleted: false },
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    });
    return comments;
  }

  async getTotalComments() {
    return await this.prismaService.comment.count({
      where: { isDeleted: false },
    });
  }
}
