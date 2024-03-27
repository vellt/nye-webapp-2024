# Task 04 - Rock-paper-scissors
- Difficulty: **medium**
- Points: **10**

## Description
The classical rock-paper-scissors game is well known for everybody: two players show their hand with one symbol and who gives the stronger wins; rock beats scissors, scissors cuts paper and paper wrap up the rock. If the same sign was shown it's a draw.

In this version depending on the result and the sign you used you earn points:
- If you win (`win`) you get `6` points,
- When you lose (`lose`) `0` were given,
- On draw (`draw`) you earns `3`points,
- The rock (`rock`) worth one (`1`) point,
- The paper (`paper`) means two (`2`),
- While scissors (`scissor`) three (`3`)

In the given input list we got the sign of our oppenent (`shape`) and the result of the round (`outcome`). Your task is to figure out what sign you played and how much points you earned. The return value of the function is the sum of these numbers.

The different values are stored in an `enum` types (`Outcome` and `Shape`) to avoid typos and we also have a `Map` containing the points of signs (`Shape`) and the outcome (`Outcome`).

## Example
 - Input:
```
[
  { shape: Shape.ROCK, outcome: Outcome.DRAW },
  { shape: Shape.PAPER, outcome: Outcome.LOOSE },
  { shape: Shape.SCISSORS, outcome: Outcome.WIN },
]
```
 - Output: `12`
 - Explanation:
   - the first game was a draw: just as the opponent as we played rock, which gave you `4` points (1 for the rock and 3 for the draw)
   - we lose in the second round: our opponent choosed paper, so we tried rock again - this meant `1` point (1 for the rock, 0 for losing)
   - in the last game we finally won and we beat the scissors of the opponent with the rock - that brought `7` points to the kitchen (1 for the rock and 6 for winning)
   - so the total points of our somewhat flat game: `4 + 1 + 7 = 12`

### Help
Create additional functions and/or data structures to make your work easier.

### Tip
Use enums instead of strings