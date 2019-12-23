import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './vistas/home/home.component';
import { MaterialModule } from '../material/material.module';
import { AddingresoModule } from '../addingreso/addingreso.module';
import { AddingresoComponent } from '../addingreso/vistas/addingreso/addingreso.component';


@NgModule({
  entryComponents:[AddingresoComponent],
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    AddingresoModule
  ]
})
export class HomeModule { }
