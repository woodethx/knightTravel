class Square{
    constructor(position){
        this.position = position;
        this.moves = this.validMoves();
    }
    validMoves(){
        let moves = [];
        let x = 1; let y = 2;
        for (let i = 0; i < 4; i++) {
            Math.abs(x) == 1 ? x = 2 : x = 1;
            Math.abs(y) == 1 ? y = 2 : y = 1;
            if(i>=2) x = x*-1;
            for (let j = 0; j < 2; j++) {
                x = x*-1;
                y = y*-1;
                let posX = this.position[0]+x;
                let posY = this.position[1]+y;
                if(posX<=7 && posX>=0 && posY<=7 && posY>=0) moves.push([posX,posY]);
            }
        }
        return moves;
    }
}



function knightMoves(start, end) {
    const key = ([x, y]) => `${x},${y}`;
  
    const visited = new Set([key(start)]);
    const parent  = new Map(); 
    const queue   = [new Square(start)];
  
    while (queue.length) {
      const current = queue.shift();
  
      if (key(current.position) === key(end)) {
        const path = [current.position];
        while (parent.has(key(path[0]))) {
          path.unshift(parent.get(key(path[0])));
        }
        return path;
      }
  
      current.moves.forEach(move => {
        const k = key(move);
        if (!visited.has(k)) {
          visited.add(k);
          parent.set(k, current.position);
          queue.push(new Square(move));
        }
      });
    }
  
    return null; 
  }

console.log(knightMoves([3,3],[6,6]));

