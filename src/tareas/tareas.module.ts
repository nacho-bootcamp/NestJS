import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { MongooseModule } from "@nestjs/mongoose"
import { Tareas, TareaSchema } from 'src/schemas/tareas.schemas';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Tareas.name,
      schema: TareaSchema,
    }
  ])],
  controllers: [TareasController],
  providers: [TareasService]
})
export class TareasModule { }
