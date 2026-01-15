import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestuser',
      password: 'password',
      database: 'nestdb',
      autoLoadEntities: true,
      synchronize: true, // learning only
    }),
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

