import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movies.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) { }

  getMovies(): Observable<Movie[]> {

    this.loggingService.add('MovieService: Listing Movies');
    return of(Movies);

  }

  getMovie(id): Observable<Movie> {
    this.loggingService.add('MovieService: Get detail by id = '+id)
    return of(Movies.find(movie => movie.id === id))

  }
}
