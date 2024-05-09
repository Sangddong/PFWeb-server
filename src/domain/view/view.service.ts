import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ViewService {
  constructor(private readonly prismaService: PrismaService) {}

  async incrementTodayView() {
    const todayView = await this.prismaService.view.findUnique({
      where: { id: 1 },
      select: { todayView: true },
    });

    if (!todayView) {
      return await this.prismaService.view.create({ data: { todayView: 1 } });
    } else {
      return await this.prismaService.view.update({
        where: { id: 1 },
        data: { todayView: todayView.todayView + 1 },
      });
    }
  }

  async incrementTotalView() {
    const totalView = await this.prismaService.view.findUnique({
      where: { id: 1 },
      select: { totalView: true },
    });

    if (!totalView) {
      return await this.prismaService.view.create({
        data: { totalView: 1 },
      });
    } else {
      return await this.prismaService.view.update({
        where: { id: 1 },
        data: { totalView: totalView.totalView + 1 },
      });
    }
  }

  async incrementView() {
    await this.incrementTodayView();
    await this.incrementTotalView();

    return await this.prismaService.view.findUnique({
      where: { id: 1 },
      select: { totalView: true, todayView: true },
    });
  }

  async resetView() {
    return await this.prismaService.view.upsert({
      where: { id: 1 },
      create: { totalView: 0, todayView: 0 },
      update: { todayView: 0 },
    });
  }
}
