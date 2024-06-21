import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlockService {
  constructor(private prisma: PrismaService) {}
  block(id: number) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        blocked: true,
      },
    });
  }

  unblock(id: number) {
    return this.prisma.user.update({
        where: {
          id,
        },
        data: {
          blocked: false,
        },
      });
  }
}
