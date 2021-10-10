import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { ServicioService } from '../services/servicio.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    form: FormGroup;
    constructor(

        private fb: FormBuilder,
        private s: ServicioService,
        private b:BackendService,
        private router:Router

    ) {
    }

    ngOnInit(): void {
        this.b.principal(); 
        this.form = this.fb.group({
            word_secret: ['',]
        })

    }
    onSubmit() {
        this.b.checkPrincipal(this.form.controls.word_secret.value).subscribe(check=>{


        if (check){
            this.s.passPrincipal()
            this.router.navigate(['/prueba1'])
        }else{
            this.s.mostrarFalloBob();
            }

        }) 




    }


}
