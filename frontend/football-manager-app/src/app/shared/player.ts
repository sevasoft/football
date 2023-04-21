import { Team } from "./team";

export interface Player {
    id: number;
    name: string;
    yearOfBirth: number;
    team: Team;
}
