import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RateService } from 'src/app/services/rate.service';


@Component({
  selector: 'app-twitch-details',
  templateUrl: './twitch-details.page.html',
  styleUrls: ['./twitch-details.page.scss'],
})
export class TwitchDetailsPage implements OnInit {

  private avaliacao = {
    "id": null,
    "game_id":this.route.snapshot.paramMap.get('id'),
    "rating": null
  }

  constructor(private route: ActivatedRoute, private rate:RateService) { }

  ngOnInit() {
   
  }

  async registraAvaliacao(id){
    await this.rate.addRate(this.avaliacao).subscribe(
      result=>{
        
      },
      error => {
        console.error();
      }
    )
  }
}
