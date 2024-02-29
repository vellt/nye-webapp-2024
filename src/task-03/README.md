# 3. feladat - Kockák ereje
- Nehezség: **közepes**
- Pontszám: **10**

## Leírás
Egy furcsa játékban egy zsákban különböző színű kockák találhatóak: piros (`red`), zöld (`green`) és kék (`blue`). Egy-egy menet során több húzás (`draws`) történik ebből a zsákból, minden alkalommal véletlenszerűen húznak ki ezek közül. A feladat megtalálni, hogy az egyes húzások során legkevesebb melyik kockából hány darab található a zsákban az adott menet során. Egy játék erejét ezen számok szorzata jelenti, a függvény visszatérési értéke az egyes játékok erejének összege lesz (lásd magyarázatot lentebb).

## Példa
 - Bemenet:
```
  [
    {
      id: 1,
      draws: [
        { blue: 3, red: 4 },
        { red: 1, green: 2, blue: 6 },
        { green: 2 }
      ]
    },
    {
      id: 2,
      draws: [
        { blue: 1, green: 2 },
        { green: 3, blue: 4, red: 1 },
        { green: 1, blue: 1 }
      ]
    },
    {
      id: 3,
      draws: [
        { green: 8, blue: 6, red: 20 },
        { blue: 5, red: 4, green: 13 },
        { green: 5, red: 1 }
      ]
    },
    {
      id: 4,
      draws: [
        { green: 1, red: 3, blue: 6, },
        { green: 3, red: 6 },
        { green: 3, blue: 15, red: 14 }
      ]
    },
    {
      id: 5,
      draws: [
        { red: 6, blue: 1, green: 3 },
        { blue: 2, red: 1, green: 2 }
      ]
    }
  ]
```
 - Kimenet: `2286`
 - Magyarázat:
   - az első játékot legalább 4 piros, 2 zöld és 6 kék kockával játszották. Ennek a játszmának az ereje: `4*2*6`, azaz `48`
   - a második játéknál 1 piros, 3 zöld és 4 kék kockára volt szükség, így ennek az ereje `12`
   - a harmdiknál 20 piros, 13 zöld és 6 kék kocka kellett, az erősség itt: `1560`
   - a negyedik esetben legalább 14 piros, 3 zöld és 15 kék kocka volt a zsákban, az erősség: `630`
   - végül az utolsó játékot legalább 6 piros, 3 zöld és 2 kék kocka tette lehetővé, `36`-os erősséggel
 - Ezen számok összeg: `48 + 12 + 1560 + 630 + 36 = 2286`  

 ### Segítség
 A tömbök `reduce` függvénye igen hasznos lehet, ha szükíteni akarunk bizonyos értékeket.