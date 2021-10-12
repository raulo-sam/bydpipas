import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { ServicioService } from '../services/servicio.service';

@Component({
    selector: 'app-prueba2',
    templateUrl: './prueba2.component.html',
    styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {


    form: FormGroup;

    constructor(private fb: FormBuilder, 
        private s: ServicioService,
        private b: BackendService,
        private router: Router    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            inputQuitaholores: ["",]
        })


    }

    onSubmit() {
        const resPrueba2 = this.form.controls.inputQuitaholores.value
        this.b.checkPrueba2(resPrueba2).subscribe((check) => {

            if (check) {
                this.router.navigate(['/prueba3'])
                this.s.passPrueba2();
            } else {
                this.s.mostrarFalloBob();
            }
        })
    }

}
