import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, DeleteUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getAllUser() {
    return this.userRepo.find();
  }

  async createUser(dto: CreateUserDto) {
    const usr = this.userRepo.insert(dto);
    return {
      name : dto.name,
    };
  }

  async deleteUser(id){
    this.userRepo.remove(id);
  }

  async findUserByName(name : string): Promise<User>{
    return await this.userRepo.findOne({where : {name : name}})
  }

}
