import { Player } from "./player";

export interface Team {
    id: number;
    name: string;
    yearEstablished: number;
    isInternational: boolean;
    image: string;
    description: string;
}
