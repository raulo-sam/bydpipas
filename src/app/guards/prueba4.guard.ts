import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { estado } from '../interfaces/estado';
import { BackendService } from '../services/backend.service';

@Injectable({
    providedIn: 'root'
})
export class Prueba4Guard implements CanActivate {
    constructor(
        private b: BackendService,
        private router:Router
        ) { }

   async canActivate():Promise<boolean> {

      return this.b.guardPrueba4().then(check=>{
            if(check){
                return true
            }
            this.router.navigate([`/principal`])
            return false
        })
            .catch(()=>{
                return false
            })
    }
}
