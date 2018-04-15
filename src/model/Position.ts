import { Stone } from "./Stone";

export class BoardPosition{
    //x position of the position
    private x: number;

    //y position of the position
    private y: number;

    private stone: Stone;

    constructor( x: number, y: number){
        this.x = x;
        this.y = y;
    }

    //getter and setter
    public getX() : number{
        return this.x;
    }

    public getY() : number{
        return this.y;
    }

    public getStone() : Stone{
        return this.stone;
    }

    public setStone(stone: Stone): void{
        this.stone = stone;
    }
}