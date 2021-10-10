import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { ServicioService } from '../services/servicio.service';

@Component({
    selector: 'app-prueba4',
    templateUrl: './prueba4.component.html',
    styleUrls: ['./prueba4.component.css']
})
export class Prueba4Component implements OnInit {

    constructor(
        private s: ServicioService,
        private fb: FormBuilder,
        private b :BackendService,
        private router:Router
    ) { }
    form: FormGroup;
    pregunta1 = {
        acertado: false,
    }
    pregunta2 = {
        acertado: false,
    }
    pregunta3 = {
        acertado: false,
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            pollito: [''],
            borracho: [''],
            marido: [''],
        })
    }

    onSubmit() {
        const resPrueba4 = {
            pregunta1: {
                res: this.form.controls.pollito.value
            },
            pregunta2: {
                res: this.form.controls.borracho.value
            },
            pregunta3: {
                res: this.form.controls.marido.value
            }

        }
        this.b.checkPrueba4(resPrueba4).subscribe((obj)=>{
            this.pregunta1.acertado = obj.pregunta1.acertado
            this.pregunta2.acertado = obj.pregunta2.acertado
            this.pregunta3.acertado = obj.pregunta3.acertado

            if(
            this.pregunta1.acertado &&
            this.pregunta2.acertado && 
            this.pregunta3.acertado 
            ){
            this.s.mostrarPavos()
            this.s.ocultarPipaTocahuevos();
            }else{
            this.s.mostrarFalloBob()
            }
             
        })
    }
    passPrueba4(){

        this.router.navigate(['/final'])
    }
}
