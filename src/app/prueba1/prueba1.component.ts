import { Component, OnInit } from '@angular/core'; import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {


  form: FormGroup;
  resultado: string = "280A23x47t5l9823h74eq509R23847f5023984y752039zZb8457mN203Ds985732w2039y8479485";

  constructor(private fb: FormBuilder,
    private s: ServicioService,

  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      inputResultado: ['280A23x47t5l9823h74eq509R23847f5023984y752039zZb8457mN203Ds985732w2039y8479485',]
    })
    this.s.mostrarPipaTocahuevos();
    console.log(this.resultado)
  }

  onSubmit() {
    if (this.form.controls.inputResultado.value === this.resultado) {
      this.s.mostrarPrueba1 = false;
      this.s.mostrarPrueba2 = true;
      this.s.passPrueba1();
    }
    else {
      this.s.ocultarPipaTocahuevos();
 this.s.mostrarFalloBob();
    }
  }


}





















