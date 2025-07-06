import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/database/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  getHello(): string {
    return "HELLO";
  }
}
