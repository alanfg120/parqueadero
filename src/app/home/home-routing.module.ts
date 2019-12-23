import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';


const routes: Routes = [
  {
  path:'',
  component:HomeComponent,
  children:[
    {
      path:'',
      loadChildren:"./../ingresos/ingresos.module#IngresosModule"
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
