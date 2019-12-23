import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddingresoComponent } from './vistas/addingreso/addingreso.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  entryComponents:[AddingresoComponent],
  declarations: [AddingresoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[AddingresoComponent]
})
export class AddingresoModule { }
