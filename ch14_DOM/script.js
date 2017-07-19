console.log("script loaded");

/* 
DOM events:

1) select an element
2) attatch an event listener

Common Types of Events
  - click
  - dblclick
  - mouseup
  - mousedown
  - hover

*/

// add an eventlistener to the button

// var button = document.querySelector("#background-btn");
// var body = document.body;

// button.addEventListener('click', swapColor, false);

function swapColor() {
  if (body.style.backgroundColor != 'rgb(150, 75, 150)')
    body.style.backgroundColor = 'rgb(150, 75, 150)';
  else
    body.style.backgroundColor = 'rgb(255, 255, 255)';
}


//Score Keeper
