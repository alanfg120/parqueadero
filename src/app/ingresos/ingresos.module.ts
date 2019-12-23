import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './vistas/ingresos/ingresos.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [IngresosComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule,
    MaterialModule
  ]
})
export class IngresosModule { }
