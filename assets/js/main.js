//funzione per creare gli elementi all'interno del #game
let play = document.getElementById("play");
play.addEventListener('click', gameLogic);

function gameLogic(){
    let difficulty = document.getElementById("difficulty").value;
    let game = document.getElementById("game");

    
    // stringa vuota per ripartire dall'inizio
    game.innerHTML = "";

    function chooseDifficulty( numCelle, basis ){
        let punteggio = document.getElementById("myScore");
        let score = 0;
        //setto un array dove salvo i numeri casuali non ripetuti
        let numeriUnici = [];
        let arrayBombe = [];
        generaBombe(arrayBombe, numCelle);
        console.log(arrayBombe);

        for (let i = 0; i < numCelle; i++){

            let div = creaElementi("div", basis, numCelle, numeriUnici);
            game.append( div );
            

            div.addEventListener('click', function(){

                if (!arrayBombe.includes(numeriUnici[i])){
                    score++;
                    punteggio.innerText = score;
                    this.classList.toggle( "active" );
                } else {
                    
                    for (let i = 0; i < numCelle; i++){
                        if (arrayBombe.includes(numeriUnici[i])){
                            let box = document.querySelectorAll(".box");
                            box[i].classList.add("bomba");
                            box[i].innerHTML= `<i class="fa-solid fa-radiation fa-spin" style="color: #000000;"></i>`;
                        }
                    }

                    let gameOver = document.createElement("div");
                    game.append(gameOver);
                    gameOver.classList.add("game-over");
                    gameOver.innerHTML = "<h1>GAME OVER</h1>";
                }
            })

            //inserisco numeri casuali
            div.innerHTML = numeriUnici[i];
        }
    }
    
    switch (difficulty) {
        case "hard":
            chooseDifficulty(100, "box box-hard");
            break;
            
        case "medium":
            chooseDifficulty(81, "box box-medium");
            break
        
        case "easy":
            chooseDifficulty(49, "box box-easy");

    }
};

/*------------------------------- funzioni -----------------------------------------*/

function creaElementi(tag, classi, numCelle, numeriUnici){
    let div = document.createElement( tag );
    div.className = classi;
    
    // genera numeri casuali unici
    while (numeriUnici.length < numCelle) {
        
      let numeroCasuale = Math.floor(Math.random() * numCelle) + 1;
      if (!numeriUnici.includes(numeroCasuale)) {
        numeriUnici.push(numeroCasuale);
      }
    }

    return div
}


function generaBombe(arrayBombe, x){

    // genera numeri casuali unici
    while (arrayBombe.length < 16) {
        
        let numeroCasuale = Math.floor(Math.random() * x) + 1;
        if (!arrayBombe.includes(numeroCasuale)) {
          arrayBombe.push(numeroCasuale);
        }
    }
}

function theEnd(){
    play.removeEventListener('click', gameLogic());
}