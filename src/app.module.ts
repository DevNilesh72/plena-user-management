import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlockModule } from './block/block.module';

@Module({
  imports: [UserModule, PrismaModule, BlockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
