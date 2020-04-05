import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService} from '../movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MovieService) {}

  title = "Movies App";
  movies: Movie[]
  selectedMovie: Movie;

  onSelect(movie:Movie):void {
    this.selectedMovie = movie;
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    this.movieService.getMovies()
                      .subscribe(movies => { this.movies = movies});
  }

}
