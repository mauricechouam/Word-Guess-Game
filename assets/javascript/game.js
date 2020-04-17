// declaration of Variables
var wordslist = ["responsive", "container", "bootstrap", "padding", "article", "fullstack", "software"] // Word should be guessed by user
var randwd = ""; // to store randon word
var lettwd = [];
var space = 0;
var blanckscorrect = [];
var wdguess = [];

//compter
var wins = 0;
var losses = 0;
var guessleft = 12;

// function play
function play() {
    randwd = wordslist[Math.floor(Math.random() * wordslist.length)];//computer choose a random word from the list
    lettwd = randwd.split("");
    space = lettwd.length;

    for (var i = 0; i < space; i++){ // to generate _ for each letter in array
        blanckscorrect.push("_");
    }
    document.getElementById("currentword").innerHTML = "  " + blanckscorrect.join(" ") // convert array element to string

    console.log(randwd);
    console.log(lettwd)
    console.log(space)
    console.log(blanckscorrect)
    
}

//variables for audio function
var arti = document.getElementById("arti");
var boot = document.getElementById("boot");
var cont = document.getElementById("cont");
var full = document.getElementById("full");
var padd = document.getElementById("padd");
var resp = document.getElementById("resp");
var soft = document.getElementById("soft");


function song() {
    if (randwd=== wordslist[0]) {
        boot.pause();
        padd.pause();
        full.pause();
        soft.pause();
        arti.pause();
        cont.pause();
        resp.play();
        document.getElementById("image").src = "./assets/image/resp.gif";
    }
    
    else if (randwd=== wordslist[1]) {
        resp.pause();
        boot.pause();
        padd.pause();
        full.pause();
        soft.pause();
        arti.pause();
        cont.play();
        document.getElementById("image").src = "./assets/images/cont.gif";
    }
    
    else if (randwd=== wordslist[2]) {
        resp.pause();
        full.pause();
        soft.pause();
        arti.pause();
        cont.pause();
        padd.pause();
        boot.play();
        document.getElementById("image").src = "./assets/images/boot.gif";
    }
    
    else if (randwd=== wordslist[3]) {
        resp.pause();
        boot.pause();
        full.pause();
        soft.pause();
        cont.pause();
        arti.pause();
        padd.play();
        document.getElementById("image").src = "./assets/images/padd.gif";
    }
    
    else if (randwd === wordslist[4]) {
        resp.pause();
        boot.pause();
        padd.pause();
        soft.pause();
        cont.pause();
        full.pause();
        arti.play();
        document.getElementById("image").src = "./assets/images/arti.gif";
    }
    
    else if (randwd=== wordslist[5]) {
        resp.pause();
        boot.pause();
        padd.pause();
        soft.pause();
        arti.pause();
        cont.pause();
        full.play();
        document.getElementById("image").src = "./assets/images/full.gif";
    }
    
    else if (randwd=== wordslist[6]) {
        resp.pause();
        boot.pause();
        padd.pause();
        full.pause();
        arti.pause();
        cont.pause();
        soft.play();
        document.getElementById("image").src = "./assets/images/soft.gif";
    }
}
function reset() {// Function reset
    guessleft = 10;
    wdguess = [];
    blanckscorrect = [];
    play()
}

function letterin(lett) { // function to check if the player letter matches randon
    lettrue = false;
    for (var i = 0; i < space; i++){
        if (randwd[i] == lett) {
            lettrue = true;
        }

    }
    if (lettrue) {
        for (var i = 0; i < space; i++) {
            if (randwd[i] == lett) {
                blanckscorrect[i] = lett;
            }
        }
    }
    else {
        wdguess.push(lett);
        guessleft--;
    } console.log(blanckscorrect);
}

function verification() {
    console.log("WINS_SCORE :" + wins + "| LOSSES_SCORE :" + losses + "| GUESSES LEFT:" + guessleft);
    
    if (lettwd.toString() == blanckscorrect.toString()) {
        wins++;
        song()
        reset()
        document.getElementById("wincpt").innerHTML = " " + wins; 
        document.getElementById("message").innerHTML = " !!!! WELL DONE!!!!" 
    } else if (guessleft === 0) {
        losses++
        reset()
        document.getElementById("image").src = "./assets/images/try.gif"
        document.getElementById("message").innerHTML = " !!!! TRY AGAIN !!!!" 
        document.getElementById("lostcpt").innerHTML = "" + losses;
       
        
        
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "" + blanckscorrect.join("");
    document.getElementById("guesscpt").innerHTML = "" + guessleft;
}
play()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    letterin(guesses);
    //process wins/loss 
    verification();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerletterguesses").innerHTML = "" + wdguess.join("");
}