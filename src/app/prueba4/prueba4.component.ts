import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.component.html',
  styleUrls: ['./prueba4.component.css']
})
export class Prueba4Component implements OnInit {

  constructor(private s: ServicioService, private fb: FormBuilder) { }
  form: FormGroup;
  pregunta1 = {
    acertado: false,
    solucion: "maiz"
  }
  pregunta2 = {
    acertado: false,
    solucion: "borracho"
  }
  pregunta3 = {
    acertado: false,
    solucion: "pavo"
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      pollito: ['maiz'],
      // minuto 2:19 se ve el maiz,
      borracho: ['borracho'],
      marido: ['pavo'],
    })
  }

  onSubmit() {
    if ((this.form.controls.pollito.value).toLowerCase().includes(this.pregunta1.solucion)) {
      this.pregunta1.acertado = true;
    } else { this.pregunta1.acertado = false; }

    if ((this.form.controls.borracho.value).toLowerCase().includes(this.pregunta2.solucion)) {
      this.pregunta2.acertado = true;
    } else { this.pregunta2.acertado = false; }


    if ((this.form.controls.marido.value).toLowerCase().includes(this.pregunta3.solucion)) {
      this.pregunta3.acertado = true;
    } else { this.pregunta3.acertado = false; }
  }
}
