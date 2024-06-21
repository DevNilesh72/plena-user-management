import { Controller, Get, Param } from '@nestjs/common';
import { BlockService } from './block.service';

@Controller('block')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get('/block/:id')
  block(@Param('id') id: string) {
    return this.blockService.block(+id);
  }

  @Get('/unblock/:id')
  unblock(@Param('id') id: string) {
    return this.blockService.unblock(+id);
  }
}
