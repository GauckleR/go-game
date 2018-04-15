import {Player} from "./Player";
import {Board} from "./Board";

export class Go_Game{
    //The two Player in the game
    private players: Player[];

    //the Board on wich the game is played
    private board: Board;

    constructor(){
        //the players
        this.players = new Array<Player>();
        this.players.push(new Player("#000000", "Player 1"));
        this.players.push(new Player("#FFFFFF", "Player 2"));

        //the board
        this.board = new Board(19);
    }

    public getBoard(): Board{
        return this.board;
    }
}