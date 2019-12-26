import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Ingreso } from "../../models/IngresoClass";
import { Store, select } from "@ngrx/store";
import { IngresosState } from "../../reducer/ingresos.reducer";
import { loadIngresos, addIngresoDB, totalIngreso } from "../../actions/ingresos.actions";
import { MatSnackBar } from "@angular/material";
import { Moment } from 'moment';

@Component({
  selector: "app-ingresos",
  templateUrl: "./ingresos.component.html",
  styleUrls: ["./ingresos.component.css"]
})
export class IngresosComponent implements OnInit {
  ingresos$: Observable<Ingreso[]>;
  ingresopendiente$: Observable<Object>;
  isloading$: Observable<boolean>;

  constructor(
    private store: Store<{ ingreso: IngresosState }>,
    public snack: MatSnackBar
  ) {
    this.ingresos$ = store.select(state => state.ingreso.ingresos);
    this.ingresopendiente$ = store.select(
      state => state.ingreso.ingresoPendiente
    );
    this.isloading$ = store.select(state => state.ingreso.isloading);
  }

  ngOnInit() {
    this.ingresopendiente$.subscribe((value: any) => {
      if (value.pendiente == "pendiente")
        this.snacbar("Esta pendiente Por Salir");
      if (value.pendiente == "ok")
        this.store.dispatch(addIngresoDB({ ingreso: value.ingreso }));
    });
    this.store.dispatch(loadIngresos());
  }
  snacbar(mensaje) {
    this.snack.open(mensaje, "Aceptar");
  }
  getTotal(hora:Moment,id:string,tarifa:number) {
      this.store.dispatch(totalIngreso({horaentrada:hora,id:id,tarifa:tarifa}))
  }
}
