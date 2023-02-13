import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './typeorm-ex.module';
import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardRepository } from './board.repository';

@Module({
  imports: [
    TypeOrmExModule.forFe
    // TypeOrmExModule.forFeature([BoardRepository])
    // TypeOrmModule.forFeature([BoardRepository])
    // TypeOrmExModule.forFeature([forCustomRepository])
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
