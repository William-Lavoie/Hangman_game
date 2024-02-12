document.onready(function() {

    const WORDS = ["word" , "test"];
    let wordGame = "";
    let counter = 0;
    let mistakes = 0;

    $("#new-game").onclick(function() {
        let random = Math.floor(Math.random()*WORDS.length +1);
        wordGame = WORDS[random];
        counter = 0;
        mistakes = 0;

        for (let i = 0; i < wordGame.length ; i++) {
            let newElement = $("<div></div>");
            newElement.addClass("letter");
        }

    })
    
    document.on("keydown", function(event) {

        let letter = event.which;
        if (letter == wordGame[counter]) {
            counter++;
        }
    })
})