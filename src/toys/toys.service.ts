import { Injectable } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToysService {
  constructor(private readonly db: PrismaService){}
  create(createToyDto: CreateToyDto) {
    return 'This action adds a new toy';
  }

  findAll() {
    return this.db.toy.findMany();
  }

  async findOne(id: number) {
    try{
    return await this.db.toy.findUnique({where: {id}});
    }catch{
      return undefined;
    }
  }

  update(id: number, updateToyDto: UpdateToyDto) {
    return `This action updates a #${id} toy`;
  }

  async remove(id: number) {
    try{
    return await this.db.toy.delete({where: {id}});
    }catch{
      return undefined;
    }
  }
}
