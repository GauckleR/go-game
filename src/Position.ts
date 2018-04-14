export class BoardPosition{
    //x position of the position
    private x: number;

    //y position of the position
    private y: number;

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
}