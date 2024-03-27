# Task 01 - Sum
- Difficulty: **easy**
- Points: **5**

## Description
Find and sum up all the numbers in the given input array no matter on the depth where it can be found.

The sum is expected to include numbers only!

## Példa
 - Input: `[1, 2, 3, [[[4], 5], [["6"]], { obj: 10 }]]`
 - Output: `15`
 - Explanation: the numbers in this input are: 1, 2, 3, 4, 5. It also contains a 6, but it has `string` type; and a 10, but within an object property - these should be skipped.

 ### Help
 Be careful with NaN (Not a Number) - even though it has a number type it could cause problems in the end result.