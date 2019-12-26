import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddingresoComponent } from '../../../addingreso/vistas/addingreso/addingreso.component';
import { Store } from '@ngrx/store';
import { Ingreso } from 'src/app/ingresos/models/IngresoClass';
import { buscarIngreso } from '../../../ingresos/actions/ingresos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,private store: Store<{ ingreso: Ingreso[] }>) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddingresoComponent, {
      width: '500px',
      data: {}
    });

  }
  buscar(text){
    this.store.dispatch(buscarIngreso({query:text}))
  }
}

