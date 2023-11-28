import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // UseGuards,
} from '@nestjs/common';
import { DepartamentoMSG, DepartamentoUsuarioMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { DepartamentoUsuarioDTO } from './dto/departamento-usuario.dto';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IDepartamentoUsuario } from 'src/common/interfaces/departamento_usuario.interface';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('departamento_usuarios')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/departamento_usuario')
export class DepartamentoUsuarioController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyDepartamentoUsuario = this.clientProxy.clientProxyDepartamentoUsuario();

  @Post()
  create(@Body() departamentoUsuarioDTO: DepartamentoUsuarioDTO): Observable<IDepartamentoUsuario> {
    return this._clientProxyDepartamentoUsuario.send(
      DepartamentoUsuarioMSG.CREATE,
      departamentoUsuarioDTO,
    );
  }

  @Get()
  findAll(): Observable<IDepartamentoUsuario[]> {
    return this._clientProxyDepartamentoUsuario.send(DepartamentoUsuarioMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IDepartamentoUsuario> {
    return this._clientProxyDepartamentoUsuario.send(DepartamentoUsuarioMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() departamentoUsuarioDTO: DepartamentoUsuarioDTO,
  ): Observable<IDepartamentoUsuario> {
    return this._clientProxyDepartamentoUsuario.send(DepartamentoUsuarioMSG.UPDATE, {
      id,
      departamentoUsuarioDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyDepartamentoUsuario.send(DepartamentoUsuarioMSG.DELETE, id);
  }
}
