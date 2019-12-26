import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ingreso } from '../models/IngresoClass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class IngresosService {
  constructor(public http: HttpClient) {}

  getIngresos():Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>("http://localhost:3000/ingresos/get");
  }
  newIngreso(ingreso:Ingreso):Observable<Ingreso>{
  return this.http.post<Ingreso>("http://localhost:3000/ingresos/new",ingreso);
  }
  totalIngreso(id,total,horasalida){
  return this.http.put("http://localhost:3000/ingresos/total",{id,total,horasalida});
  }
}
