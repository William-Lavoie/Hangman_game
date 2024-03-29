$(document).ready(function() {

    const WORDS = ["word" , "hello", "programming", "javascript", "potato", "boat", "anchor", "development", "intriguing", "shore", "seashell"];
    let wordGame = "";
    let gameIsOver = false;
    let mistakes = 0;
    let wrongLetters = [];
    let mistakesAllowed = 10;
    

    function isALettter(ascii_code) {

        return (ascii_code >= 65 && ascii_code <= 90);
    }

    function letterAlreadyUsed(letter) {
        for (let i = 0; i < wrongLetters.length; i++) {
            if (wrongLetters[i] == letter) {
                return true;
            }
        }

        return false;
    }
 
    $("#new-game").click(function() {
        let random = Math.floor(Math.random()*WORDS.length );
        wordGame = WORDS[random];
        wrongLetters = [];
        counter = 0;
        mistakes = 0;
        gameIsOver = false;
        $("#guesses-left").text(mistakesAllowed - mistakes + " Guesses left");

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

        if (!gameIsOver && mistakes < mistakesAllowed && wordGame != "") {

            let letter = event.which;
            let foundLetter = false;

            console.log(event.key);
            for (let i = 0; i < wordGame.length; i++) {

                if (letter == wordGame.charCodeAt(i)-32) {
                   
                    foundLetter = true;
                    $("#container").children().eq(i).text(wordGame[i]);
                    
                }
            }

            if (!foundLetter && isALettter(letter) && !letterAlreadyUsed(letter)) {
               
                mistakes++;
                wrongLetters.push(letter);

                let wrongLetter = "<div class='wrong-letters'>" + String.fromCharCode(letter+32) + "</div>";
                 $("#letter-containers").append(wrongLetter);
                 $("#guesses-left").text(mistakesAllowed - mistakes + " Guesses left");

                if (mistakes >= mistakesAllowed) {
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

        else if (wordGame != "") {
            alert("The game is over, please start a new one.");
        }
    })


    $("#easy").click(function() {
        mistakesAllowed = 10;
        $("#guesses-left").text(mistakesAllowed - mistakes + " Guesses left");

    })

    $("#medium").click(function() {
        mistakesAllowed = 8;
        $("#guesses-left").text(mistakesAllowed - mistakes + " Guesses left");

    })

    $("#hard").click(function() {
        mistakesAllowed = 5;
        $("#guesses-left").text(mistakesAllowed - mistakes + " Guesses left");

    })
})


