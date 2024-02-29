import { Draw } from './draw';

export interface Game {
  id: number;
  draws: Partial<Draw>[];
}
