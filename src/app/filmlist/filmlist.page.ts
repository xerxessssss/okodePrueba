import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.page.html',
  styleUrls: ['./filmlist.page.scss'],
})
export class FilmlistPage implements OnInit {

  popfilms = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ca05fd181a8a83164a05eb201faf6c9c&language=es&page=1')
    .subscribe(res => {
      console.log(res);
      this.popfilms = res.results;
    });
  }

}
