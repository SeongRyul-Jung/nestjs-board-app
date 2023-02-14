import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private borardsService: BoardsService) { }


  //   @Get('/')
  //   getAllBoard(): Board[] {
  //     return this.borardsService.getAllBoards();
  //   }
  // 
  //   @Post()
  //   @UsePipes(ValidationPipe)
  //   createBoard(
  //     @Body() CreateBoardDto: CreateBoardDto
  //     ): Board{
  //         return this.borardsService.createBorad(CreateBoardDto)
  //   }
  // 

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.borardsService.getBoardById(id);
  }

  //   @Get('/:id')
  //   getBoardById(@Param('id') id: string): Board {
  //     return this.borardsService.getBoardById(id);
  //   }
  // 
  //   @Delete('/:id')
  //   deleteBoard(@Param('id') id: string): void {
  //     this.borardsService.deleteBoard(id);
  //   }
  // 
  //   @Patch('/:id/status')
  //   updateBoardStatus(
  //     @Param('id') id: string,
  //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
  //   ) {
  //     return this.borardsService.updateBoardStatus(id, status);
  //   }
}

