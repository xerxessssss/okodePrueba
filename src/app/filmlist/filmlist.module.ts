import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmlistPageRoutingModule } from './filmlist-routing.module';

import { FilmlistPage } from './filmlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmlistPageRoutingModule
  ],
  declarations: [FilmlistPage]
})
export class FilmlistPageModule {}
