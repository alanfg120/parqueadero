import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ingreso } from '../../../ingresos/models/IngresoClass';
import { Store, select } from '@ngrx/store';
import { addIngreso } from '../../../ingresos/actions/ingresos.actions';

@Component({
  selector: 'app-addingreso',
  templateUrl: './addingreso.component.html',
  styleUrls: ['./addingreso.component.css']
})
export class AddingresoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddingresoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<{ ingreso: Ingreso[] }>) {}
   
    ingreso = new Ingreso();
    
    ngOnInit() {
       
    }
    SaveIngreso(form){

     if(form.valid){  

     this.ingreso.getHoraIngreso()
     this.store.dispatch(addIngreso({ingreso:this.ingreso}))
     this.dialogRef.close()
     }
     
    }
}
