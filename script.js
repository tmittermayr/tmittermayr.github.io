let dices = [-1,-1];
let points = [0,0];

function rollDice(x,y) {
    let dice = parseInt(Math.random() * 6) + 1;
    document.getElementById(x).innerHTML = dice;
    if(y == 1) {
        dices[0] = dice;
        document.getElementById('results').innerHTML = "";
        if(dices[1] < 0){
            document.getElementById('result2').innerHTML = "";
        }
    } else {
        dices[1] = dice;
        document.getElementById('results').innerHTML = "";
        if(dices[0] < 0){
            document.getElementById('result1').innerHTML = "";
        }
    }
    if(dices[0] >= 0 && dices[1] >= 0) {
        if(dices[0] > dices[1]){
            document.getElementById('results').innerHTML = "Spieler 1 hat gewonnen!";
            points[0]++;
        } else if (dices[1] > dices[0]) {
            document.getElementById('results').innerHTML = "Spieler 2 hat gewonnen!";
            points[1]++;
        } else {
            document.getElementById('results').innerHTML = "Unentschieden!";
        }
        dices[0] = -1;
        dices[1] = -1;
    }
    document.getElementById('points').innerHTML = points[0] + " | " + points[1];
}