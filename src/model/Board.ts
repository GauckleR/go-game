import {Stone} from "./Stone";
import {BoardPosition} from "./Position";
import {Player} from "./Player";

export class Board {
    //the number of intersections per line
    private size: number;

    //the positions on the board and wich stone is at the postion
    private boardPositions: BoardPosition[][];

    constructor(size: number){
        this.size = size;
        
        this.boardPositions = new Array<Array<BoardPosition>>();
        for(let x = 0; x< size; x++){
            let positions = new Array<BoardPosition>();
            for(let y =0; y < size; y++){
                positions[y] = new BoardPosition(x,y);
            }
            this.boardPositions.push(positions);
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
    public placeStone(posX: number, poxY: number, stone: Stone): boolean{
        let isPlaceAble = false;
        if(this.boardPositions[posX][poxY].getStone() == null){
            this.boardPositions[posX][poxY].setStone(stone);
            isPlaceAble = true;
        }
        return isPlaceAble;
    }

    //says, where a Stone is placed
    public getBordState(): BoardPosition[]{
        let positions = new Array<BoardPosition>();
        for(let row of this.boardPositions){
            for(let cell of row){
                if (cell.getStone() != null){
                    positions.push(cell);
                }
            }
        }
        return positions;
    }

    public getBoardPositions(): BoardPosition[][]{
        return this.boardPositions;
    }

    //counts the stones of one player (needs a player)
    public getScore(player: Player): number{
        let counter = 0;
        for(let x = 0; x<this.size; x++){
            for(let y = 0; y < this.size; y++){
                if(this.boardPositions[x][y].getStone() != null){
                    //All stones with the right player are added to the counter
                    if((this.boardPositions[x][y].getStone()).getOwner() == player){
                        counter++;
                    }
                }
            }
        }
        return counter;
    }

    //sets the four neighbour (can be less at the border of the game board)
    public setNeighbour() : void{
        for(let x = 0; x < this.size; x++){
            for(let y = 0; y< this.size; y++){
                let pos = this.boardPositions[x][y];
                let neigbour1 = x-1 >= 0 ? this.boardPositions[x-1][y] : null;
                let neigbour2 = y-1 >= 0 ? this.boardPositions[x][y-1] : null;
                let neigbour3 = x+1 < this.size ? this.boardPositions[x+1][y] : null;
                let neigbour4 = y+1 < this.size ? this.boardPositions[x][y+1] : null;
                pos.neighbours.push(neigbour1,neigbour2,neigbour3,neigbour4);
            }
        }
    }
}