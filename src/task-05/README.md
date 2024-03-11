# 5. feladat - Keresés
- Nehezség: **nehéz**
- Pontszám: **20**

## Leírás
Ha valamilyen filmet keresünk, általában belefutunk abba, hogy csak egy-egy szóra emlékszünk belőle (ha szerencsénk van, az egyébként a leírásában is felbukkan), vagy éppen milyen fajta film volt - esetleg a kettőre együtt. Persze ha több ilyen is van, akkor azért nehezebb lesz megtalálni a nosztalgiánkat kielégítő alkotást.

A keresés mindig összetett feladat, több paramétert is kezelni kell egyszerre. Mindezt meg tudja fejelni, ha egy külső szolgáltatásból kell adatokat lekérjünk. Ami viszont itt megtalálható (`MovieService`) azonban elég buta: csak az összes elemmel tud visszatérni (`MovieService.getMovies`). A feladat, hogy megalkossunk egy használható kereső függvényt az alábbi paraméterek alapján:
- Tudjunk keresni a cím (`Movie.title`) és a leírás (`Movie.description`) alapján egy adott szóra/kifejezésre (`SearchParams.query`). A kis és nagybetű nem számít, azaz például a "batman" és "BaTmAn" azonos ebből a szempontból
- A lista szűkíthető legyen filmtípusokra (`Movie.Genre`): többet is átadhatunk paraméterként, legalább az egyikre legyen találat - ez egy logikai `OR` (vagy) feltétel ezen belül
- Ha keresési érték és a típus is adott, az egy `AND` (és) logikai kapcsolatnak felel meg.
- Lapozható listát kapjunk, azaz megszabható legyen egy határ, hogy hány elemet akarunk látni egy oldalon (`limit`) és hanyadik elemtől (`offset`) - ha ezt nem adjuk meg külsőleg, legyen az érték 12 elem ez első találattól (`{ offset: 0, limit: 12 }`)
- A kimenet taralmazza az összes megtalált elem számát (`SearchResults.total`), valamint a limitál mennyiségű film elemet (`SearchResults.movies`) a fentebbi kitételek szerint
- Legyen rendezhető (`orderBy`) a lista cím (`'title'`), a bemutató ideje (`'release_date'`) vagy az átlagos értékelés (`'vote_average'`) mezők alapján növekvő (`'ASC'`) vagy csökkenő (`'DESC'`) sorrendben (`direction`) - alapértelmezés cím szerint növevkő sorrend (`{ orderBy: 'title', direction: 'ASC' }`)
## Példa
 - Batman-hez köthető filmeket keresünk, amik közül az öt legjobbra értékelt filmet szeretnénk megtalálni:
 - Bemenet:
```
{
  query: 'batman',
  orderBy: 'vote_average',
  direction: 'DESC',
  offset: 0,
  limit: 5,
}
```
 - Kimenet:
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
 - Magyarázat: 19 Batman kifejezést tartalmazó film van a listánkban, pl. a The Dark Knight esetén csak a description mezőben található meg ez a kifejezés, még akkor is, ha mi kisbetűvel kerestünk. A találatokat az értékelés alapján csökkenő sorrenbe rendeztük és visszadtuk az első 5 elemet ebből.
```

### Segítség
- Ügyelj arra, hogy a szolgáltatás metódusa aszinkron - nincs azonnal érték, várd meg, amíg visszatér vele.
- Minden paraméter opcionális, de ha meg van adva, érvényes (most nem kell ellenőrizni). Definináld az alértelmezéseket!
- Az array függvényeknek jó hasznát veszed, pl filter, includes, some, sort
- A keresési kitételhez használhatsz reguláris kifejezést, vagy szimpla indexOf függvényt -a kis és nagybetűk különbőzéségére viszont ügyelj
- Nincsenek magyar nyelvi sajátosságok, csak az angol ABC karakterei szerepelnek az adathalmazban

### Tipp
- Szervezd ki a feladatokat különféle függvényekbe
- A TypeScript segít: használj `?` operátort, ha egy érték nem fixen elérhető (pl. `searchParams.query?.trim()`), vagy használj rövidzár kiértékelést (`searchParams.query && searchByTitle(...)`)