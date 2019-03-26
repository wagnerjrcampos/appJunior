import { Component, OnInit } from '@angular/core';
import { TwitchdbService } from 'src/app/services/twitchdb.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.page.html',
  styleUrls: ['./twitch.page.scss'],
})
export class TwitchPage implements OnInit {
  twitch = [];

  constructor(private mDBService: TwitchdbService) { }

  ngOnInit() {
    this.topTwitch()
  }

  topTwitch(){
    this.mDBService.getTopTwitch().subscribe(
      data=>{
        //page a resposta
        let resposta = (data as any)._body;
        //converte para obj JSON
        resposta = JSON.parse(resposta);
        //atribui a resposta do array de filmes
        //this.games = resposta;
        console.log(resposta);
      },
      error=>{
        console.log(error);
      }
    ).add();    
  }

}
