# 1. feladat - Összeg
- Nehezség: **könnyű**
- Pontszám: **5**

## Leírás
A feladat a bemenetként megkapott, többféle különböző elemet, több, különböző mélységben tartalmazó számok kigyűjtése és összeadása.

Az összegbe csak a számokat kell beszámítani!

## Példa
 - Bemenet: `[1, 2, 3, [[[4], 5], [["6"]], { obj: 10 }]]`
 - Kimenet: `15`
 - Magyarázat: az adott tömbben szereplő számok: 1, 2, 3, 4, 5. Más-más mélységben még szerepel egy 6-os, de az `string` típusú, illetve egy 10-es, de egy objektum property-jének értékeként, ezért nem kell figyelembe venni.

 ### Segítség
 Vigyázz a NaN (Not a Number) értékkel - bár szám, a végeredménybe bekavarhat!