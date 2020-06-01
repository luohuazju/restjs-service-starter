import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'rancher-home',
      port: 3306,
      username: 'nestjs',
      password: 'passwordAE#$%3',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoreModule, 
    UserModule
  ],
})
export class AppModule {}
