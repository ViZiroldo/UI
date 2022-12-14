import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ListPlayerComponent } from './list-player/list-player.component';
import { InsertEditPlayerComponent } from './insert-edit-player/insert-edit-player.component';
import { PlayerService } from './services/player.service';

export const option: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListPlayerComponent,
    InsertEditPlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  // providers: [
  //   PlayerService
  // ]
})
export class PlayerModule { }
