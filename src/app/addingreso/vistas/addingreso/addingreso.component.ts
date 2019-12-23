import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ingreso } from '../../../ingresos/models/IngresoClass';

@Component({
  selector: 'app-addingreso',
  templateUrl: './addingreso.component.html',
  styleUrls: ['./addingreso.component.css']
})
export class AddingresoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddingresoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
   
    ingreso = new Ingreso();
    
    ngOnInit() {

    }
    SaveIngreso(form){

     this.ingreso.getHoraIngreso();     
     if(form.valid)console.log(this.ingreso);
     
    }
}
