import { Genre } from './genre';
import { Movie } from './movie';

export type OrderBy = 'title' | 'release_date' | 'vote_average';
export type Direction = 'ASC' | 'DESC';

/**
 * Keresési feltételek
 * Az egyes elemeket AND (és) logikai kapcsolat köti össze, vagyis több paraméter esetén tovább szűkül a lista
 */
export interface SearchParams {
  /**
   * a kifejezés, amire a felhasználó keres - keress a `title` vagy `overview` elemekben, kis- és nagybetűtől függetlenül 
   * opcionális, ha nincs meghatározva, akkor hagyd figyelmen kívül
   *  */
  query?: string;

  /**
   * Tömb, amiben egy adott film tipusára keresünk.
   * Egy filmnek több ilyen is lehet, találatnak számít, ha a tipusok közül legalább az egyik megtalálható benne
   * 
   */
  genre?: Genre[];

  /**
   * A találati lista rendezése milyen mező alapján történjen - alapértelmezett értéke legyen `title`
   */
  orderBy?: OrderBy;

  /**
   * A találati lista rendezése növekvő (ASC) vagy csökkenő (DESC) sorrendben történjen - alapértelmezett értéke legyen `ASC` (növekvő)
   */
  direction?: Direction;

  /**
   * hány elemet akar viszontlátni a felhaszáló; ha `undefined`, az értéke legyen 12
   * info: az értéke pozitív egész szám vagy undefined lesz (> 0)
   */
  limit?: number;

  /**
   * hányadik elemtől kell nézni a listát; ha `undefined`, az értékét 0-ként kell kezelni
   * info: az értéke nem negatív egész szám vagy undefined lesz (>= 0)
   */
  offset?: number;
}

export interface SearchResults {
  total: number;
  movies: Movie[];
}
