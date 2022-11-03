import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { Note } from './note/note.entity';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'surus.db.elephantsql.com',
      port: 5432,
      username: 'urcycbyo',
      password: 'tCjD9p1ziAG6iBWJhHm1jS8mUGDn20X_',
      database: 'urcycbyo',
      entities: [Note, User],
      synchronize: true,
    }),
    UserModule,
    NoteModule,
    AuthModule,
  ],
})
export class AppModule {}
