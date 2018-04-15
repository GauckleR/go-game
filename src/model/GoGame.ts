import {Player} from "./Player";
import {Board} from "./Board";
import {Stone} from "./Stone";

export class GoGame{
    //The two Player in the game
    private players: Player[];

    //the Board on wich the game is played
    private board: Board;

    constructor(boardSize: number){
        //the players
        this.players = new Array<Player>();
        this.players.push(new Player("#000000", "Player 1"));
        this.players.push(new Player("#FF0000", "Player 2"));

        //the board
        this.board = new Board(boardSize);
    }

    public getBoard(): Board{
        return this.board;
    }
}