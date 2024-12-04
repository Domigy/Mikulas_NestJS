import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, NotFoundException, Put } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }
  @Put(':id/toys/:toyid')
  async addChildrenToy(@Param("id")id: string, @Param("toyid")toyid: string){
    const siker = await this.childrenService.addChildrenToy(+id, +toyid);
    if(siker){
      return siker;
    }
    else{
      if(!siker){
        throw new ConflictException("Rossz volt a gyerek.")
      }
      else{
        throw new NotFoundException("Nincs ilyen id.")
      }
    }
  }
  @Delete(":id/toys")
  async deletChildrenToy(@Param("id")id: string){
    const siker = this.childrenService.deletChildrenToy(+id);
    if(siker){
      return siker;
    }
    else{
      throw new NotFoundException("Nincs ilyen id.")
    }
  }

  @Get()
  findAll() {
    return this.childrenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const siker = await this.childrenService.findOne(+id);
    if(siker){
      return siker;
    }
    else{
      throw new NotFoundException("Nincs ilyen id.")
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
     const siker = await this.childrenService.update(+id, updateChildDto)
    
     if(siker){
      return siker;
     }
     else{
      throw new NotFoundException("Nincs ilye id.")
     }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const siker= await this.childrenService.remove(+id);
    if(siker){
      return siker;
    }
    else{
      throw new NotFoundException("Nincs ilyen id;")
    }
  }
}
