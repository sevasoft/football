import { Team } from './team';

export interface Player {
  id: number;
  birthYear: number;
  name: string;
  team: Team;
}
