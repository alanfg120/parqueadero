import * as moment from "moment";

export class Ingreso {
  public placa: string;
  public horaEntrada: string;
  public horaSalida: string;
  public tipo: string;
  public total: number;

  getHoraIngreso() {
    this.horaEntrada = moment().format("hh:mm A");
  }
  getHoraSalida() {
    this.horaSalida = moment().format("hh:mm A");
  }

  getTotal(horaSalida, horaEntrada) {
    let total = moment.duration(horaEntrada - horaSalida).humanize();
    this.total = parseInt(total);
  }
}
