import { BoardView } from "./../view/BoardView";
import { GoGame } from "./../model/GoGame";

export class GoGameController{
    BOARD_SIZE: number = 5;
    view: BoardView;
    game: GoGame;

    public init(){
        this.view = new BoardView(this);
        this.view.addOnclickListener(this);

        this.game = new GoGame(this.BOARD_SIZE);

        this.view.renderBoard("gogrid", this.BOARD_SIZE, 40);
    }

    public notifyOnclick(posX: number, posY: number): void{
        this.view.renderStones(this.game.getBoard());
    }
}