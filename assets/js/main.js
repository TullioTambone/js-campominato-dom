//funzione per creare gli elementi all'interno del #game

document.getElementById("play").addEventListener('click', function(){
    let difficulty = document.getElementById("difficulty").value;
    let game = document.getElementById("game");
    let bombe = generaBombe();
    // stringa vuota per ripartire dall'inizio
    game.innerHTML = "";

    function chooseDifficulty( numCelle, basis ){
        //setto un array dove salvo i numeri casuali non ripetuti
        let numeriUnici = [];

        for (let i = 0; i < numCelle; i++){
            let div = creaElementi("div", basis, numCelle, numeriUnici);
            game.append( div );

            div.addEventListener('click', function(){
                this.classList.toggle( "active" );
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
});

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


function generaBombe(){
    let arrayBombe = [];
    
    // genera numeri casuali unici
    while (numeriUnici.length < numCelle) {
        
        let numeroCasuale = Math.floor(Math.random() * numCelle) + 1;
        if (!numeriUnici.includes(numeroCasuale)) {
          numeriUnici.push(numeroCasuale);
        }
      }
}