import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError, switchMap, tap} from "rxjs/operators";
import { IngresosService } from "../services/ingresos.service";
import * as moment from 'moment';
import {
  addIngreso,
  loadIngresos,
  loadedIngresos,
  addIngresoDB
} from "../actions/ingresos.actions";
import { Ingreso } from "../models/IngresoClass";
import { totalIngreso } from '../actions/ingresos.actions';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class IngresosEffects {

  loadIngresos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadIngresos.type),
      mergeMap(() =>
        this.ingresosService
          .getIngresos()
          .pipe(
             map((ingresos) => loadedIngresos({ingresos})),
             catchError(()=>EMPTY)
          )
      )
    )
  );
  
  addIngreso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addIngresoDB),
      switchMap((action)=>{
          console.log(action.ingreso);
          
        return  this.ingresosService.newIngreso(action.ingreso).pipe(
            tap(() => this.snack.open("Ingreso Listo","Aceptar",{
              duration : 3000
            }))
        )
             
      })
    ),
    {dispatch:false}
  );

  totalIngreso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(totalIngreso),
      switchMap((action)=>{

        let horaIngreso = moment(action.horaentrada);
        let horaSalida  = moment()
        let total = horaSalida.diff(horaIngreso,'hours')
        if(total>0) total = total*action.tarifa
        else        total = action.tarifa

       return  this.ingresosService.totalIngreso(action.id,total,horaSalida).pipe(
            tap(() => this.snack.open("Salida Lista","Aceptar",{duration:3000}))
        )
             
      })
    ),
    {dispatch:false}
  );
  


  constructor(
    private actions$: Actions,
    private ingresosService: IngresosService,
    public  snack:MatSnackBar
  ) {}
}
