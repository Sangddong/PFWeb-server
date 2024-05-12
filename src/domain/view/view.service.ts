import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ViewService {
  constructor(private readonly prismaService: PrismaService) {}

  // 조회수만 읽는 메서드
  async getTodayView() {
    const view = await this.prismaService.view.findUnique({
      where: { id: 1 },
      select: { todayView: true },
    });
    return view ? view.todayView : 0;
  }

  async getTotalView() {
    const view = await this.prismaService.view.findUnique({
      where: { id: 1 },
      select: { totalView: true },
    });
    return view ? view.totalView : 0;
  }

  // 조회수를 증가시키는 메서드
  async incrementTodayView() {
    const todayView = await this.getTodayView();
    return await this.prismaService.view.update({
      where: { id: 1 },
      data: { todayView: todayView + 1 },
    });
  }

  async incrementTotalView() {
    const totalView = await this.getTotalView();
    return await this.prismaService.view.update({
      where: { id: 1 },
      data: { totalView: totalView + 1 },
    });
  }

  // 조회수 초기화
  async resetView() {
    return await this.prismaService.view.upsert({
      where: { id: 1 },
      create: { todayView: 0, totalView: 0 },
      update: { todayView: 0, totalView: 0 },
    });
  }
}
