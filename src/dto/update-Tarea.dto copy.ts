import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator"

export class updateTarea {
  @IsString()
  @IsOptional()
  titulo?: string;
  @IsString()
  @IsOptional()
  descripcion?: string;
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}