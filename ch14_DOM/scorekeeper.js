console.log("script loaded");


// setup eventListeners
var p1_btn = document.querySelector('#p1-btn');
var p2_btn = document.querySelector('#p2-btn');
var reset_btn = document.querySelector('#reset-btn');
var p1_scoreElem = document.querySelector("#p1-score");
var p2_scoreElem = document.querySelector("#p2-score");
var playToField = document.querySelector("input[type='number']");
var p1_score = 0;
var p2_score = 0;
var playToCounter_max = 7;
var playToCounter = playToCounter_max;
var resultMessage = document.querySelector('#result-msg');

// button event listners

// Player 1
p1_btn.addEventListener('click', () => {
    p1_score++;
    updatePlayToCounter();
    updateScore();
}, false);

// Player 2
p2_btn.addEventListener('click', () => {
    p2_score++;
    updatePlayToCounter();
    updateScore();
}, false);

// Reset Button
reset_btn.addEventListener('click', resetScores, false);

// play to counter update field
playToField.addEventListener('change', function () {
    playToCounter_max = Number(this.value);
   
    // only accept values larger than 1.
    if (playToCounter_max < 1){
        playToCounter_max = playToCounter;
        this.value = playToCounter_max;
    }
    resetScores();
}, false);


// reset score
function resetScores(){
    // reset player scores
    p1_score = 0;
    p2_score = 0;

    // toggle win state class off
    p1_scoreElem.classList.remove('winner');
    p1_scoreElem.classList.remove('draw');

    p2_scoreElem.classList.remove('winner');
    p2_scoreElem.classList.remove('draw');

    // we will subtract this in the updatePlayToCounter() call
    playToCounter = playToCounter_max + 1;

    // clear result message
    resultMessage.innerHTML = '';

    // update all Game related DOM elements
    updateScore();
    updatePlayToCounter();
    enablePlayerBtns();
}

// update 'playing to' counter
function updatePlayToCounter() {
    playToCounter--;
    if (playToCounter === 0){
        disablePlayerBtns();
        declareWinner();
    }

    document.querySelector('#play-to-counter').innerHTML = 'Playing to: ' + playToCounter;
}

// add score to board
function updateScore(){
    p1_scoreElem.innerHTML = p1_score;
    p2_scoreElem.innerHTML = p2_score;
}

// display win message.
function declareWinner(){
    var result;

    if (p1_score > p2_score){
        result = 'Player 1 Won!';
        p1_scoreElem.classList.toggle('winner');
    } else if (p1_score === p2_score) {
        result = "It's a Tie!";
        p1_scoreElem.classList.toggle('draw');
        p2_scoreElem.classList.toggle('draw');
    } else {
        result = "Player 2 Won!";
        p2_scoreElem.classList.toggle('winner');
    }

    resultMessage.innerHTML = result;
}

// Disable/Enable buttons
function disablePlayerBtns(){
    p1_btn.setAttribute('disabled', true);
    p2_btn.setAttribute('disabled', true);
}

function enablePlayerBtns(){
    p1_btn.disabled = false;
    p2_btn.disabled = false;
}
