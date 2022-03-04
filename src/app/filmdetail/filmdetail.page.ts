import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.page.html',
  styleUrls: ['./filmdetail.page.scss'],
})
export class FilmdetailPage implements OnInit {

  filmId: string;
  film;

  constructor(private activatedRoute: ActivatedRoute, 
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpClient.get('https://api.themoviedb.org/3/movie/' + this.filmId + '?api_key=ca05fd181a8a83164a05eb201faf6c9c&language=es')
    .subscribe(res => {
      this.film = res;
    });
  }

}
