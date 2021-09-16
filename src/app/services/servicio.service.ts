import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public mostrarPrincipal: boolean = true;
  public mostrarPrueba1: boolean = false;
  public mostrarPrueba2: boolean = false;
  public mostrarPrueba3: boolean = false;
  public mostrarPrueba4: boolean = false;
  constructor() { }

  mostrarModaChulo() {
    Swal.fire({
      title: 'Enhorabuena!!!! Has acertado la palabra!!!',
      // width: 1000,
      // fireheight:600,
      imageUrl: "./assets/dinero.gif",
      confirmButtonText: "Continuar",
      // imageHeight: 600,
      padding: '3em',
      // background: '#fff url(./assets/f.gif)',
    })
  }

  mostrarFalloBob() {
    Swal.fire({
      title: 'Sigue comiendo pipas',
      imageUrl: "./assets/fallobob.gif",
      confirmButtonText: "Continuar",
      // imageHeight: 600,
      padding: '3em',
      // background: '#fff url(./assets/f.gif)',
    })
  }
  // imageHeight: 600,
  interval: any;
  mostrarPipaTocahuevos() {
    this.interval = setInterval(() => {

      Swal.fire({
        title: '¡Hola soy la pipa TocaHuevos!',
        text: 'Y si, te voy a tocar los huevos un ratito jajaajajaj',
        imageUrl: './assets/pipa2.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }, 20000)
  }
  ocultarPipaTocahuevos() {

    clearInterval(this.interval)
  }
  async passPrincipal() {
    await Swal.fire({
      title: 'Enhorabuena!!!! Has acertado la palabra!!!',
      // width: 1000,
      // fireheight:600,
      imageUrl: "./assets/dinero.gif",
      confirmButtonText: "Continuar",
      // imageHeight: 600,
      padding: '3em',
      // background: '#fff url(./assets/f.gif)',
    })

    await Swal.fire({
      title: '¡Que te lo has creido!',
      text: 'Bueno y ahora solo queda un poquito mas, resuelve estas pruebas y recibiras tu recompensa',
      imageUrl: './assets/pipatrofeo.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  passPrueba1() {
    Swal.fire({
      title: 'Bienn estas que te sales, venga a por otra',
      imageUrl: "./assets/pipatrofeo.gif",
      imageWidth: 400,
      imageHeight: 200,
      confirmButtonText: "Continuar",
      // imageHeight: 600,
      padding: '3em',
      // background: '#fff url(./assets/f.gif)',
    })
  }
  passPrueba2() {

    Swal.fire({
      title: 'Bienn pero aun no hemos terminadoo!!!',
      imageUrl: "./assets/pipatrofeo.gif",
      imageWidth: 400,
      imageHeight: 200,
      confirmButtonText: "Continuar",
      // imageHeight: 600,
      padding: '3em',
      // background: '#fff url(./assets/f.gif)',
    })


  }
  passPrueba3() {

    Swal.fire({
      title: 'Bienn a por la ultima jajaja !!!',
      imageUrl: "./assets/risa1.gif",
      imageWidth: 400,
      imageHeight: 200,
      confirmButtonText: "Continuar",
      // imageHeight: 600,
      padding: '3em',
      // background: '#fff url(./assets/f.gif)',
    })


  }
}
