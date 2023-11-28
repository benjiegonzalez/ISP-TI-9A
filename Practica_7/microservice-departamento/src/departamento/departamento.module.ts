import { Module } from '@nestjs/common';
import { DEPARTAMENTO } from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentoController } from './departamento.controller';
import { DepartamentoService } from './departamento.service';
import { DepartamentoSchema } from './schema/departamento.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DEPARTAMENTO.name,
        useFactory: () => DepartamentoSchema,
      },
    ]),
  ],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
