import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmlistPage } from './filmlist.page';

const routes: Routes = [
  {
    path: '',
    component: FilmlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmlistPageRoutingModule {}
