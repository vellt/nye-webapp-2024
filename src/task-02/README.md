# 2. feladat - Egyediség-vizsgálat
- Nehezség: **könnyű**
- Pontszám: **5**

## Leírás
A bemenetként kapott tömb több, duplikált elemet tartalmazhat, a feladat ennek a tömbnek a leszűkítése egyedi objekumlistára. A bemeneti elem tartalma nem változhat.

## Példa
 - Bemenet:
```
  [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 4, name: 'c' },
    { id: 5, name: 'd' },
    { id: 4, name: 'c' },
    { id: 2, name: 'b' },
    { id: 6, name: 'e' }
  ]
```
 - Kimenet: 
 ```
  [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 4, name: 'c' },
    { id: 5, name: 'd' }, 
    { id: 6, name: 'g' }
  ]
 ```
 - Magyarázat: a tömbben szereplő azonosítók közül 2-es és a 4-es, ami egynél többször fordul elő: `{ id: 2, name: 'b' }` és `{ id: 4, name: 'c' }`, a kimeneti érték csak 

 ### Segítség
 Az objektumok referenciaként vannak tárolva. Két objektum akkor és csak akkor egyezik meg, ha ez a referencia ugyanoda mutat.