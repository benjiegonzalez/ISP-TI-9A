import { MessagePattern, Payload } from '@nestjs/microservices';
import { DepartamentoUsuarioDTO } from './dto/departamento_usuario.dto';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { Controller } from '@nestjs/common';
import { DepartamentoUsuarioMSG } from 'src/common/constants';

@Controller()
export class DepartamentoUsuarioController {
  constructor(
    private readonly departamentoUsuarioService: DepartamentoUsuarioService,
  ) {}

  @MessagePattern(DepartamentoUsuarioMSG.CREATE)
  create(@Payload() departamentoUsuarioDTO: DepartamentoUsuarioDTO) {
    return this.departamentoUsuarioService.create(departamentoUsuarioDTO);
  }

  @MessagePattern(DepartamentoUsuarioMSG.FIND_ALL)
  findAll() {
    return this.departamentoUsuarioService.findAll();
  }

  @MessagePattern(DepartamentoUsuarioMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.departamentoUsuarioService.findOne(id);
  }

  @MessagePattern(DepartamentoUsuarioMSG.UPDATE)
  update(@Payload() payload) {
    return this.departamentoUsuarioService.update(
      payload.id,
      payload.procesoDeterminadoDTO,
    );
  }

  @MessagePattern(DepartamentoUsuarioMSG.DELETE)
  delete(@Payload() id: string) {
    return this.departamentoUsuarioService.delete(id);
  }

  // @MessagePattern(DepartamentoUsuarioMSG.ADD_PASSENGER)
  // addPassenger(@Payload() payload) {
  //   return this.departamentoUsuarioService.addPassenger(
  //     payload.flightId,
  //     payload.passengerId,
  //   );
  // }
}
