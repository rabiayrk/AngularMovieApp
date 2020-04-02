import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  title = "Movies App";
  movies = Movies;

  ngOnInit(): void {
  }

}
