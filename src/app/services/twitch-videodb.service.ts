import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TwitchVideodbService {
  private URL_API:string =  "https://api.twitch.tv/";
  private API_KEY:string = "qvs9gnha7qfezyg5vrmhcyw7qfv391";
  
  constructor(private http: HttpClient) { }

  //getTopTwitch(){
 //   return this.http.get(`${this.URL_API}kraken/games/top?client_id=qvs9gnha7qfezyg5vrmhcyw7qfv391${this.API_KEY}`)
  //}
  getTwitchVideo(param:string):Observable<any>{
    const url = `${this.URL_API}kraken/${param}?client_id=${this.API_KEY}`
    console.log(url);
    return this.http.get<any>(url, httpOption).pipe(
      tap(_ => console.log(`O paramentro requisitado foi: ${param}`)),
      catchError(this.handleError<any>(`Falha no getVideo parametro =${param}`))
    );
  }

  private handleError<T>(Operator = 'operation', result?: T){
    return (error: any):Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
