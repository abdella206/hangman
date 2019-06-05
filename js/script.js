// Global Varibles
/// create an array of words & varibles
// ==========================================================
var wordList = ["lakers", "heat", "blazers"];

var underScore = [];

var rightWord = [];

var wrongWord = [];

var correctAnswer = wordList[Math.floor(Math.random() * wordList.length)];

// Dom Manipulation

var docUnderScore = document.getElementsByClassName('underScore');
var docrightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main 
//===========================================================
// Create underscores based on length of word
var makeUnderScore = function () {
    for (var i = 0; i < correctAnswer.length; i++) {
        underScore.push('_');
        docUnderScore[0].textContent = underScore.join(' ');
        docWrongGuess[0].textContent = underScore.join(' ');

    }
    return (underScore);
}
//console.log(makeUnderScore());

//// Get users guess/input




document.addEventListener('keypress', (event) => {


    var keys = String.fromCharCode(event.keyCode)

    //// If user guess is right 
    if (correctAnswer.indexOf(keys) > -1) {
        //// add to rightWord to right array
        rightWord.push(keys);

        //// replace underscore with right letter
        underScore[correctAnswer.indexOf(keys)] = keys;


        docUnderScore[0].textContent = underScore.join(' ');
        docrightGuess[0].innerHTML = rightWord.join(' , ');




        if (underScore.join('') == correctAnswer) {
            alert('You Win');
        }
       
    }
    else {

        wrongWord.push(keys)
        docWrongGuess[0].textContent = wrongWord.join(' , ');



    }

});



docUnderScore[0].innerHTML = underScore.join(' ');
makeUnderScore();






