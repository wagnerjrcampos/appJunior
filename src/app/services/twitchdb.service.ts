import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TwitchdbService {
  private URL_API:string =  "https://api.twitch.tv/";
  private API_KEY:string = "gayggeb4accacqx44o55ktjgxr9seg";
  
  constructor(private http: Http) { }

  getTopTwitch(){
    return this.http.get(`${this.URL_API}kraken/games/top?api_key=${this.API_KEY}`)
  }
}
