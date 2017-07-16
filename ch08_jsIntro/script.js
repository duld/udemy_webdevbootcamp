// SECTION 9 //

// var secretNum = Math.floor((Math.random() * 1000) + 1);
// // ask for user guess.
// var userGuess;
// while(true) {
// 	userGuess = Number(prompt("Guess the number!"));

// 	if (userGuess < secretNum)
// 		alert("sorry your guess was too low, try again!");
// 	else if (userGuess > secretNum)
// 		alert("Whoops, your guess was too high! Try Again!");
// 	else
// 		break;
// }
// alert("You guessed correctly!");


// print all numbers between -10 and 19
// for (let i=-10; i < 20; i++)
// 	console.log(i);


// // print all even numbers between 10 and 40
// for (let i=10; i <= 40; i++){
// 	if (i % 2 === 0) {
// 		console.log(i);
// 		i++; // we found an even number, lets just add 1 more so we skip to the next even number
// 	}
// }


// print all odd numbers between 300 and 333
// for (let i=300; i <= 333; i++){
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 		i++;
// 	}
// }


// print all numbers divisbile by 5 and 3 between 5 and 50
// for (let i=5; i <= 50; i++) {
// 	if (i % 5 === 0 && i % 3 === 0)
// 		console.log(i);
// }

// ANNOY-O-MATIC

// ask the user "Are we there yet?"

// keep asking until the user types 'yes' or 'yeah'

function atDestination(){
	var thereYet = 'no';
	while(!areWeThereYet()){
		// just keep asking...
	}
	alert("finally!");
}

function areWeThereYet(){
	var userResponse = prompt("are we there yet???");
	userResponse = userResponse.toLowerCase();

	return userResponse.indexOf('yes') + 1 || userResponse === 'yeah'
}

// atDestination();



// SECTION 10 //

function isEven(num) {
	return num % 2 === 0 && num !== 0;
}

// console.log(isEven(41));
// console.log(isEven(40));
// console.log(isEven(36));
// console.log(isEven(0));
// console.log(isEven(-1));
// console.log(isEven(-2));


function factorial(num) {
	if (num <= 0)
		return 1;

	var total = 1;
	for (var i = num; i > 1; i--)
		total *= i;

	return total;
}

// console.log(factorial(40));
// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-1));
// console.log(factorial(10));


function kebabToSnake(kebab) {
	return kebab.replace(/-/g, '_');
}

// console.log(kebabToSnake("hello-there-buddy-boy"));
// console.log(kebabToSnake("bill-tevor-dylan-potato"));
// console.log(kebabToSnake("oneWord"));


/*
	Playing with setInterval
*/
// var curMin = document.getElementById("min");
// var curSec = document.getElementById('sec');
// var curMil = document.getElementById('mil');

// var minNum = Number(curMil.innerHTML);
// var secNum = Number(curSec.innerHTML);
// var milNum = Number(curMil.innerHTML);

// function timer(){
// 	milNum++;

// 	if (milNum > 10) {
// 		// increment second
// 		milNum = 0;
// 		secNum++;

// 		if (secNum > 60){
// 			// increment minute
// 			minNum++
// 			secNum = 0;

// 			curMil.innerHTML = milNum;
// 			curSec.innerHTML = secNum;
// 			curMin.innerHTML = minNum;
// 		} else {

// 			curSec.innerHTML = secNum;
// 		}
// 	} else {
// 		if (milNum < 10)
// 			curMil.innerHTML = '0' + milNum;
// 		else
// 			curMil.innerHTML = milNum;
// 	}
// }


// var timer = setInterval(timer, 100);



function newTodoItem(){
	while(true){
		var todoItem = prompt("What is the 'todo' you would like to add? or type 'quit' to cancel.");
		
		if (todoItem.toLowerCase() !== "quit"){
			todo.push(todoItem);
			console.log("-- " + todoItem + " was added to list!");
		} else {
			break;
		}
	}
}

function printTodoList() {
	todo.forEach( (val, index) => console.log(index + ": " + val));
}

function deleteTodo(){
	var index = Number(prompt("Specify the index to delete"));

	if (index < todo.length && index > todo.length * -1)
		todo.splice(index, 1);
}

function startTodo(){
	var userInput;

	while(true){

		var modeSelect = prompt("What would you like to do? Type 'quit' to exit");

		if (modeSelect === 'quit')
			break;
		else if (modeSelect == 'new')
			newTodoItem();

		else if (modeSelect == 'list')
			printTodoList();

		else if (modeSelect == 'delete')
			deleteTodo()
	}
	console.log("-- exiting todo app");
}

function clearToDo() {
	todo = [];
}

// var todo = ["do dishes", 'vacuum'];
// startTodo();

// Array problem Set
var myArr = [1, 4, 6, 8, 9, 0, 11];


function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--){
		console.log(array[i]);
	}
}

// printReverse(myArr);

function sumArray(array){
	var sum = 0;
	array.forEach((val) => {
		sum += val;
	});
	return sum;
}

// console.log(sumArray(myArr));

function max(array) {
	var largestSoFar;

	array.forEach((val) => {
		if (val > largestSoFar || largestSoFar == undefined)
			largestSoFar = val;
	});
	return largestSoFar;
}

// console.log(max(myArr));