import { Module } from '@nestjs/common';
import { DepartamentoController } from './departamento.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [DepartamentoController],
})
export class DepartamentoModule {}
