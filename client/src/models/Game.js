import { CurrentUser } from "./Users";

export const Players = [
    {Name: 'Charu', Score: 0, isDealer: false}
];

export const MyCards = [];

export const PictureDeck = [
    
];

export const CaptionsDeck = [
    
];

export let CurrentPicture = "";

export const CardsInPlay = [

];

export function Init(){

    Players.push( { Name: CurrentUser.Name, Score: 0, isDealer: true} )
    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}