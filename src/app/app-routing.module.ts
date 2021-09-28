import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { Prueba1Guard } from './guards/prueba1.guard';
import { PrincipalComponent } from './principal/principal.component';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';
import { Prueba4Component } from './prueba4/prueba4.component';

const routes: Routes = [
    { path: "principal",  component: PrincipalComponent },
    { path: "prueba1",   canActivate:[Prueba1Guard], component: Prueba1Component },
    { path: "prueba2",   canActivate:[], component: Prueba2Component },
    { path: "prueba3",   canActivate:[], component: Prueba3Component },
    { path: "prueba4",   canActivate:[], component: Prueba4Component },
    { path: "final",     canActivate:[], component: FinalComponent },


    { path: '**', pathMatch: 'full', redirectTo: 'principal' },
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
