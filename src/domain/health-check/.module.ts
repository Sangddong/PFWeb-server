import { Module } from '@nestjs/common';
import { HealthCheckController } from './.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [HealthCheckController],
  imports: [TerminusModule, HttpModule],
  exports: [HealthCheckController],
})
export class HealthCheckModule {}
