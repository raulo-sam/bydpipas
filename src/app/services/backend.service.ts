import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class BackendService {
    URL: string = "https://bryanpipas.herokuapp.com/"
    // URL: string = "http://localhost:8081/"
    constructor(private http: HttpClient) { }




    principal(){
        return this.http.get<boolean>(this.URL + 'principal').toPromise();
    }
    checkPrincipal(palabra:string){
        return this.http.post<boolean>(this.URL + 'checkPrincipal',{palabra:palabra})
    }
    guardPrueba1() {
        return this.http.get<boolean>(this.URL + 'guardPrueba1').toPromise();
    }
    checkPrueba1(resPrueba1:string){
        return this.http.post<boolean>(this.URL+ 'checkPrueba1',{resPrueba1})
    }
    guardPrueba2() {
        return this.http.get<boolean>(this.URL + 'guardPrueba2').toPromise();
    }
    checkPrueba2(resPrueba2:string){
        return this.http.post<boolean>(this.URL+ 'checkPrueba2',{resPrueba2})
    }
    guardPrueba3() {
        return this.http.get<boolean>(this.URL + 'guardPrueba3').toPromise();
    }
    checkPrueba3(resPrueba3:any){
        return this.http.post<any>(this.URL+ 'checkPrueba3',{resPrueba3})
    }
    guardPrueba4() {
        return this.http.get<boolean>(this.URL + 'guardPrueba4').toPromise();
    }
    checkPrueba4(resPrueba4:any){
        return this.http.post<any>(this.URL+ 'checkPrueba4',{resPrueba4})
    }
    guardFinal() {
        return this.http.get<boolean>(this.URL + 'guardFinal').toPromise();
    }
    getPass(){
        return this.http.get<string>(this.URL + 'getPass')
    }
}
