import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator"

export class updateTarea {
  @IsString()
  @IsNotEmpty()
  titulo?: string;
  @IsString()
  @IsOptional()
  descripcion?: string;
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
export interface crearTarea {
  titulo: string,
  descripcion?: string,
  done?: boolean;
}