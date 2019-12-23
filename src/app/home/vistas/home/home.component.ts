import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddingresoComponent } from '../../../addingreso/vistas/addingreso/addingreso.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddingresoComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}

