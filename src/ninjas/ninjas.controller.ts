import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  // Get all ninjas
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjasService.getNinjas(weapon);
  }

  // Get a single ninja
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjasService.getOneNinja(+id);
  }

  // Create a ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
      weapon: createNinjaDto.weapon,
    };
  }

  // Update a ninja
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDto.name,
      age: updateNinjaDto.age,
      belt: updateNinjaDto.belt,
    };
  }

  // Delete a ninja
  @Post(':id/delete')
  deleteNinja(@Param('id') id: string) {
    return 'Delete a ninja';
  }
}
