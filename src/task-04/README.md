# 4. feladat - Kő-papír-olló
- Nehezség: **közepes**
- Pontszám: **10**

## Leírás
A klasszikus kő-papír-olló játékot mindenki ismeri: két játékos egyszerre mutatja fel a kezét a megfelelő szimbólummal, és az nyer, aki a másikénál erősebbet adott; a kő üti az ollót, az olló elvágja a papírt, a papír pedig becsomagolja a követ. Ha ugyanazt a jelet mutatták, akkor az döntetlen.

Ebben a verzióban az adott játék kimenetétől, és a felmutatott jeltől függően pontokat kaphatunk: 
- ha nyerünk (`win`) `6` pontot szerzünk,
- ha vesztünk (`lose`) `0` pontot kapunk,
- ha döntetlen (`draw`) `3` pont üti a markunk,
- a kő (`rock`) egy pontot ér (`1`),
- a papír (`paper`) kettőt (`2`),
- míg az olló (`scissor`) hármat (`3`)

A kapott listában megkapjuk az ellenfelünk által kijátszott jelet (`shape`), valamint végkimenetet (`outcome`). A feladat, hogy egyrészt megállapítsuk, mit mutattunk fel mi és ezek alapján az adott menetben hány pontot szereztünk. A függvény visszatérési értéke ezen pontok összege lesz.

A különféle értékeket `enum` típusban tároljuk az elütések elkerülése végett (`Outcome` és `Shape`), valamint rendelkezünkre áll egy `Map` is, amiben a pontokat tudjuk lekérni jel (`Shape`) vagy kimenet (`Outcome`) alapján.

## Példa
 - Bemenet:
```
[
  { shape: Shape.ROCK, outcome: Outcome.DRAW },
  { shape: Shape.PAPER, outcome: Outcome.LOOSE },
  { shape: Shape.SCISSORS, outcome: Outcome.WIN },
]
```
 - Kimenet: `12`
 - Magyarázat:
   - az első játék döntetlen lett: ahogy az ellenfél, úgy mi is a követ játszottuk ki tehát, így a megszerzett pont itt `4` (1 a kő miatt, 3 a döntetlenért)
   - második menetben vesztettünk: az ellenfelünk papírt húzott, tehát mi ismét a kővel próbálkoztunk - ez `1` pontot ért (1 a kőért, 0 a vereségért)
   - végül a harmadik menetben a nekünk kedvezett a szerencse és kővel levertük az ellenfelünk ollóját - ez `7` pontot hozott a konyhára (1 a kőért, 6 pedig a győzelemért)
   - a kissé egysíkú játékünk végpontszáma ezáltal: `4 + 1 + 7 = 12`

### Segítség
Használj szükség szerint saját segédfüggvényt és/vagy adatszerkezetet a munka megkönnyítése érdekében.

### Tipp
Használj enumokat a stringek helyett