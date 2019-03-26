import { Component, OnInit } from '@angular/core';
import { GamesdbService } from 'src/app/services/gamesdb.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games = [];

  constructor(private mDBService: GamesdbService) { }

  ngOnInit() {
    this.topGames()
  }

  topGames(){
    this.mDBService.getTopGames().subscribe(
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
