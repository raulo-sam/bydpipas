import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
    selector: 'app-final',
    templateUrl: './final.component.html',
    styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

    constructor(public s: ServicioService) { }

    f2 = false
    f3 = false
    f4 = false
    f5 = false
    ngOnInit(): void {
    }

    fake1() {
        this.s.mostrarContraseñaFake1();
       this.f2=true
    }
    fake2() {
        this.s.mostrarContraseñaFake2();
       this.f3=true
    }
    fake3() {
        this.s.mostrarContraseñaFake3();
       this.f4=true
    }
    fake4() {
        this.s.mostrarContraseñaFake4();
       this.f5=true
    }
    mostrar(){
        this.s.mostrarContraseña();
    }
}
