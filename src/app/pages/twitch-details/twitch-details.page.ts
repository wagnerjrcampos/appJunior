import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-twitch-details',
  templateUrl: './twitch-details.page.html',
  styleUrls: ['./twitch-details.page.scss'],
})
export class TwitchDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

}
