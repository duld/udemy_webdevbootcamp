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

// https://www.petfinder.com/wp-content/uploads/2012/11/153558006-tips-healthy-cat-632x475.jpg

function updateLinks(links){
    for (var i=0; i < links.length; i++){
        links[i].setAttribute('href', 'https://www.bing.com');
    }
}