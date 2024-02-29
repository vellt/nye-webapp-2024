import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { Genre, Movie, RawMovie } from '../models';

const movieFactory = (rawMovieData: RawMovie): Movie => {
  const [year, month, day] = rawMovieData.release_date.split("-");
  const releaseDate = new Date();
  releaseDate.setFullYear(Number(year));
  releaseDate.setMonth(Number(month) - 1);
  releaseDate.setDate(Number(day));
  return {
    ...rawMovieData,
    release_date: releaseDate,
    genres: rawMovieData.genres && (rawMovieData.genres as Genre[]),
  } as Movie;
};

class MovieServiceImpl {
  async getMovies(): Promise<Movie[]> {
    const rawMovies = await readFile(resolve(__dirname, './movies.json'), 'utf8');
    return JSON.parse(rawMovies).map(movieFactory);
  }
}

export const MovieService = new MovieServiceImpl();
