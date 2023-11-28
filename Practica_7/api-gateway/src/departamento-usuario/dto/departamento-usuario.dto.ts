import { IsNotEmpty, IsString } from 'class-validator';

export class DepartamentoUsuarioDTO {
  @IsString()
  @IsNotEmpty()
  usuario_id: string;

  @IsString()
  @IsNotEmpty()
  departamento_id: string;
}
