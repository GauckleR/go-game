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
        this.neighbours = new Array<BoardPosition>();
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
    public testSurround(testedInGroup: BoardPosition[], pos: BoardPosition, allBoardPositions: BoardPosition[][], size: number): boolean{
        let isSurrounded = false;
        let neighbours = new Array<BoardPosition>();
        let x = pos.getX();
        let y = pos.getY();
        neighbours[0] = x-1 >= 0 ? allBoardPositions[x-1][y] : null;
        neighbours[1] = y-1 >= 0 ? allBoardPositions[x][y-1] : null;
        neighbours[2] = x+1 < size ? allBoardPositions[x+1][y] : null;
        neighbours[3] = y+1 < size ? allBoardPositions[x][y+1] : null;
        let surrounder = 0;
        let possibleSurrounder = 0;
        let neighboursSurrounded = new Array<boolean>();
        testedInGroup.push(pos);
        if(pos.getStone() != null){
            for(let neighbour of neighbours){
                if(neighbour != null){
                    possibleSurrounder++;
                    if(neighbour.getStone() != null){
                        surrounder++;
                        let isTested = false;
                        for(let testedNeighbour of testedInGroup){
                            if(testedNeighbour == neighbour){
                                isTested = true;
                                break;
                            }
                        }
                        if(neighbour.getStone().getOwner() == pos.getStone().getOwner() && !isTested){
                            neighboursSurrounded.push(this.testSurround(testedInGroup, neighbour, allBoardPositions, size));
                        }
                    }
                }
            }
            isSurrounded = possibleSurrounder == surrounder;
            if(isSurrounded){
                
            }
            for(let surround of neighboursSurrounded){
                if(!surround){
                    isSurrounded = false;
                    break;
                }
                else{
                    isSurrounded = true;
                }
            }
        }
        return isSurrounded;
    }
}