import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { FilmlistPageRoutingModule } from './filmlist-routing.module';

import { FilmlistPage } from './filmlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmlistPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FilmlistPage]
})
export class FilmlistPageModule {}
