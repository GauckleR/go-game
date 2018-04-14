import {Stone} from "./Stone";
import {BoardPosition} from "./Position";
import {Player} from "./Player";

export class Board {
    //the number of intersections per line
    private size: number;

    //the positions on the board and wich stone is at the postion
    private boardPositions: (BoardPosition[])[];

    constructor(size: number){
        this.size = size;
        
        for(let x = 0; x< size; x++){
            let positions = new Array<BoardPosition>();
            for(let y =0; y < size; y++){
                positions[y] = new BoardPosition(x,y);
            }
            this.boardPositions[x] = positions;
        }
    }
    
    //getter and setter
    public getSize() : number{
        return this.size;
    }
    public setSize(size: number): void{
        this.size = size;
    }

    //places a Stone at pox XY
    public placeStone(posX: number, poxY: number, stone: Stone): Boolean{
        let isPlaceAble = false;
        if((this.boardPositions[posX])[poxY].getStone() == null){
            (this.boardPositions[posX])[poxY].setStone(stone);
            isPlaceAble = true;
        }
        return isPlaceAble;
    }

    //says, where a Stone is placed
    public getBordState(): BoardPosition[]{
        let positions = new Array<BoardPosition>();
        let counter = 0;
        for(let x = 0; x< this.size; x++){
            for(let y = 0; y< this.size; y++){
                if((this.boardPositions[x])[y].getStone() != null){
                    //adds all positions with a stone to the positions Array
                    positions[counter] = (this.boardPositions[x])[y];
                    counter++;
                }
            }
        }
        return positions;
    }

    //counts the stones of one player (needs a player)
    public getScore(player: Player): number{
        let counter = 0;
        for(let x = 0; x<this.size; x++){
            for(let y = 0; y < this.size; y++){
                if((this.boardPositions[x])[y].getStone() != null){
                    //All stones with the right player are added to the counter
                    if(((this.boardPositions[x])[y].getStone()).getOwner() == player){
                        counter++;
                    }
                }
            }
        }
        return counter;
    }
}