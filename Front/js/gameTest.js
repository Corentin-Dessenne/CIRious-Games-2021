(function() {
    let player1 = new player(0, "Armand", 190, 20);
    let player2 = new player(1, "Marie", 181, 18); 
    let player3 = new player(2, "Corentin", 176, 19); 
    let player4 = new player(3, "Adel", 175, 20); 
    let player5 = new player(4, "Noé", 186, 19); 
    let player6 = new player(5, "Antoine", 177, 20); 
    let gameInstance = new monopalim(player1, player2, player3, player4, player5, player6);
    /*gameInstance.board.grid[10][9].belonging = 0;
    gameInstance.board.grid[10][7].belonging = 0;
    gameInstance.board.grid[10][5].belonging = 0;
    gameInstance.board.grid[10][4].belonging = 0;
    gameInstance.board.grid[10][2].belonging = 0;
    gameInstance.board.grid[10][1].belonging = 0;
    player1.myPropriety[gameInstance.board.grid[10][9].id] = gameInstance.board.grid[10][9];
    player1.myPropriety[gameInstance.board.grid[10][7].id] = gameInstance.board.grid[10][7];
    player1.myPropriety[gameInstance.board.grid[10][5].id] = gameInstance.board.grid[10][5];
    player1.myPropriety[gameInstance.board.grid[10][4].id] = gameInstance.board.grid[10][4];
    player1.myPropriety[gameInstance.board.grid[10][2].id] = gameInstance.board.grid[10][2];
    player1.myPropriety[gameInstance.board.grid[10][1].id] = gameInstance.board.grid[10][1];
    player1.isJailed = true;
    player1.position = [10, 0];*/
    let gameView = new view(gameInstance); 
})();