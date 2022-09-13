import { Player } from "./player.model";

export interface Tournament{
  "id" : string,
  "name" : string,
  "location" : string,
  "minimumPlayers": number,
  "maximumPlayers": number,
  "eloMin": number,
  "eloMax": number,
  "categories": string[],
  "womenOnly": boolean,
  "currentState": number,
  "currentRound": number,
  "endOfRegistrationDate": Date,
  "creationDate": Date,
  "updateDate": Date,
  "numberOfPlayers": number,
  "canRegister": boolean,
  "isRegistered": boolean,
  "participants"?: Player[]
}
