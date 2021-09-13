import { Component, OnInit } from '@angular/core'; import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {


  form: FormGroup;
  resultado: number = 1234;

  constructor(private fb: FormBuilder,
    private s: ServicioService,

  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      inputResultado: ['1234',]
    })


  }

  onSubmit() {
    if (this.form.controls.inputResultado.invalid) return;
    else {
      if (this.form.controls.inputResultado.value == this.resultado) {
        console.log(typeof this.form.controls.inputResultado.value)
        this.s.prueba1 = true;
      }
    }
  }


}
