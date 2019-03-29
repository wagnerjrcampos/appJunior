import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TwitchVideoDetailsPage } from './twitch-video-details.page';

const routes: Routes = [
  {
    path: '',
    component: TwitchVideoDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TwitchVideoDetailsPage]
})
export class TwitchVideoDetailsPageModule {}
