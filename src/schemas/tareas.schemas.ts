import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

// dentro del schema le puedo dar mas informacion
@Schema({
  timestamps: true
})
//con el Prop decimos queel titulo es una propiedad del documento y asi sucesivamente
export class Tareas {
  @Prop({
    unique: true,
    required: true,
    trim: true // sirve para quitarles los espacios 
  })
  titulo: string
  @Prop({
    trim: true
  })
  descripcion: string
  @Prop({ default: false })
  done: boolean
}

export const TareaSchema = SchemaFactory.createForClass(Tareas)
//El SchemaFactory se encarga de transformar la clase Tareas en un esquema de
// Mongoose que puede ser utilizado para interactuar con la base de datos MongoDB