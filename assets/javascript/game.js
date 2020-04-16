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

//variables for audio function
var arti = document.getElementById("arti");
var boot = document.getElementById("boot");
var cont = document.getElementById("cont");
var full = document.getElementById("full");
var padd = document.getElementById("padd");
var resp = document.getElementById("resp");
var soft = document.getElementById("soft");


function song() {
    if (randword=== words[0]) {
        boot.pause();
        padd.pause();
        full.pause();
        soft.pause();
        arti.pause();
        cont.pause();
        resp.play();
        document.getElementById("image").src = "./assets/images/arther.gif";
    }
    
    else if (randword=== words[1]) {
        resp.pause();
        boot.pause();
        padd.pause();
        full.pause();
        soft.pause();
        arti.pause();
        cont.play();
        document.getElementById("image").src = "./assets/images/rugrats.gif";
    }
    
    else if (randword=== words[2]) {
        resp.pause();
        full.pause();
        soft.pause();
        arti.pause();
        cont.pause();
        padd.pause();
        boot.play();
        document.getElementById("image").src = "./assets/images/simpsons.gif";
    }
    
    else if (randword=== words[3]) {
        resp.pause();
        boot.pause();
        full.pause();
        soft.pause();
        cont.pause();
        arti.pause();
        padd.play();
        document.getElementById("image").src = "./assets/images/scooby.gif";
    }
    
    else if (randword=== words[4]) {
        resp.pause();
        boot.pause();
        padd.pause();
        soft.pause();
        cont.pause();
        full.pause();
        arti.play();
        document.getElementById("image").src = "./assets/images/spongebob.gif";
    }
    
    else if (randword=== words[5]) {
        resp.pause();
        boot.pause();
        padd.pause();
        soft.pause();
        arti.pause();
        cont.pause();
        full.play();
        document.getElementById("image").src = "./assets/images/danny.gif";
    }
    
    else if (randword=== words[6]) {
        resp.pause();
        boot.pause();
        padd.pause();
        full.pause();
        arti.pause();
        cont.pause();
        soft.play();
        document.getElementById("image").src = "./assets/images/teen.gif";
    }
}


