import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  constructor(private readonly db: PrismaService){}
  create(createChildDto: CreateChildDto) {
    return this.db.children.create({data: createChildDto});
  }
  async addChildrenToy(id: number, toyid: number){
    try{
    const gyerek=  await this.db.children.findUnique({where: {id}});
    if(!gyerek){
      return -1;
    }
    if(!gyerek.goodornot){
      return undefined;
    }
    return this.db.children.update({where: {id}, data: {toys: {connect: {id: toyid}}}});}
    catch{
      return undefined;
    }
  }
  deletChildrenToy(id: number){
    return this.db.children.update({where: {id}, data: {toys: {disconnect: {}}}})
  }

  findAll() {
    return this.db.children.findMany();
  }

  async findOne(id: number) {
    try{
      return await this.db.children.findUnique({where: {id}});
      }catch{
        return undefined;
      }
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    try{
      if(updateChildDto.goodornot!= undefined && updateChildDto.goodornot==false){
        await this.deletChildrenToy(id);
      }
      return await this.db.children.update({where: {id}, data: updateChildDto})
    }catch{
      return undefined;
    }
  }

  async remove(id: number) {
    try{
      return await this.db.children.delete({where: {id}})
    }catch{
      return undefined;
    }
    
    
  }
}
