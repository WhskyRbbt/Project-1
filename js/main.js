// The premise of the game is to have the user pick a cell, wjile trying not to pick one with a mine in it.

// It will be a random generated layout for the mines, and one of two things can happen, the user chooses a cell with a mine, or one without. I will need to write an if else statement detailing if there is a mine, if not, then either display a number representing the number of mines in proximity, or clear the cell if the value is 0. 

//I will need to write a function that can iterate through all cells with a value of 0 that are in direct vicinity of the cell chosen, and remove the cell "cover" to reveal all the empty cell until it reaches a cell that has a value of 1 - 8 (max number of mines around a cell.)

//i have to set values for variables (not yet known) then i have to write the process of calculating how many mines are going to be in the area (gameboard).

// I think I can write a for loop for rows, and a separate one for columns, and then call them as a referrence when calculating the mine locations.

// All cells will need to have a 'click' event listener, and then an immeidate function calling the "checkForMine" function that will run the cellChecker function that will check the cells value.

//I have to try and figure out how to randomly generate the placement and amount of bombs using a math.random property, or something, then I need to create a function to remove the box for every empty cell. 
// let rows = 10;
// let cols = 10;
// let board = document.getElementById('board');
// const map = [];
// const mine;
// const player = true; //maybe

// function setup(){
//   function createCanvas(rows, cols);{
//   for (let i = 0; i < rows; i++){
//     let row = board.insertRow(i);
//     for (let j = 0; j < cols; j++){
//       let col = row.insertCell(j);
//     }
//   }
// };

// function createGame(rows, cols) 
// function draw(){
// background(51);


//       var x = i * 30;
//       var y = j * 30;
//       fill c
//       stroke (0),
//       fill(255)
//       square(x, y, 30, 30);
//     }
//   }
// }


// function checkForMine () {

// }

// function cellChecker () {
    // If / else statement (if empty, do this, else, do that ( then a nested if else (if mine, do this, if number, do that.)))
}
