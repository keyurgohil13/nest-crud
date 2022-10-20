import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employee/employee.entity';
import { EmployeeModule } from './Employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type :'postgres',
      host : 'localhost',
      port : 5432,
      username : 'postgres',
      password : '123456789',
      database : 'nest-crud',
      logging : true,
      synchronize : true,
      entities : [Employee],
    }),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
