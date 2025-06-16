class Square{
    constructor(position){
        this.position = position;
        this.moves = [];
    }
    validMoves(){
        let x = 1; let y = 2;
        for (let i = 0; i < 4; i++) {
            x == 1 ? x = 2 : x = 1;
            y == 1 ? y = 2 : y = 1;
            // console.log("Outside: "+x, y);
            for (let j = 0; j < 2; j++) {
                x = x*-1;
                y = y*-1;
                console.log("Inside: "+ x, y);
            }
        }
    }
}

const square = new Square([3,3]);
square.validMoves();

