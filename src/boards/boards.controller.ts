import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private borardsService: BoardsService){}


  @Get()
  getAllBoard(): Board[] {
    return this.borardsService.getAllBoards();
  }
}