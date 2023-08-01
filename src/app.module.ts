import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/tareasdb"),
    TareasModule],

})
export class AppModule { }
