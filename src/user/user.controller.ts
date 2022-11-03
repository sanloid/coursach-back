import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InsertResult } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }

  @Post('add')
  async create(@Body() user: CreateUserDto): Promise<any> {
    return this.userService.createUser(user);
  }

  @Delete('del')
  async delete(@Body() id : number) { 
    this.userService.deleteUser(id);
  }
}
