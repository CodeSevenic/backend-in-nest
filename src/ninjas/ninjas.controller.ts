import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // Get all ninjas
  @Get()
  getNinjas() {
    return 'All ninjas';
  }

  // Get a single ninja
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return `A ninja ${id}`;
  }

  // Create a ninja
  @Post()
  createNinja() {
    return 'Create a ninja';
  }

  // Update a ninja
  @Post(':id')
  updateNinja(@Param('id') id: string) {
    return 'Update a ninja';
  }

  // Delete a ninja
  @Post(':id/delete')
  deleteNinja(@Param('id') id: string) {
    return 'Delete a ninja';
  }
}
