export enum Shape {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

export enum Outcome {
  WIN = 'win',
  LOOSE = 'loose',
  DRAW = 'draw',
}

export const Points: ReadonlyMap<Outcome | Shape, number> = new Map<Outcome | Shape, number>([
  [Outcome.LOOSE, 0],
  [Outcome.DRAW, 3],
  [Outcome.WIN, 6],
  [Shape.ROCK, 1],
  [Shape.PAPER, 2],
  [Shape.SCISSORS, 3],
]);

export interface RPSInput {
  shape: Shape;
  outcome: Outcome;
}
