import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { estado } from '../interfaces/estado';
@Injectable({
    providedIn: 'root'
})
export class BackendService {
    URL: string = "http://localhost:8081/"
    constructor(private http: HttpClient) { }




    checkPrincipal(palabra:string){
        return this.http.post<boolean>(this.URL + 'checkPrincipal',{palabra:palabra})
    }
    guardPrueba1() {
        return this.http.get<estado>(this.URL + 'guardPrueba1').toPromise();
    }
    checkPrueba1(resPrueba1:string){
        return this.http.post<boolean>(this.URL+ 'checkPrueba1',{resPrueba1})
    }
    guardPrueba2() {
        return this.http.get<estado>(this.URL + 'guardPrueba2').toPromise();
    }
    checkPrueba2(resPrueba2:string){
        return this.http.post<boolean>(this.URL+ 'checkPrueba2',{resPrueba2})
    }
    guardPrueba3() {
        return this.http.get<estado>(this.URL + 'guardPrueba3').toPromise();
    }
    checkPrueba3(resPrueba3:any){
        return this.http.post<any>(this.URL+ 'checkPrueba3',{resPrueba3})
    }
    guardPrueba4() {
        return this.http.get<estado>(this.URL + 'guardPrueba4').toPromise();
    }
    checkPrueba4(resPrueba4:any){
        return this.http.post<any>(this.URL+ 'checkPrueba4',{resPrueba4})
    }
    guardFinal() {
        return this.http.get<estado>(this.URL + 'guardFinal').toPromise();
    }
}
