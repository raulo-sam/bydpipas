import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { ServicioService } from '../services/servicio.service';
@Component({
    selector: 'app-prueba3',
    templateUrl: './prueba3.component.html',
    styleUrls: ['./prueba3.component.css']
})
export class Prueba3Component implements OnInit {
    disabled: boolean = false;
    form: FormGroup;

    acertijo1= {
        acertado: false
    }
    acertijo2= {
        acertado: false

    }
    acertijo3= {
        acertado: false
    }



    constructor(private fb: FormBuilder,
        private s: ServicioService,
        private b: BackendService,
        private router: Router

    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            inputAcertijo1: [''],
            inputAcertijo2: [''],
            inputAcertijo3: ['']
        })



    }
    onSubmit() {
        const respPrueba3 = {
            acertijo1: {
                res: this.form.controls.inputAcertijo1.value
            },
            acertijo2: {
                res: this.form.controls.inputAcertijo2.value
            },
            acertijo3: {
                res: this.form.controls.inputAcertijo3.value

            }
        };
        this.b.checkPrueba3(respPrueba3).subscribe((obj: any) => {

            this.acertijo1.acertado = obj.acertijo1.acertado
            this.acertijo2.acertado = obj.acertijo2.acertado
            this.acertijo3.acertado = obj.acertijo3.acertado
            if(
                this.acertijo1.acertado &&
                this.acertijo2.acertado &&
                this.acertijo3.acertado 
            ){
            this.s.passPrueba3()
            }else{
            this.s.mostrarFalloBob()
            }
        })

    }
    passPrueba4() {
        this.router.navigate(['/prueba4'])
    }
}
