console.log("script loaded!");

var numColors = 6;
var colors = generateRandomRGBs(numColors);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");


colorDisplay.innerHTML = pickedColor;

resetButton.addEventListener('click', function() {
    colors = generateRandomRGBs(numColors);
    pickedColor = pickColor();

    colorDisplay.innerHTML = pickedColor;
    h1.style.removeProperty('background-color');
    resetButton.textContent = "New Colors";

    for(var i=0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
}, false);

easyButton.addEventListener('click', function() {
    numColors = 3;
    
    // generate new colors & pick new color
    colors = generateRandomRGBs(numColors);
    pickedColor = pickColor();

    // hide the bottom 3 squares
    for (var i=0; i < squares.length; i++){
        if (colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }
    // manage selected state
    this.classList.add('selected');
    hardButton.classList.remove('selected');
}, false);

hardButton.addEventListener('click', function() {
    console.log("hard button clicked");
    numColors = 6;
    // generate new colors
    colors = generateRandomRGBs(numColors);
    pickedColor = pickColor();

    // hide the bottom 3 squars
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }


    this.classList.add('selected');
    easyButton.classList.remove('selected');
}, false);


for (var i = 0; i < squares.length; i++) {
    // add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    // add click listners to squares
    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        
        // test if the correct color is selected
        if (clickedColor === pickedColor) {
            messageDisplay.innerHTML = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
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