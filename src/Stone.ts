import {Player} from "./Player";

export class Stone{
    //the color in hexdemizal
    private color: string;

    //the owner
    private owner: Player;

    constructor(owner: Player){
        this.owner = owner;
        this.color = owner.getColor();
    }

    public getColor() : string{
        return this.color;
    }

    public getOwner() : Player{
        return this.owner;
    }
}