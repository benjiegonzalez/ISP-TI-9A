import { DepartamentoMSG } from '../common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Body, Controller } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoDTO } from './dto/departamento.dto';

@Controller()
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @MessagePattern(DepartamentoMSG.CREATE)
  create(@Body() departamentoDTO: DepartamentoDTO) {
    return this.departamentoService.create(departamentoDTO);
  }

  @MessagePattern(DepartamentoMSG.FIND_ALL)
  findAll() {
    return this.departamentoService.findAll();
  }

  @MessagePattern(DepartamentoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.departamentoService.findOne(id);
  }

  @MessagePattern(DepartamentoMSG.UPDATE)
  update(@Payload() payload) {
    return this.departamentoService.update(payload.id, payload.departamentoDTO);
  }

  @MessagePattern(DepartamentoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.departamentoService.delete(id);
  }
}
