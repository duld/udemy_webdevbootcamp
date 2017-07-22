console.log("script loaded!");

var colors = generateRandomRGBs(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    // add click listners to squares
    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        
        if (clickedColor === pickedColor) {
            messageDisplay.innerHTML = "Correct!";
            console.log("its a match!");
            changeColors(pickedColor);
        } else {
            console.log("wrong!");
            this.style.backgroundColor = '#232323';
            messageDisplay.innerHTML = "Try Again";
        }
    }, false);
}


/** Generates a psudo-random value within RGB range */
function randomColor(){
    return Math.floor(Math.random() * 256);
}

/** Creates an rgb string suitable for applying to a style property */
function randomRGB(){
    return "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
}

/**
 * Generates n number of random RGB values
 * @param {number} numColors - the number of rgb colors to generate
 * @return {array} an array of rgb string values
 */
function generateRandomRGBs(numColors){
    var colors = [];

    for (var i = 0; i < numColors; i++){
        colors.push(randomRGB());
    }
    return colors;
}

/**
 * Change all the colored squares to match 'color'
 * @param {rgb} color - string representing an rgb value
 */
function changeColors(color){
    for (var i=0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

/**
 * Randomly pick a color within the 'colors' array to set as
 * the solution to the game.
 */
function pickColor(){
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}