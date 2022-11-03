import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtSecret } from './jwt.const';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: '30m',
      },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
