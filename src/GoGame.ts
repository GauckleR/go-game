import {Player} from "./Player";
import {Board} from "./Board";

export class Go_Game{
    //The two Player in the game
    private players: Player[];

    //the Board on wich the game is played
    private board: Board;

    constructor(){
        //die Spieler werden zugewiesen
        this.players[0] = new Player("#000000", "Player 1");
        this.players[1] = new Player("#FFFFFF", "Player 2");

        //das Spielbrett
        this.board = new Board(19);
    }

    public getBoard(): Board{
        return this.board;
    }
}