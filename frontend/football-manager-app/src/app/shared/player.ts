import { Team } from "./team";

export interface Player {
    name: string;
    yearOfBirth: number;
    team: Team;
    image: string;
}
