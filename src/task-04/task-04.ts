import { Points, RPSInput, Shape, Outcome } from './models/rock-paper-scissors';

export const rockPaperScissors = (gameSet: readonly RPSInput[]): number => {
  const sum: number = gameSet.reduce(pointCalculatorRPS, 0);
  return sum;
};

const pointCalculatorRPS= (sum: number, input: RPSInput): number => {
  const {outcome, shape} = input;
  let shapePoints: number = Points.get(shape) ?? 0;
  let outcomePoints: number = Points.get(outcome) ?? 0;

  switch (outcome) {
    case Outcome.DRAW: return sum + shapePoints + outcomePoints;
    case Outcome.WIN: return ++sum + (shapePoints % 3) + outcomePoints;
    case Outcome.LOOSE: return ++sum + (++shapePoints % 3) + outcomePoints;
  }
}