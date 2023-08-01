import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tareas } from 'src/schemas/tareas.schemas';
import { Model } from 'mongoose';

@Injectable()
export class TareasService {
  //esto sirve para saber cual es el 
  //modelo al cual se esta nombrando y en que esta basado
  constructor(@InjectModel(Tareas.name) private tareaModel: Model<Tareas>) { }

  findAll() {
    this.tareaModel.find()
  }
  async create(createTareas: any) {
    // se crea la tarea y y se guarda
    const nuevaTarea = new this.tareaModel(createTareas);
    await nuevaTarea.save()
    // const tareaCreada= this.tareaModel.create(createTareas);
    // return tareaCreada
  }

  async findTarea(id: string) {
    const tareaEncontrada = this.tareaModel.findById(id);
    return tareaEncontrada
  }

  async UpdateTarea(id: string, tarea: any) {
    const actualizarTarea = this.tareaModel.findByIdAndUpdate(id, tarea);
    return actualizarTarea
  }

  async eliminarTarea(id: string) {
    const deleteTarea = this.tareaModel.findByIdAndDelete(id);
    return deleteTarea
  }
}