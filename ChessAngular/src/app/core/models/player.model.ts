import { Tournament } from "./tournament.model";

export interface Player{
  "id": string,
  "login": string,
  "email": string,
  "password": string,
  "birthdate": string,
  "elo": number,
  "playerGender": number,
  "playerRole": number,
  "tournaments"?: Tournament[]
}
