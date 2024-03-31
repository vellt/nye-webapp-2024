type Input = Array<any>;

// rekurzív függvény, ami csak a tömböket és a szám értékeket figyeli
export const arraySum = (input: Input): number => {
  return input.reduce((sum: number, item: any) => Number.isInteger(item) ? (sum + item) : Array.isArray(item) ? (sum + arraySum(item)): sum, 0);
}