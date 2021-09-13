import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { PrincipalComponent } from './principal/principal.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';
import { Prueba4Component } from './prueba4/prueba4.component';

@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    PrincipalComponent,
    Prueba2Component,
    Prueba3Component,
    Prueba4Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
