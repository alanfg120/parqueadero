import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ingresosReducer } from './ingresos/reducer/ingresos.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IngresosEffects } from './ingresos/effects/ingresos.effects';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ ingreso: ingresosReducer }),
    EffectsModule.forRoot([IngresosEffects]),
    MatSnackBarModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
