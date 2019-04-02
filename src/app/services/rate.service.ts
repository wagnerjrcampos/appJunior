import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const URL_API = `http://localhost:3000/rating`;

//Encaminha o cabeçalho da requisição
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json;charset=utf-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpClient) { }

  getRate(param:string = ""):any {
    return this.http.get<any>(`${URL_API}${param}`,httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar os dados'))
    );
  }

  addRate(rate):Observable<any>{
    return this.http.post(URL_API, rate, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao registra a avaliação'))
    )
  }

  updateRate(rate):Observable<any>{
  return this.http.put(`${URL_API}/${rate.id}`, rate, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao atualizar a avaliação'))
    )
  }

  //método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T){
    return (error: any):Observable<T> => {
      console.error(error); //log do erro na console

      //mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}
