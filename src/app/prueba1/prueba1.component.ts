import { Component, OnInit } from '@angular/core'; import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder,
    private s: ServicioService,
    private b:BackendService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      inputResultado: ['',]
    })
    this.s.mostrarPipaTocahuevos();
  }

  onSubmit() {

      const resPrueba1 = this.form.controls.inputResultado.value
        this.b.checkPrueba1(resPrueba1).subscribe(check=>{
            console.log(check)
            if(check){
                this.router.navigate(['/prueba2'])
                this.s.passPrueba1()
            }else{
            this.s.mostrarFalloBob()
            }

    })
  }


}





















