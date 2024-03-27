# Task 03 - Power of cubes
- Difficulty: **medium**
- Points: **10**

## Description
In a weird game there are cubes with different colors in a bag: red (`red`), green (`green`) and blue (`blue`) ones. In a round there are multiple draws (`draws`) from this bag, every time a random number of those are selected. Your task is to find at least how many of each cube can be found in the bag at that round. The power of the game is the product of these numbers, the return value of function is expected to be the sum of the game's power. (see explanation below)

## Example
 - Input:
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
 - Output: `2286`
 - Explanation:
   - the first game was played with at least 4 red, 2 green and 6 blue cubes. The power of this round is: `4*2*6`, so `48` 
   - in the second round 1 red, 3 green and 4 blue cube were required minimally, the power is: `12`
   - the third round 20 red, 13 green and 6 blue were added, power: `1560`
   - fourth case needed 14 red, 3 green and 15 blue cubes to be in the bag, power: `630`
   - the last game was allowed due to presence of 6 red, 3 red and 2 blue cubes, with power of `36`
 - The sum of these numbers: `48 + 12 + 1560 + 630 + 36 = 2286`  

### Help
The `reduce` method of arrays can be really useful to narrow down the items to one value.