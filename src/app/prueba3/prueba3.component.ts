import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.css']
})
export class Prueba3Component implements OnInit {

  segundos = 10;
  disabled: boolean = false;
  form: FormGroup;
  acertijo1: string = "chicle";
  acertijo2: string = "pulgar";
  acertijo3: number = 9;
  constructor(private fb: FormBuilder,
    private s: ServicioService,

  ) {
    console.log('cargado Prueba3');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      inputAcertijo1: ['Chicle'],
      inputAcertijo2: ['pulgar'],
      inputAcertijo3: ['9']
    })


  }
  onSubmit() {
    let acertijos = {
      uno: false,
      dos: false,
      tres: false,
    }


    if ((this.form.controls.inputAcertijo1.value).toLowerCase().includes(this.acertijo1.toLowerCase())) {
      acertijos.uno = true;
      console.log("uno")
    }
    if ((this.form.controls.inputAcertijo2.value).toLowerCase().includes(this.acertijo2.toLowerCase())) {
      acertijos.dos = true;
      console.log("dos")
    }
    if ((this.form.controls.inputAcertijo3.value).toLowerCase().includes(this.acertijo3.toString())) {
      acertijos.tres = true;
      console.log("tres")
    }
    if (!acertijos.tres) {
      this.disabled = true;
      let interval: any;
      interval = setInterval(() => {
        this.segundos--;
        if (this.segundos === 0) {
          this.disabled = false;
          this.segundos = 10;
          clearInterval(interval);
        }
      }, 1000)
    }
    if (acertijos.uno && acertijos.dos && acertijos.tres) {
      this.s.prueba4 = true;
      console.log("es todo correcto")
    }

  }

}
