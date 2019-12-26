import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './vistas/ingresos/ingresos.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [IngresosComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule,
    MaterialModule,
    HttpClientModule,
    PipesModule,
 
  ]
})
export class IngresosModule { }
