import {Player} from "./Player";

export class Stone{
    //the color in hexdemizal
    private color: string;

    //the owner
    private owner: Player;

    constructor(owner: Player, color: string){
        this.owner = owner;
        this.color = color;
    }

    public getColor() : string{
        return this.color;
    }

    public getOwner() : Player{
        return this.owner;
    }
}