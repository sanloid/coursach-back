import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() usr: CreateUserDto) {
    return await this.authService.login(usr);
  }

  @Post('reg')
  async registration(@Body() usr: CreateUserDto) {
    return await this.authService.registration(usr);
  }
}
