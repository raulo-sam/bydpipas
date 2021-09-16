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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FinalComponent } from './final/final.component';
@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    PrincipalComponent,
    Prueba2Component,
    Prueba3Component,
    Prueba4Component,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
