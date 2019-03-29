import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TwitchVideodbService } from 'src/app/services/twitch-videodb.service';

@Component({
  selector: 'app-twitch-video',
  templateUrl: './twitch-video.page.html',
  styleUrls: ['./twitch-video.page.scss'],
})
export class TwitchVideoPage implements OnInit {

  videos = [];

  private param:string = "videos/top";

  constructor(private mDBService: TwitchVideodbService, private LoadingController: LoadingController) { }

  ngOnInit() {
    this.consultaTwitchVideo()
  }
  async consultaTwitchVideo(){
    const loading = await this.LoadingController.create({
      message: 'Carregando Videos em Alta...'
    });

    await loading.present();

    await this.mDBService.getTwitchVideo(this.param).subscribe(
      data=>{
        //page a resposta
        let resposta = (data as any)._body;
        //converte para obj JSON
        //resposta = JSON.parse(resposta);
        //atribui a resposta do array de filmes
        //this.videos = data.top;
        console.log(resposta.top);
        loading.dismiss();
      },
      error=>{
        console.log(error);
        loading.dismiss();
      }
    ).add();    
  }
}
