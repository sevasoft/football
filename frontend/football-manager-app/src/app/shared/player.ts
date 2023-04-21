import { Team } from './team';

export interface Player {
  id: number;
  // name: string;
  birthYear: number;
  playerName: string;
  team: Team;
}
