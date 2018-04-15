import {GoGameController} from "./../controller/GoGameController";
import {Board} from "./../model/Board";

interface ViewOnclickListener{
    notifyOnclick(posX: number, posY: number): void;
}

export class BoardView {
    private controller: GoGameController;
    private onclickListeners: ViewOnclickListener[];
    private cells: HTMLDivElement[][];

    constructor(controller: GoGameController){
        this.controller = controller;
        this.onclickListeners = [];
    }

    public renderBoard(divName: string, size: number, pixelPerCell: number): void {
        const parentDiv = document.getElementById(divName);

        this.cells = new Array<Array<HTMLDivElement>>()
        for (let i = 0; i < size; i++) {
            this.cells.push(new Array<HTMLDivElement>());
        }

        let clickGrid = document.createElement("div");
        clickGrid.style.position = "absolute";
        clickGrid.style.top = "0 px";
        clickGrid.style.left = "0 px";

        for(let i = 0; i < size; i++) {
            let rowDiv = document.createElement("div");
            rowDiv.style.width = pixelPerCell * (size) + "px";
            rowDiv.style.height = pixelPerCell + "px";

            for(let j = 0; j < size; j++) {
                var div = document.createElement("div");
                div.classList.add("cell");
                div.style.width = pixelPerCell + "px";
                div.style.height = pixelPerCell + "px";
                // div.style.outline = "1px solid red";

                div.addEventListener('click', ((posX, posY) => {
                    return () => {
                        console.log("BoardView registered a onclick at:", posX, posY);
                        for (let listener of this.onclickListeners) {
                            listener.notifyOnclick(posX, posY);
                        }
                    }
                })(size - 1 - i, j).bind(this), false);

                rowDiv.appendChild(div)
                this.cells[size - 1 - i].push(div);
            }
            clickGrid.appendChild(rowDiv);
        }

        let lineGrid = document.createElement("div");
        lineGrid.style.position = "absolute";
        lineGrid.style.top = pixelPerCell / 2 + 10 + "px";
        lineGrid.style.left = pixelPerCell / 2 + 10 + "px";

        for (let i = 0; i < size -1; i++) {
            let rowDiv = document.createElement("div");
            rowDiv.style.width = pixelPerCell * size + "px";
            rowDiv.style.height = pixelPerCell + "px";
            for (let j = 0; j < size - 1; j++) {
                var div = document.createElement("div");
                div.classList.add("cell");
                div.style.width = pixelPerCell + "px";
                div.style.height = pixelPerCell + "px";
                div.style.outline = "1px solid black";                
                rowDiv.appendChild(div)
            }
            lineGrid.appendChild(rowDiv);
        }

        parentDiv.appendChild(lineGrid);
        parentDiv.appendChild(clickGrid);
    }

    public renderStones(board: Board){
        let positions = board.getBoardPositions();
        
        for(let i = 0; i < positions.length; i++){
            for(let j = 0; j < positions[i].length; j++){
                let stone = positions[i][j].getStone();
                let cell = this.cells[i][j];

                cell.innerText = "";

                if(stone != null){
                    let stoneDiv = document.createElement("div");
                    stoneDiv.style.backgroundColor = stone.getColor();
                    stoneDiv.style.width = +(cell.offsetWidth) / 2 + "px";
                    stoneDiv.style.height = +(cell.offsetHeight) / 2 + "px";
                    stoneDiv.style.marginTop = +(cell.offsetHeight) / 4 + "px";
                    stoneDiv.style.marginLeft = +(cell.offsetWidth) / 4 + "px";
                    cell.appendChild(stoneDiv);
                }
            }
        }
    }

    public addOnclickListener(listener: ViewOnclickListener){
        this.onclickListeners.push(listener);
    }
}