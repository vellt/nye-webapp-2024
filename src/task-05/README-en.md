# Task 05 - Search
- Difficulty: **hard**
- Points: **20**

## Description
If we're looking for some kind of movie we usually realise we only remember one or two words of the title (if we're lucky it can be found in the description as well), or genre of the film - maybe both at the same time. If there are more than one movies than it will be more difficult to find the art to satisfy our nostalgy.

Searching is always a complex thing, you have to handle multiple parameters at the same time. It can be especially complicated when you request these information from an external resource. The one we have (`MovieService`) is pretty lame: it can only return the whole list (`MovieService.getMovies`). Your task is to create a usable search function depending on the following parameters:
- Find a movie by title (`Movie.title`) or (`Movie.description`) using one word or expression (`SearchParams.query`). Lower or uppercase letters does not matter, so for example "batman" and "BaTmAn" should be handled as the same
- The list can be narrowed with types (`Movie.genre`): you can get multiple one and at least one of these should match with the movie - this is a logical `OR` condition within the list
- If both the search query and type are given then it has to be handled as a logical `AND`.
- We expected a paginated list, so we can limit the number of results in a page (`limit`) and define from which index (`offset`) - if these values are not given from outside then return the first 12 element (`{ offset: 0, limit: 12 }`)
- The output is expected to contain the number of all matching items (`SearchResults.total`) and a limited number of movies (`SearchResults.movies`) found by the given search conditions
- The result can be ordered by (`orderBy`) title (`'title'`), release date (`'release_date'`) or by average vote (`'vote_average'`) fields in ascending (`'ASC'`) or descending (`'DESC'`) direction (`direction`) - by default it's ascending by title (`{ orderBy: 'title', direction: 'ASC' }`)

## Example
 - We're looking for the five best movies related to Batman.
 - Input:
```
{
  query: 'batman',
  orderBy: 'vote_average',
  direction: 'DESC',
  offset: 0,
  limit: 5,
}
```
 - Output:
```
{
  total: 19,
  movies: [
    { id: 155, title: 'The Dark Knight', vote_average: 8.3, "overview": "Batman raises the stakes in his war on crime. With the help...", ... },
    { id: 142061, title: 'Batman: The Dark Knight Returns, Part 2', vote_average: 7.9, ... },
    { id: 123025, title: 'Batman: The Dark Knight Returns, Part 1', vote_average: 7.7, ... },
    { id: 49026, title: 'The Dark Knight Rises', vote_average: 7.6, ... },
    { id: 272, title: 'Batman Begins', vote_average: 7.5, ... }
  ]
}
 - Explanation: there are 19 movies in our list containing Batman string, eg. in The Dark Knight this query can be only found within the description, even we defined it as lowercase. The result list is in descending order by average vote and we gave back the first 5 of these.
```

### Help
- The service method is async - you don't have results at once only after the promise is resolved.
- Every parameter is optional, but if given it's valid (you can skip validation this time). Don't forget to define the default values!
- You can make good use of array functions, eg. filter, includes, some, sort
- You can use regular expressions or the simple indexOf method for the search query - but be careful with upper and lowercase.
- No language specific elements, only the english alphabet characters are used in the database.

### Tip
- Create external functions for partials
- TypeScript helps: use `?` operator when a value can be falsy (pl. `searchParams.query?.trim()`), or use short circuits (`searchParams.query && searchByTitle(...)`)