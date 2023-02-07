import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private borardsService: BoardsService) { }


  @Get('/')
  getAllBoard(): Board[] {
    return this.borardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body() CreateBoardDto: CreateBoardDto
    ): Board{
        return this.borardsService.createBorad(CreateBoardDto)
  }
}

