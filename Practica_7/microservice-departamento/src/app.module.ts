import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentoModule } from './departamento/departamento.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    DepartamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
