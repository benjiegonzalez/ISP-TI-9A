import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDepartamento } from 'src/common/interfaces/departamento.interface';
import { DEPARTAMENTO } from 'src/common/models/models';
import { DepartamentoDTO } from './dto/departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectModel(DEPARTAMENTO.name) private readonly model: Model<IDepartamento>,
  ) {}

  async create(departamentoDTO: DepartamentoDTO): Promise<IDepartamento> {
    const newPassenger = new this.model(departamentoDTO);
    return await newPassenger.save();
  }

  async findAll(): Promise<IDepartamento[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IDepartamento> {
    return await this.model.findById(id);
  }

  async update(id: string, departamentoDTO: DepartamentoDTO): Promise<IDepartamento> {
    return await this.model.findByIdAndUpdate(id, departamentoDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
