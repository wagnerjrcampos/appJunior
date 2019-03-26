import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GamesdbService {

  private URL_API:string = "https://tastedive.com/api/s";
  private API_KEY:string = "333221-GamesBR-ESDHGW1Q";

  constructor(private http: Http) { }

  getTopGames(){
    return this.http.get(`${this.URL_API}similar?q=red+hot+chili+peppers%2C+pulp+fiction=${this.API_KEY}`)
  }
}
