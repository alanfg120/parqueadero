import { createReducer, on } from "@ngrx/store";
import { Ingreso } from "../models/IngresoClass";
import * as moment from 'moment';
import {
  buscarIngreso,
  loadIngresos,
  addIngreso,
  loadedIngresos,
  totalIngreso
} from "../actions/ingresos.actions";


let initialproductos: Ingreso[] = [];
export interface IngresosState {
  ingresos: Ingreso[];
  ingresoPendiente: { pendiente?: string; ingreso?: Ingreso };
  isloading?: boolean;
}

export const initialState: IngresosState = {
  ingresos: [],
  ingresoPendiente: {}
};

const _ingresosReducer = createReducer(
  initialState,
  on(loadIngresos, state => {

    return { ...state, isloading: true };
  }),

  on(loadedIngresos, (state, { ingresos }) => {
    initialproductos = ingresos.reverse();
    return { ...state, ingresos, isloading: false };
  }),

  on(addIngreso, (state, action) => {

    if (ingresoRepeat(state.ingresos, action.ingreso.placa))
      return {
        ...state,
        ingresos: state.ingresos.reverse(),
        ingresoPendiente: {
          pendiente: "pendiente"
        }
      };
    else
      return {
        ...state,
        ingresos: state.ingresos.concat(action.ingreso).reverse(),
        ingresoPendiente: {
          ingreso: action.ingreso,
          pendiente: "ok"
        }
      };
  }),

  on(buscarIngreso, (state, action) => {

    if (action.query == "") return { ...state, ingresos: initialproductos.reverse() };
    else
      return {
        ...state,
        ingresos: state.ingresos.filter(ingresos => {
          if (
            Object.values(ingresos)
              .toString()
              .toLowerCase()
              .indexOf(action.query) > 0
          )
            return ingresos;
        })
      };
  }),

  on(totalIngreso, (state, action) => {
     
     let horaIngreso = moment(action.horaentrada);
     let horaSalida  = moment()
     let total = horaSalida.diff(horaIngreso,'hours')
     if(total>0) total = total*action.tarifa
     else        total = action.tarifa

     return {
            ...state,
             ingresos:state.ingresos.map((dato)=>{
               if(dato._id == action.id){
                 dato.horaSalida = horaSalida
                 dato.total = total
               }
               return dato
             })
     }
  })
);



function ingresoRepeat(array: Ingreso[], placa): boolean {
  let exist = false;
  array.forEach(element => {
    if (element.placa == placa && element.horaSalida == undefined) exist = true;
  });
  return exist;
}

export function ingresosReducer(state, action) {
  return _ingresosReducer(state, action);
}
