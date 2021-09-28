import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {


  form: FormGroup;
 quitaholores: string = "quitaolores";

  constructor(private fb: FormBuilder,
    private s: ServicioService,

  ) {
    console.log('cargado');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      inputQuitaholores: ['quitaolores',]
    })


  }

  onSubmit() {
    if (this.form.controls.inputQuitaholores.value == this.quitaholores) {
      // this.s.mostrarPrueba2 = false;
      // this.s.mostrarPrueba3 = true;
      this.s.passPrueba2();
    }
    else {

      this.s.mostrarFalloBob();
    }
  }

}
