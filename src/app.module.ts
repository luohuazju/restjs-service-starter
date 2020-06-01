import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://rancher-home:27017/nestjs',
      database: 'nestjs',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    CoreModule, 
    UserModule
  ],
})
export class AppModule {}
