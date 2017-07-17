console.log("script loaded!");

// selectiong
/*
    document.querySelector('css lookup')
    document.getElementById('id name')
    document.getElementsByClassName('classname')
    document.getElementsByTagName('tag')
*/

// come up with four ways to selct the first paragraph

var selP1 = document.getElementById("first");
var selP2 = document.querySelector("p");
var selP3 = document.querySelector(".special");
var selP4 = document.querySelectorAll("body #first");

// instead of adding a bunch of style properties toggle a class on or off

function toggleAlign(elem){
    elem.classList.toggle('right-align');
}
