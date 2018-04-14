import {Stone} from "./Stone";
import {BoardPosition} from "./Position";
import {Player} from "./Player";

export class Board {

    //the number of intersections per line
    private size: number;

    //the positions on the board and wich stone is at the postion
    private boardPositions: BoardPosition[][];
    
    //getter and setter
    public getSize() : number{
        return this.size;
    }
    public setSize(size: number): void{
        this.size = size;
    }

    //places a Stone at pox XY (needs a Stone!!!)
    public placeStone(posX: number, poxY: number, stone: Stone): Boolean{
        return true;
    }

    //says, where a Stone is placed
    public getBordState(): void{

    }

    //counts the stones of one player (needs a player)
    public getScore(player: Player): number{
        return 0;
    }
}