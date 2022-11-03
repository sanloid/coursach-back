import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async login(usr: CreateUserDto) {
    const user = await this.validateUser(usr);
    return this.generateToken(user);
  }

  async registration(newUser: CreateUserDto) {
    try {
      const usr = await this.userService.findUserByName(newUser.name);
      if (usr) {
        return new HttpException('User with the same name already exist', 400);
      }
      const hashPassword = await bcrypt.hash(newUser.password, 5);
      const user = await this.userService.createUser({
        ...newUser,
        password: hashPassword,
      });
      return this.generateToken(user);
    }
    catch (e) {
      console.log(e);
    }
  }

  private async generateToken(usr) {
    return {
      token: this.jwtService.sign({ name: usr.name }),
    };
  }

  private async validateUser(usr: CreateUserDto) {
    const user = await this.userService.findUserByName(usr.name);
    const passEqual = await bcrypt.compare(usr.password, user.password);
    if (user && passEqual) {
      return user;
    }
    throw new UnauthorizedException({ message: 'wrong username or password' });
  }
}
