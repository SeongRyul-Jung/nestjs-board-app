import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
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

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.borardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.borardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus
  ) {
    return this.borardsService.updateBoardStatus(id, status);
  }
}

