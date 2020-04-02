import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies.datasource';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  title = "Movies App";
  movies = Movies;
  selectedMovie: Movie;

  onSelect(movie:Movie):void {

    this.selectedMovie = movie;

  }

  ngOnInit(): void {
  }

}
