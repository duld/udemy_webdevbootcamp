console.log("script is loaded");
// Objects Quiz - Section 12 Lecture 136

var someObject = {
    friends: [
        {name : 'Malfoy'},
        {name : 'Crabbie'},
        {name : 'Goyle'}
    ],
    color : "baby blue",
    isEvil : true
};

// write code to retrive 'malfoy' from some object
// go one layer at a time!

// console.log(someObject.friends[0].name);
// ==========================================================

// movieDB section 12 Lecture 137
// create an array of movie objects. Each movie should have a title, rating, 
// and hasWatched properties.

// output example:
/*
    You have watched "some movie" - 5 stars
    You have not seen "some other movie" - 3 stars
    etc...
*/

// var movies = [
//     {title : "SpiderMan: Homecoming", hasWatched : false, rating : 4.5},
//     {title : "Gladiator", hasWatched : true, rating : 4.5},
//     {title : "War for the Planet of the Apes", hasWatched : false, rating : 5},
//     {title : "Baby Driver", hasWatched : false, rating : 4},
//     {title : "Cars 3", hasWatched : false, rating : 3}
// ];

function listMovies(){
    movies.forEach( (movie) => {
        var watched = movie.hasWatched ? "have watched " : "have not seen ";
        console.log("You " + watched + "\"" + movie.title + "\"" + " - " + movie.rating + " stars");
    });
}

// listMovies();


var comments = {};

// comments.data = ["Good Job!", "bye", "Lame...", "Good Job!", "Bye", "LAME!"];

comments.print = function() {
    this.data.forEach( (val)=> {
        console.log(val);
    })
}

// comments.print();