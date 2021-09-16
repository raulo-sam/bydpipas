import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';
interface acertijo {
  solucion: string
  acertado: boolean,
}
@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.css']
})
export class Prueba3Component implements OnInit {
  continuar: boolean = false;
  disabled: boolean = false;
  form: FormGroup;

  acertijo1: acertijo = {
    acertado: false,
    solucion: "chicle"

  };
  acertijo2 = {
    acertado: false,
    solucion: "pulgar"

  };
  acertijo3 = {
    acertado: false,
    solucion: "9"

  };
  constructor(private fb: FormBuilder,
    private s: ServicioService,

  ) {
    console.log('cargado Prueba3');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      inputAcertijo1: ['chicle'],
      inputAcertijo2: ['pulgar'],
      inputAcertijo3: ['9']
    })
    this.s.ocultarPipaTocahuevos();



  }
  onSubmit() {
    if ((this.form.controls.inputAcertijo1.value).toLowerCase().includes(this.acertijo1.solucion.toLowerCase())) {
      this.acertijo1.acertado = true;
      console.log("uno")
    } else this.acertijo1.acertado = false;
    if ((this.form.controls.inputAcertijo2.value).toLowerCase().includes(this.acertijo2.solucion.toLowerCase())) {
      this.acertijo2.acertado = true;
      console.log("dos")

    } else this.acertijo2.acertado = false;

    if ((this.form.controls.inputAcertijo3.value).toLowerCase().includes(this.acertijo3.solucion.toString())) {
      this.acertijo3.acertado = true;
      console.log("tres")
      console.log(this.form.controls.inputAcertijo3.value)
    } else this.acertijo3.acertado = false;


    if (this.acertijo1.acertado && this.acertijo2.acertado && this.acertijo3.acertado) {
      this.continuar = true;
    }
    else {
      this.s.mostrarFalloBob();
    }
  }
  passPrueba4() {
    this.s.mostrarPrueba4 = true;
    this.s.mostrarPrueba3 = false;
    this.s.passPrueba3();
  }
}
