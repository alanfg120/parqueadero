import * as moment from "moment";
import { Moment } from 'moment';

export class Ingreso {
  public _id:string
  public placa: string;
  public horaEntrada: Moment;
  public horaSalida: Moment;
  public tipo: string;
  public total: number;
  public tarifa: number;

  getHoraIngreso() {
    this.horaEntrada = moment()
  }
  getHoraSalida() {
    this.horaSalida = moment()
  }

  
}
