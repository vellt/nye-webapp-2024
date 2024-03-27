# Task 02 - Unique test
- Difficulty: **easy**
- Points: **5**

## Description
The input array can contain duplicated elements, the task is to narrow down this array to unique items only. The content of the input array cannot be changed.

## Example
 - Input:
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
 - Output: 
 ```
  [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 4, name: 'c' },
    { id: 5, name: 'd' }, 
    { id: 6, name: 'g' }
  ]
 ```
 - Explanation: the duplicated items are `{ id: 2, name: 'b' }` and `{ id: 4, name: 'c' }`, so the output should contain these once.

 ### Help
 Objects are stored as references. Two objects are equal if their references are the same.