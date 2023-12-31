import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { DepartamentoUsuarioController } from './departamento-usuario.controller';

@Module({
  imports: [ProxyModule],
  controllers: [DepartamentoUsuarioController],
})
export class DepartamentoUsuarioModule {}
