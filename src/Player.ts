import {Stone} from "./Stone";

export class Player{
    //the name of the player
    private name: string;
    
    //the color in hexdezimal
    private color: string;

    //the stones the player has
    public stones: Stone[];

    constructor(color: string, name:string){
        this.name = name;
        this.color = color;
    }

    //Getter und Settter
    public getColor(): string{
        return this.color;
    }

    public setColor(color: string): void{
        this.color = color;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }
}