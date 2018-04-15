import { BoardView } from "./../view/BoardView";
import { GoGame } from "./../model/GoGame";

export class GoGameController{
    BOARD_SIZE: number = 19;
    view: BoardView;
    game: GoGame;

    public init(){
        this.view = new BoardView(this);
        this.view.addOnclickListener(this);
        this.view.renderBoard("gogrid", this.BOARD_SIZE, 40);

        this.game = new GoGame();
        this.game.startNewGame(this.BOARD_SIZE);
    }

    public notifyOnclick(posX: number, posY: number): void{
        let success = this.game.makePlayerMove(posX, posY);
        if(!success){
            alert("invalid move");
        }
        else{
            this.view.renderStones(this.game.getBoard());
        }
    }
}