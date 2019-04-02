import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'games', loadChildren: './pages/games/games.module#GamesPageModule' },
  { path: 'games-details', loadChildren: './pages/games-details/games-details.module#GamesDetailsPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'twitch', loadChildren: './pages/twitch/twitch.module#TwitchPageModule' },
  { path: 'twitch-details', loadChildren: './pages/twitch-details/twitch-details.module#TwitchDetailsPageModule' },
  { path: 'twitch-video', loadChildren: './pages/twitch-video/twitch-video.module#TwitchVideoPageModule' },
  { path: 'twitch-video-details', loadChildren: './pages/twitch-video-details/twitch-video-details.module#TwitchVideoDetailsPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}