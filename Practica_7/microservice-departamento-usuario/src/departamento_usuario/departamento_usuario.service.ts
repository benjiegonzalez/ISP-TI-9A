import { DepartamentoUsuarioDTO } from './dto/departamento_usuario.dto';
import { DEPARTAMENTO_USUARIO } from '../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDepartamentoUsuario } from 'src/common/interfaces/departamento-usuario.interface';
// import axios from 'axios';
// import * as moment from 'moment';
// import { ILocation } from 'src/common/interfaces/location.interface';
// import { IWeather } from 'src/common/interfaces/weather.interface';

@Injectable()
export class DepartamentoUsuarioService {
  constructor(
    @InjectModel(DEPARTAMENTO_USUARIO.name)
    private readonly model: Model<IDepartamentoUsuario>,
  ) {}

  // async getLocation(destinationCity: string): Promise<ILocation> {
  //   const { data } = await axios.get(
  //     `https://www.metaweather.com/api/location/search/?query=${destinationCity}`,
  //   );
  //   return data[0];
  // }

  // async getWeather(woeid: number, flightDate: Date): Promise<IWeather[]> {
  //   const dateFormat = moment.utc(flightDate).format();

  //   const year = dateFormat.substring(0, 4);
  //   const month = dateFormat.substring(5, 7);
  //   const day = dateFormat.substring(8, 10);

  //   const { data } = await axios.get(
  //     `https://www.metaweather.com/api/location/${woeid}/${year}/${month}/${day}`,
  //   );
  //   return data;
  // }

  // assign(
  //   { _id, pilot, airplane, destinationCity, flightDate, passengers }: IProcesoDeterminado,
  //   weather: IWeather[],
  // ): IProcesoDeterminado {
  //   return Object.assign({
  //     _id,
  //     pilot,
  //     airplane,
  //     destinationCity,
  //     flightDate,
  //     passengers,
  //     weather,
  //   });
  // }

  async create(
    departamentoUsuarioDTO: DepartamentoUsuarioDTO,
  ): Promise<IDepartamentoUsuario> {
    const newFlight = new this.model(departamentoUsuarioDTO);
    return await newFlight.save();
  }

  async findAll(): Promise<IDepartamentoUsuario[]> {
    return await this.model
      .find()
      .populate('usuario_id')
      .populate('departamento_id');
  }

  async findOne(id: string): Promise<IDepartamentoUsuario> {
    return await this.model
      .findById(id)
      .populate('usuario_id')
      .populate('departamento_id');
    // const location: ILocation = await this.getLocation(flight.destinationCity);

    // const weather: IWeather[] = await this.getWeather(
    //   location.woeid,
    //   flight.flightDate,
    // );

    // return this.assign(flight, weather);
  }

  async update(
    id: string,
    departamentoUsuarioDTO: DepartamentoUsuarioDTO,
  ): Promise<IDepartamentoUsuario> {
    return await this.model.findByIdAndUpdate(id, departamentoUsuarioDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }

  // async addPassenger(
  //   flightId: string,
  //   passengerId: string,
  // ): Promise<IProcesoDeterminado> {
  //   return await this.model
  //     .findByIdAndUpdate(
  //       flightId,
  //       {
  //         $addToSet: { passengers: passengerId },
  //       },
  //       { new: true },
  //     )
  //     .populate('passengers');
  // }
}
