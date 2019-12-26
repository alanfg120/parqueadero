import { createAction, props } from "@ngrx/store";
import { Ingreso } from "../models/IngresoClass";
import { Moment } from 'moment';



export const loadIngresos = createAction("[Ingresos Componet] LoadIngresos");

export const loadedIngresos = createAction(
  "[Ingresos Componet] LoadedIngresos",
  props<{ ingresos: Ingreso[] }>()
);
export const addIngreso = createAction(
  "[Ingresos Componet] AddIngreso",
  props<{ ingreso: Ingreso }>()
);
export const addIngresoDB = createAction(
  "[Ingresos Componet] AddIngresoDB",
  props<{ ingreso: Ingreso }>()
);
export const buscarIngreso = createAction(
  "[Ingresos Componet] BuscarIngreso",
  props<{ query: string }>()
);
export const totalIngreso = createAction(
  "[Ingresos Componet] TotalIngreso",
  props<{ horaentrada: Moment,id:string,tarifa:number}>()
);
