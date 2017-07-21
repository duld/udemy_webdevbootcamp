console.log("script loaded!");

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#color-display");

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    // add click listners to squares
    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor)
            console.log("its a match!");
        else
            console.log("wrong!");
    }, false);
}


// generate random rgb color
function randomRGB(){
    return Math.floor(Math.random() * 255);
}