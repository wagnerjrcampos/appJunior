import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './services/config.service';
import { AppRoutingModule } from './app-routing.module';
import { SlidesPage } from './pages/slides/slides.page';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage:any = AppRoutingModule;
  
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Games em alta Twitch',
      url: '/twitch',
      icon: 'logo-twitch'
    },
    {
      title: 'Videos em alta Twitch',
      url: '/twitch-video',
      icon: 'logo-twitch'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,private ConfigService: ConfigService
  ) {
    this.initializeApp();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let config = ConfigService.getConfig();

      if(config == null) {
        this.rootPage = SlidesPage;
      }else{
        this.rootPage = HomePage;
      }
    });
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
