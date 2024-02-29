# Nyíregyházi Egyetem - Webalkalmazás-fejlesztés project alapokon - ZH feladatsor 2024

## Szükséges eszközök
- [NodeJS 20](https://nodejs.org/en)
- Yarn (opcionális): `npm install -g yarn`
- Saját github account
- TypeScript-et támogató szerkesztő

## Telepítés
Klónozd a git repository-t a saját gépedre  
`git clone [repository-url]`  
SSH használata javasolt

Futtasd parancssorból a következő kódot:  
`yarn install` vagy `npm install`

## Feladatok
Minden feladat leírása megtalálható az `src` mappán belül, saját könyvtárban.  
Ha a teljes kódodat tesztelni szeretnéd, futtasd a következő parancsot:  
`yarn test` vagy `npm run test`
Ez minden feladatra lefut, azokra is, amik még nincsenek megoldva.

Ha csak egy specifikus tesztcsoportot szeretnél kipróbálni, használd az alábbi kódot:  
`npx jest -t "task-01"`

Ha ezen belül egy adott teszteset eredményére vagy csak kíváncsi:  
`npx jest -t "task-01 should return with the sum of numbers within an array"`  

### Feltételek
1. **Legalább 35 pontot** kell összegyűjteni, a feladatok tetszés szerint választhatóak:
    1. könnyű feladat: 5 pont (task-01, task-02)
    2. közepes nehézségű feladat: 10 pont (task-03, task-04)
    3. nehéz feladat: 20 pont (task-05)
2. Csak a függvény törzsét szerkesztheted
3. A paraméterek számát és típusát nem módosíthatod, de használhatsz destruction formát (pl. `searchParams: SearchParams` => `{ query, limit }: SearchParams`)
4. A visszatérési értékek és paraméterek típusa segít
5. A teszteseteket (*.spec.ts fájlok) nem módosíthatod
6. Egy feladatot megoldottnak tekintünk, ha azt a unit teszt zöldként jelzi
7. Harmadik féltől származó kód nem használható, package.json és yarn.lock nem módosulhat
8. Közepes és nehéz feladatoknál plágium gyanúja esetén minden érintett köteles elszámolni a megoldásával

## Beadás - határidő: 2024. március 24. 23:59:59
A feladatok beadása GitHub-on keresztül történik, egy Pull request formájában.

1. Készíts egy branch-et a `main`-ből a következő formában: `{NEPTUN-KOD}/{vezeteknev-keresztnev}` (ékezetek és kapcsos zárójelek nélkül) és válts erre a branch-re
2. Módosítsd azokat a feladatokat, amiket szeretnél megoldani.
3. Miután végeztél, `git commit -m "task-01, task-04, task-05"` paranccsal készíts egy commit-ot; az üzenet tartalmazza a megoldott feladatokat
4. `git push origin {sajat-branch-ed}` paranccsal küldd fel a repository-ba
5. Készíts egy Pull request-et a saját branch-edből a `main` branch-re.
6. A direkt main commit tiltott
7. **Beadási határidő: 2024. március 24. 23:59:59.** Az utolsó commit időpontja számít. Kiértékelés 2024. március 31-ig, approve formájában. Merge tilos.

A megoldást nem fogadjuk el, ha a fenti feltételek nem teljesülnek.