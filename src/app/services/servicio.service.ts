import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'
import { BackendService } from './backend.service';
@Injectable({
    providedIn: 'root'
})
export class ServicioService {
    constructor(private b : BackendService) { }

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
    interval: any;
    mostrarPipaTocahuevos() {
        this.interval = setInterval(() => {

            Swal.fire({
                title: '¡Hola soy la pipa TocaHuevos!',
                text: 'Y te voy a tocar los huevos un ratito jajaajajaj',
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
    mostrarPavos(){

        Swal.fire({
            imageUrl: "./assets/pavos.gif",
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: "Continuar",
            padding: '3em',
        })
    }
    async passPrincipal() {
        await Swal.fire({
            title: 'Enhorabuena!!!! Has acertado la palabra!!!',
            imageUrl: "./assets/dinero.gif",
            confirmButtonText: "Continuar",
            padding: '3em',
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
            padding: '3em',
        })
    }
    passPrueba2() {

        Swal.fire({
            title: 'Bienn pero aun no hemos terminadoo!!!',
            imageUrl: "./assets/pipatrofeo.gif",
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: "Continuar",
            padding: '3em',
        })


    }
    passPrueba3() {

        Swal.fire({
            title: 'Bienn a por la ultima jajaja !!!',
            imageUrl: "./assets/risa1.gif",
            imageWidth: 400,
            imageHeight: 400,
            confirmButtonText: "Continuar",
            // imageHeight: 600,
            padding: '3em',
            // background: '#fff url(./assets/f.gif)',
        })

    }
    mostrarContraseñaFake1() {

        Swal.fire({
            imageUrl: "./assets/fake1.gif",
            imageWidth: 400,
            imageHeight: 200,
            text:"Que me meoooo",
            confirmButtonText: "Continuar",
            // imageHeight: 600,
            padding: '3em',
            // background: '#fff url(./assets/f.gif)',
        })
    }
    

    mostrarContraseñaFake2() {

        Swal.fire({
            title: 'Solo una mas por favor jajajaj',
            imageUrl: "./assets/fake2.gif",
            imageWidth: 400,
            imageHeight: 200,
            text:"Jajaj que si ahora dale al siguiente",
            confirmButtonText: "Continuar",
            // imageHeight: 600,
            padding: '3em',
            // background: '#fff url(./assets/f.gif)',
        })
    }


    mostrarContraseñaFake3() {

        Swal.fire({
            title: 'Te juro que esta es la ultima ',
            imageUrl: "./assets/fake3.gif",
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: "Continuar",
            // imageHeight: 600,
            padding: '3em',
            // background: '#fff url(./assets/f.gif)',
        })
    }


    mostrarContraseñaFake4() {

        Swal.fire({
            title: 'Esta es vuestra cara de felicidad al abrir la caja fuerte',
            imageUrl: "./assets/fake4.gif",
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: "Continuar",
            // imageHeight: 600,
            padding: '3em',
            // background: '#fff url(./assets/f.gif)',
        })
    }

    mostrarContraseña() {

        this.b.getPass().subscribe((pass:any)=>{
            
        Swal.fire({
            title: pass.pass,
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: "Continuar",
            padding: '4em',
        })
        })



    }
}
