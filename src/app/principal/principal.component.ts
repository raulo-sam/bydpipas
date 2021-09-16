import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  form: FormGroup;
  palabra: string = "ganatupasta";
  constructor(private fb: FormBuilder,
    private s: ServicioService,

  ) {

    console.log('cargado');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      word_secret: ['ganatupasta',]
    })

  }
  onSubmit() {
    if ((this.form.controls.word_secret.value).toLowerCase().includes(this.palabra)) {
      this.s.mostrarPrincipal = false;
      this.s.mostrarPrueba1 = true;
      this.s.passPrincipal();
    } else {

      this.s.mostrarFalloBob();


    }
  }


}
