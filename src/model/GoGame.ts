import {Player} from "./Player";
import {Board} from "./Board";
import {Stone} from "./Stone";

export class GoGame{
    //The two Player in the game
    private players: Player[];

    private activePlayer: Player;

    //the Board on wich the game is played
    private board: Board;

    public startNewGame(boardSize: number){
        //the players
        this.players = new Array<Player>();
        let player1 = new Player("#000000", "Player 1");
        let player2 = new Player("#FF0000", "Player 2");
        this.players.push(player1);
        this.players.push(player2);

        this.activePlayer = player1;

        //the board
        this.board = new Board(boardSize);

        //give players the stones
        for(let i = 0; i < boardSize * boardSize; i++){
            if(i % 2 == 0){
                player1.pushStone(new Stone(player1));
            }
            else{
                player2.pushStone(new Stone(player2));
            }
        }
    }

    public switchActivePlayer(): void{
        this.activePlayer = this.players[0] == this.activePlayer ? this.players[1] : this.players[0];
    }

    public getActivePlayerName(): string{
        return this.activePlayer.getName();
    }

    public makePlayerMove(posX, posY): boolean{
        let stone = this.activePlayer.popStone();
        let success = this.board.placeStone(posX, posY, stone);
        if (success)
            this.switchActivePlayer();
        
        return success;
    }

    public getBoard(): Board{
        return this.board;
    }
}