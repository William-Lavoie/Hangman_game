$(document).ready(function() {

    const WORDS = ["word" , "a", "ab"];
    let wordGame = "";
    let counter = 0;
    let mistakes = 0;

    $("#new-game").click(function() {
        let random = Math.floor(Math.random()*WORDS.length );
        wordGame = WORDS[random];
        counter = 0;
        mistakes = 0;
        $("#container").html("");

        for (let i = 0; i < wordGame.length ; i++) {
            let newElement = $("<div></div>");
            newElement.addClass("letter");
            $("#container").append(newElement);
        }

    })
    
    $(document).on("keydown", function(event) {

        let letter = event.which;
        console.log(event.which);
        console.log(wordGame.charCodeAt(counter)-32);
        if (letter == wordGame.charCodeAt(counter)-32) {
            counter++;
            $("#container").children().eq(counter-1).text(wordGame[counter-1]);
        }


    })
})