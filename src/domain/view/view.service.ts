import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ViewService {
  constructor(private readonly prismaService: PrismaService) {}

  // 조회수만 읽는 메서드
  async getTodayView() {
    return await this.prismaService.view.upsert({
      where: { id: 1 },
      create: { todayView: 1 },
      update: { todayView: { increment: 1 } },
    });
  }

  async getTotalView() {
    return await this.prismaService.view.upsert({
      where: { id: 1 },
      create: { totalView: 1 },
      update: { totalView: { increment: 1 } },
    });
  }

  // 조회수 초기화
  async resetView() {
    return await this.prismaService.view.upsert({
      where: { id: 1 },
      create: { todayView: 0, totalView: 0 },
      update: { todayView: 0 },
    });
  }
}
