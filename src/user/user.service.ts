import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  search(searchUserDto: SearchUserDto) {
    if (Object.keys(searchUserDto).length === 0) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'Serch parameter not provided',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: searchUserDto.username,
            },
          },
          {
            age: {
              gte: searchUserDto.minage || 0,
              lte: searchUserDto.maxage || 1000,
            },
          },
        ],
        blocked : false,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
