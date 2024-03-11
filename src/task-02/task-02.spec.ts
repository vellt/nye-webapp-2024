import { Item, uniqueFilter } from './task-02';

describe('task-02', () => {
  interface TestCase {
    input: Item[],
    output: Item[],
  }
  const TEST_CASES: TestCase[] = [
    {
      input: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 4, name: 'c' },
        { id: 5, name: 'd' },
        { id: 4, name: 'e' },
        { id: 2, name: 'f' },
        { id: 6, name: 'g' },
      ],
      output: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 4, name: 'c' },
        { id: 5, name: 'd' }, 
        { id: 6, name: 'g' },
      ],
    }
  ];

  it('should be defined', () => {
    expect(uniqueFilter).toBeDefined();
    expect(typeof uniqueFilter).toBe('function');
  });

  test.each(TEST_CASES)('should return an array containing unique items only', ({ input, output }) => {
    const originalLength = input.length;
    const result = uniqueFilter(input);
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(output.length);
    expect(result).toEqual(output);
    expect(input).toHaveLength(originalLength); //no changes applyied in the input
  });
});