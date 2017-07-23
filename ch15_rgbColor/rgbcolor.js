//console.log("script loaded!");

var numColors = 6;
var colors = generateRandomRGBs(numColors);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var buttons = document.querySelectorAll('.mode');


colorDisplay.innerHTML = pickedColor;

// Button event listners
// HARD / EASY
for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        buttons[0].classList.remove('selected');
        buttons[1].classList.remove('selected');
        this.classList.add('selected');

        // figure out how many squares to show
        numColors = this.textContent === "Easy" ? 3 : 6;
        
        reset();
    }, false);
}

// RESET - NEW COLORS - PLAY AGAIN?
resetButton.addEventListener('click', reset, false);


// Squares event listeners.
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

function reset(){
    // generate new colors & pick new color
    colors = generateRandomRGBs(numColors);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // hide the bottom 3 squars
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
}