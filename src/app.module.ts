import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { UserModule } from './users/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    // ✅ Serve UI
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // ✅ Database connection
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

    // ✅ Users API
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

