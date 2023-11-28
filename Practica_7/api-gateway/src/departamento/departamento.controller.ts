import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartamentoMSG } from '../common/constants';
import { DepartamentoDTO } from './dto/departamento.dto';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IDepartamento } from 'src/common/interfaces/departamento.interface';
import { ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { UseGuards } from '@nestjs/common';

@ApiTags('departamentos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/departamento')
export class DepartamentoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyDepartamento = this.clientProxy.clientProxyDepartamento();

  @Post()
  create(@Body() departamentoDTO: DepartamentoDTO): Observable<IDepartamento> {
    return this._clientProxyDepartamento.send(DepartamentoMSG.CREATE, departamentoDTO);
  }

  @Get()
  findAll(): Observable<IDepartamento[]> {
    return this._clientProxyDepartamento.send(DepartamentoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IDepartamento> {
    return this._clientProxyDepartamento.send(DepartamentoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() departamentoDTO: DepartamentoDTO,
  ): Observable<IDepartamento> {
    return this._clientProxyDepartamento.send(DepartamentoMSG.UPDATE, {
      id,
      departamentoDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyDepartamento.send(DepartamentoMSG.DELETE, id);
  }
}
