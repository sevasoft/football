import { Player } from "./player";

export interface Team {
    name: string;
    yearEstablished: number;
    isInternational: boolean;
    players: Player[];
}
