import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Controller('toys')
export class ToysController {
  constructor(private readonly toysService: ToysService) {}

  @Post()
  create(@Body() createToyDto: CreateToyDto) {
    return this.toysService.create(createToyDto);
  }

  @Get()
  findAll() {
    return this.toysService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const siker= await this.toysService.findOne(+id);
    if(siker){
    return siker;
    }else{
      throw new NotFoundException("Nincs ilyen id.")
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToyDto: UpdateToyDto) {
    return this.toysService.update(+id, updateToyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const siker = await this.toysService.remove(+id);
    if(siker){
      return siker;
    }
    else{
      throw new NotFoundException("Nincs ilyen id.")
    }
    
  }
}
