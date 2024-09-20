import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // Get all ninjas
  @Get()
  getNinjas(@Query('type') type: string) {
    return 'All ninjas ' + type;
  }

  // Get a single ninja
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return `A ninja ${id}`;
  }

  // Create a ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
      age: createNinjaDto.age,
      belt: createNinjaDto.belt,
    };
  }

  // Update a ninja
  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return 'Update a ninja';
  }

  // Delete a ninja
  @Post(':id/delete')
  deleteNinja(@Param('id') id: string) {
    return 'Delete a ninja';
  }
}
