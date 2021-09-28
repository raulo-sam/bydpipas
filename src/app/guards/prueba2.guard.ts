import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Injectable({
    providedIn: 'root'
})
export class Prueba2Guard implements CanActivate {
    constructor(
        private b: BackendService) { }

   async canActivate():Promise<boolean> {

      return this.b.guardPrueba2().then(check=>{
          console.log(check)
            return check
        })
            .catch(()=>{
                return false
            })
    }
}
