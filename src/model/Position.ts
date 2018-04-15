import { Stone } from "./Stone";

export class BoardPosition{
    //x position of the position
    private x: number;

    //y position of the position
    private y: number;

    private stone: Stone;

    //the neighbour positions of the position
    public neighbours: BoardPosition[];

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

    //tests if the stone is != null and if he is surrounded
    public testSurround(): boolean{
        let isSurrounded;
        let surrounder = 0;
        let numberOfPlaces = 0;
        for(let neighbour of this.neighbours){
            if(neighbour != null){
                numberOfPlaces++;
                if(neighbour.getStone() != null){
                    surrounder++;
                }
            }
        }
        isSurrounded = surrounder == numberOfPlaces;
        return isSurrounded;
    }
}