import {GoGameController} from "./GoGameController";

interface ViewOnclickListener{
    notifyOnclick(posX: number, posY: number): void;
}

export class BoardView {
    private controller: GoGameController;
    private onclickListeners: ViewOnclickListener[];
    private cells: HTMLDivElement[];

    constructor(controller: GoGameController){
        this.controller = controller;
        this.onclickListeners = [];
        this.cells = [];
    }

    public renderBoard(divName: string, size: number, pixelPerCell: number): void {
        const parentDiv = document.getElementById(divName);

        let clickGrid = document.createElement("div");
        clickGrid.style.position = "absolute";
        clickGrid.style.top = "0 px";
        clickGrid.style.left = "0 px";

        for(let i = 0; i < size + 1; i++) {
            let rowDiv = document.createElement("div");
            rowDiv.style.width = pixelPerCell * (size + 1) + "px";
            rowDiv.style.height = pixelPerCell + "px";

            for(let j = 0; j < size + 1; j++) {
                var div = document.createElement("div");
                div.classList.add("cell");
                div.style.width = pixelPerCell + "px";
                div.style.height = pixelPerCell + "px";
                div.style.outline = "1px solid red";

                div.addEventListener('click', ((posX, posY) => {
                    return () => {
                        console.log("BoardView registered a onclick at:", posX, posY);
                        for (let listener of this.onclickListeners) {
                            listener.notifyOnclick(posX, posY);
                        }
                    }
                })(j, size - i).bind(this), false);

                rowDiv.appendChild(div)
                this.cells.push(div);
            }
            clickGrid.appendChild(rowDiv);
        }

        let lineGrid = document.createElement("div");
        lineGrid.style.position = "absolute";
        lineGrid.style.top = pixelPerCell / 2 + 10 + "px";
        lineGrid.style.left = pixelPerCell / 2 + 10 + "px";

        for (let i = 0; i < size; i++) {
            let rowDiv = document.createElement("div");
            rowDiv.style.width = pixelPerCell * size + "px";
            rowDiv.style.height = pixelPerCell + "px";
            for (let j = 0; j < size; j++) {
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

    public renderStones(stones: string[]){
        for(let cell of this.cells){
            cell.innerText = "";
        }

        for(let i = 0; i < this.cells.length; i++){
            let cell = this.cells[i];
            cell.innerText = stones[i];
        }
    }

    public addOnclickListener(listener: ViewOnclickListener){
        this.onclickListeners.push(listener);
    }
}