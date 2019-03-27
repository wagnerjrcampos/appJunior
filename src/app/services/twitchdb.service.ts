import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TwitchdbService {
  private URL_API:string =  "https://api.twitch.tv/";
  private API_KEY:string = "qvs9gnha7qfezyg5vrmhcyw7qfv391";
  
  constructor(private http: Http) { }

  getTopTwitch(){
    return this.http.get(`${this.URL_API}kraken/games/top?client_id=${this.API_KEY}`)
  }
}

//https://api.twitch.tv/kraken/games/top?client_id=qvs9gnha7qfezyg5vrmhcyw7qfv391