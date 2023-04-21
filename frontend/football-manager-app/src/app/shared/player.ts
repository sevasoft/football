import { Team } from './team';

export interface Player {
  id: number;
  birthYear: number;
  playerName: string;
  team: Team;
}
