$(document).ready(function() {

    const WORDS = ["word" , "hello", "programming", "javascript", "potato", "boat", "anchor", "development", "intriguing", "shore", "seashell"];
    let wordGame = "";
    let gameIsOver = false;
    let mistakes = 0;

    $("#new-game").click(function() {
        let random = Math.floor(Math.random()*WORDS.length );
        wordGame = WORDS[random];
        counter = 0;
        mistakes = 0;
        gameIsOver = false;
        $("#container").html("");
        $("#pictures").html("");
        $("#letter-containers").html("");

        

        for (let i = 0; i < wordGame.length ; i++) {
            let newElement = $("<div></div>");
            newElement.addClass("letter");
            $("#container").append(newElement);
        }

    })
    
    $(document).on("keydown", function(event) {

        if (!gameIsOver && mistakes < 5) {

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
                let newPicture = $("<img src='../images/x.jpeg' alt='red x picture'>");
                $("#pictures").append(newPicture);

                let wrongLetter = "<div class='wrong-letters'>" + String.fromCharCode(letter+32) + "</div>";
                 $("#letter-containers").append(wrongLetter);

                if (mistakes == 5) {
                    alert("You lost, the word was : " + wordGame);
                }

                
            }

            else {

                let gameOver = true;

                for (let i = 0; i < wordGame.length; i++) {

                    if ($("#container").children().eq(i).html() == "") {
                        gameOver = false;
                    } 
                }

                if (gameOver) {
                    gameIsOver = true;
                    alert("Congratulations! You have won");
                }

            }
   
        }

        else {
            alert("The game is over, please start a new one.");
        }
       


    })
})

