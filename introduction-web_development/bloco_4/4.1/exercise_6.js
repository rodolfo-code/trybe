let peça = "rook";

switch (peça.toLowerCase()) {
    case "king":
        console.log("king -> horizontals, verticals and diagonals");
        break;

    case "queen":
        console.log("queen -> horizontals, verticals and diagonals");
        break;

    case "bishop": 
        console.log("bishop -> diagonals");
        break;
        
    case "knight": 
        console.log("knight -> 'L' horizontals and verticals");
        break;

    case "rook":
        console.log("rook ->verticals and horizontals");
        break;
    
    case "pawn":
        console.log("pawn -> verticals");
        break;
}
