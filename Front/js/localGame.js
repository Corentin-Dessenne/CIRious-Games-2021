(function() {
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    let img4 = document.createElement('img');
    let img5 = document.createElement('img');
    let img6 = document.createElement('img');
    img1.src = "../assets/img/pawn/amongUs40x40.gif";
    img2.src = "../assets/img/pawn/spaceshipOpen40x40.gif";
    img3.src = "../assets/img/pawn/booman40x40.gif";
    img4.src = "../assets/img/pawn/dog40x40.gif";
    img5.src = "../assets/img/pawn/popoRun40x40.gif";
    img6.src = "../assets/img/pawn/slime40x40.gif";
    let player1 = new player(0, "Armand", 190, 20, img1, "red");
    let player2 = new player(1, "Marie", 181, 18, img2, "blue");
    let player3 = new player(2, "Corentin", 176, 19, img3, "green");
    let player4 = new player(3, "Adel", 175, 20, img4, "orange");
    let player5 = new player(4, "Noé", 186, 19, img5, "violet");
    let player6 = new player(5, "Antoine", 177, 20, img6, "black");
    let gameInstance = new monopalim(player1, player2, player3, player4, player5, player6);
    let gameView = new view(gameInstance);
})();