import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tareas } from 'src/schemas/tareas.schemas';
import { Model } from 'mongoose';
import { crearTarea } from "../dto/create-Tarea.dto";
import { updateTarea } from "../dto/update-Tarea.dto copy";

@Injectable()
export class TareasService {
  //esto sirve para saber cual es el 
  //modelo al cual se esta nombrando y en que esta basado
  constructor(@InjectModel(Tareas.name) private tareaModel: Model<Tareas>) { }

  findAll() {
    return this.tareaModel.find()
  }
  async create(createTareas: crearTarea) {
    // se crea la tarea y y se guarda
    const nuevaTarea = new this.tareaModel(createTareas);
    return await nuevaTarea.save()
    // const tareaCreada= this.tareaModel.create(createTareas);
    // return tareaCreada
  }

  async findTarea(id: string) {
    const tareaEncontrada = this.tareaModel.findById(id);
    return tareaEncontrada
  }

  async UpdateTarea(id: string, tarea: updateTarea) {
    const actualizarTarea = this.tareaModel.findByIdAndUpdate(id, tarea, { new: true });
    //si no ponemos new:true me devuelve el dato antes de ser actualizado
    return actualizarTarea
  }

  async eliminarTarea(id: string) {
    const deleteTarea = this.tareaModel.findByIdAndDelete(id);
    return deleteTarea
  }
}
// el dto sirve para recibir los datos que necesitamos para crear y actualizar