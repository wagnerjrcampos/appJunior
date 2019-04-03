import { Component, OnInit } from '@angular/core';
import { TwitchdbService } from 'src/app/services/twitchdb.service';
import { LoadingController } from '@ionic/angular';
import { RateService } from 'src/app/services/rate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.page.html',
  styleUrls: ['./twitch.page.scss'],
})
export class TwitchPage implements OnInit {
  
  games = [];
  width = 355;
  height = 200;

  private param:string = "games/top";

  private avaliacao = {
    "id": null,
    "game_id": null,
    "rating": null
  }

  constructor(private mDBService: TwitchdbService, private LoadingController: LoadingController, private rate:RateService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.consultaTwitch()
  }

  async consultaTwitch(index?){
    const loading = await this.LoadingController.create({
      message: 'Carreagando Games em Alta...'
    });

    await loading.present();

    await this.mDBService.getTwitch(this.param).subscribe(
      data=>{
        //page a resposta
        let resposta = (data as any)._body;
        //converte para obj JSON
        //resposta = JSON.parse(resposta);
        //atribui a resposta do array de filmes
        this.games = data.top;
        //console.log(resposta.top);]
        loading.dismiss();
      },
      error=>{
        console.log(error);
        loading.dismiss();
      }
    ).add();  
    }  
    doRefresh(event) {
      this.consultaTwitch('Caiu');
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }

    
  async registraAvaliacao(id){
    console.log(id);
    await this.rate.addRate(this.avaliacao).subscribe(
      result=>{
          
      },
        error => {
          console.error();
      }
    )
  }
}
