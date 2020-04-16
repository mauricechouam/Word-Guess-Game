// declaration of Variables
var words = ["responsive", "container", "bootstrap", "padding", "article", "fullstack", "software"] // Word should be guessed by user
var randwd = ""; // to store randon word
var lettwd = [];
var blancks = 0;
var blanckscorrect = [];
var wdguess = [];

//compter
var wins = 0;
var losses = 0;
var guessleft = 10;

// function play
function play() {
    randwd = words[Math.floor(Math.random() * words.length)];//computer choose a random word from the list
    lettwd = randwd.split("");
    blancks = lettwd.length;

    for (var i = 0; i < blancks; i++){ // to generate _ for each letter in array
        blanckscorrect.push("_");
    }
    document.getElementById("currentword").innerHTML = "  " + blanckscorrect.join(" ") // convert array element to string

    console.log(randwd);
    console.log(lettwd)
    console.log(blanks)
    console.log(blankscorrect)
    
}