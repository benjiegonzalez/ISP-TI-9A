import {
  DEPARTAMENTO,
  DEPARTAMENTO_USUARIO,
  USERS,
} from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DepartamentoUsuarioController } from './departamento_usuario.controller';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { DepartamentoSchema } from './schema/departamento.schema';
import { DepartamentoUsuarioSchema } from './schema/departamento_usuario.schema';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DEPARTAMENTO.name,
        useFactory: () => DepartamentoSchema,
      },
      {
        name: USERS.name,
        useFactory: () => UserSchema,
      },
      {
        name: DEPARTAMENTO_USUARIO.name,
        useFactory: () =>
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          DepartamentoUsuarioSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [DepartamentoUsuarioController],
  providers: [DepartamentoUsuarioService],
})
export class DepartamentoUsuarioModule {}
