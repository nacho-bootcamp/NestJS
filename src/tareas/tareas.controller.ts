import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { crearTarea } from 'src/dto/create-Tarea.dto';
import { updateTarea } from 'src/dto/update-Tarea.dto copy';

@Controller('tareas')
export class TareasController {
  constructor(private tareaService: TareasService) { }

  @Get()
  findAll() {
    return this.tareaService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tareaService.findTarea(id)
  }


  @Post()
  crear(@Body() body: crearTarea) {
    return this.tareaService.create(body)
  }

  @Put(":id")
  actualizar(@Param("id") id: string, @Body() body: updateTarea) {
    return this.tareaService.UpdateTarea(id, body);
  }

  @Delete(":id")

  eliminar(@Param("id") id: string) {
    return this.tareaService.eliminarTarea(id);
  }
}
