import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DepartamentoUsuarioModule } from './departamento-usuario/departamento-usuario.module';
import { AuthModule } from './auth/auth.module';
// import { FlujoProcesoModule } from './flujo_proceso/flujo_proceso.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    DepartamentoModule,
    DepartamentoUsuarioModule,
    AuthModule,
    // FlujoProcesoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
