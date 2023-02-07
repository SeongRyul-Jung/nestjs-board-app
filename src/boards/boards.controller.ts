import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private borardsService: BoardsService) { }


  @Get('/')
  getAllBoard(): Board[] {
    return this.borardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string
    ): Board{
        return this.borardsService.createBorad(title, description)
  }
}

