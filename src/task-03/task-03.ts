import { Draw, Game } from './models';

export const minimalCubeSet = (games: Game[]): number => {
    const sum: number = games.reduce((sum: number, game: Game) => sum + multiplicationOfDraws(game.draws), 0);
    return sum;
};

const multiplicationOfDraws = (draws: Partial<Draw>[]): number => {
    const maxValues: Draw = draws.reduce(highestOccurrence, { blue: 0, green: 0, red: 0 });
    const multipliaction: number = valueOf(maxValues.blue) * valueOf(maxValues.red) * valueOf(maxValues.green);
    return multipliaction;
}

const valueOf = (number: number): number => {
    return number === 0 ? 1 : number;
}

const highestOccurrence = (maxValues: Draw, draw: Partial<Draw>): Draw => {
    return {
      blue: Math.max(maxValues.blue, draw.blue ?? 0),
      green: Math.max(maxValues.green, draw.green ?? 0),
      red: Math.max(maxValues.red, draw.red ?? 0)
    };
}
