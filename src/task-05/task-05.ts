import { Movie, Genre, SearchParams, SearchResults, OrderBy, Direction } from './models';
import { MovieService } from './services';

export const searchMovies = async (params: SearchParams): Promise<SearchResults> => {
  try{
    // alapértelmezések
    const offset: number = params.offset ?? 0;
    const limit: number = params.limit ?? 12;
    const order: string = params.orderBy ?? 'title';
    const direction: string = params.direction ?? 'ASC';
    // adat lekérése
    const MOVIES: Movie[] = await MovieService.getMovies();

    // leszűrünk query-re
    let byQuery: Movie[] = [];
    if (params.query) {
      const searchQuery: string = params.query.toLowerCase();
      MOVIES.forEach((movie: Movie) => {
        const { title, overview } = movie;
        if (
          title.toLowerCase().indexOf(searchQuery) > -1 ||
          overview.toLowerCase().indexOf(searchQuery) > -1
        ) {
          byQuery.push(movie);
        }
      });
    } else {
      // ha nincs szűrés, az összes film
      byQuery = MOVIES;
    }
  
    // Genre
    let results: Movie[] = [];
    if (params.genre) {
      byQuery.forEach((movie) => {
        if (movie.genres) {
          movie.genres.forEach((genre) => {
            if (params.genre && params.genre.includes(genre)) { 
              results.push(movie);
            }
          });
        }
      });
    } else {
      results = byQuery;
    }
  
    let orderedList: Movie[] = results.sort((movie1, movie2) => {
      let result = 0;
      if ((order === 'title')) { // csak ezekre rendezhet
        result = (movie1.title).localeCompare(movie2.title);
      }
      else if (order === 'release_date') {
        result = movie1.release_date.getTime() - movie2.release_date.getTime();
      } else if (order === 'vote_average') {
        result = (movie1.vote_average ?? 0) - (movie2.vote_average ?? 0);
      }
      return direction === 'ASC' ? result : -result;
    });
    
    // offset + limit
    let finalList=orderedList.slice(offset, offset + limit);
    return Promise.resolve({
      total: !finalList.length ? finalList.length: orderedList.length,
      movies: finalList
    });

  }catch(err){
    return Promise.resolve({
      total: 0,
      movies: []
    });
  }
};