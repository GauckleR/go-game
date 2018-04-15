import { BoardView } from "./../view/BoardView";

export class GoGameController{
    public init(){
        let view = new BoardView(this);
        view.addOnclickListener(this);
        view.renderBoard("gogrid", 3, 40);
        // view.renderStones(["X", "", "X", "", "", "", "X", "", "", "", "", "", "", "", "", ""]);
    }

    public notifyOnclick(posX: number, posY: number): void{
        console.log("GoGameController: view notified a onclick at:", posX, posY);
    }
}