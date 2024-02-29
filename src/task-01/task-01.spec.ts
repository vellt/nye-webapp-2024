import { arraySum } from './task-01';

const TESTS = [
  {
    input: [1, 2, 5, 9, 42, 12481334, -2412, 6341, -564984],
    output: 11920338,
  },
  {
    input: [5, 6, [3, "9", [[{a: 50}], 2]], NaN],
    output: 16,
  }
];

describe('task-01', () => {
  it('should export the arraySum function', () => {
    expect(arraySum).toBeDefined();
    expect(typeof arraySum).toBe('function');
  });

  test.each(TESTS)(
    'should return with the sum of numbers within an array',
    (testItem) => {
      expect(arraySum(testItem.input)).toEqual(testItem.output);
    }
  );
});
