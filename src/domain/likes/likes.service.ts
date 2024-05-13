import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getLike() {
    return await this.getLikeRecord();
  }

  async like() {
    const likeRecord = await this.getLikeRecord();

    const updatedLikes = await this.prismaService.like.update({
      where: { id: 1 },
      data: { likes: likeRecord.likes + 1 },
      select: { likes: true },
    });

    return updatedLikes;
  }

  async cancelLike() {
    const likeRecord = await this.getLikeRecord();

    const updatedLikes = await this.prismaService.like.update({
      where: { id: 1 },
      data: { likes: likeRecord.likes - 1 },
      select: { likes: true },
    });

    return updatedLikes;
  }

  async getLikeRecord() {
    const likeRecord = await this.prismaService.like.findUnique({
      where: { id: 1 },
      select: { likes: true },
    });

    if (likeRecord) return likeRecord;
    else {
      return await this.prismaService.like.create({
        data: { likes: 0 },
      });
    }
  }
}
