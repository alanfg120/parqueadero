import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path:"Home",
    loadChildren: "./home/home.module#HomeModule" ,
    //canActivate:[LoginService]
  },
  { 
     path: "**", 
     //loadChildren: "./login/login.module#LoginModule"
     loadChildren: "./home/home.module#HomeModule" , 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
