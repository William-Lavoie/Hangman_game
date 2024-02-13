$(document).ready(function() {

    const WORDS = ["word" , "hello", "ab"];
    let wordGame = "";
    let gameIsOver = false;
    let mistakes = 0;

    $("#new-game").click(function() {
        let random = Math.floor(Math.random()*WORDS.length );
        wordGame = WORDS[random];
        counter = 0;
        mistakes = 0;
        $("#container").html("");
        $("#pictures").html("");


        for (let i = 0; i < wordGame.length ; i++) {
            let newElement = $("<div></div>");
            newElement.addClass("letter");
            $("#container").append(newElement);
        }

    })
    
    $(document).on("keydown", function(event) {

        if (! gameIsOver && mistakes < 5) {

            let letter = event.which;
            let foundLetter = false;

            for (let i = 0; i < wordGame.length; i++) {

                if (letter == wordGame.charCodeAt(i)-32) {
                    foundLetter = true;
                    $("#container").children().eq(i).text(wordGame[i]);
                }
            }

            if (!foundLetter) {

                mistakes++;
                let newPicture = $("<img src='../images/x.jpeg' alt='red x picture' width: 100px>");
                $("#pictures").append(newPicture);

                if (mistakes == 5) {
                    alert("You lost, the word was : " + wordGame);
                }

                
            }

           
       
            
        }

        else {
            alert("The game is over, please start a new one.");
        }
       


    })
})