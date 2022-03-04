import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.page.html',
  styleUrls: ['./filmlist.page.scss'],
})
export class FilmlistPage implements OnInit {

  popfilms = [];
  pag: number;
  searchTerm: string;

  constructor(private http: HttpClient) {
    this.pag = 1;
    this.searchTerm = '';
  }

  ngOnInit() {
    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ca05fd181a8a83164a05eb201faf6c9c&language=es&page=1')
    .subscribe(res => {
      console.log(res);
      this.popfilms = res.results;
    });
  }

  buscar(searchTerm) {
    this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=ca05fd181a8a83164a05eb201faf6c9c&query='
      + searchTerm + '&language=es')
    .subscribe(res => {
      console.log('https://api.themoviedb.org/3/search/movie?api_key=ca05fd181a8a83164a05eb201faf6c9c&query='
      + searchTerm + '&language=es');
      this.popfilms = res.results;
    });
  }

  siguiente() {
    this.pag++;
    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ca05fd181a8a83164a05eb201faf6c9c&language=es&page='
      + this.pag)
    .subscribe(res => {
      console.log(res);
      this.popfilms = res.results;
    });
  }

  anterior() {
    if(this.pag <= 1) {
      this.pag = 1;
      this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ca05fd181a8a83164a05eb201faf6c9c&language=es&page='
      + this.pag)
    .subscribe(res => {
      console.log(res);
      this.popfilms = res.results;
    });
    } else {
      this.pag--;
      this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ca05fd181a8a83164a05eb201faf6c9c&language=es&page='
      + this.pag)
    .subscribe(res => {
      console.log(res);
      this.popfilms = res.results;
    });
    }
  }
}
