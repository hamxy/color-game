// Variables:
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message"); 
var h1 = document.querySelector("h1");
var pickedColor = colors[Math.floor(Math.random() * numSquares)];
var newGameButton = document.querySelector("div button");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor.toUpperCase();
newGameButton.addEventListener("click", newGame);
easyBtn.addEventListener("click", selected);
hardBtn.addEventListener("click", selected);

newGame();


function changeColors(color) {
    // Changes all squares to (color)
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


function selected() {
    if(this === easyBtn) {
        numSquares = 3;
        this.classList.add("selected");
        hardBtn.classList.remove("selected");
        newGame();
        // colors = generateRandomColors(numSquares);
        // pickedColor = colors[Math.floor(Math.random() * numSquares)];
        // colorDisplay.textContent = pickedColor.toUpperCase();
        // colorSquares();
    } else if(this === hardBtn) {
        numSquares = 6;
        this.classList.add("selected");
        easyBtn.classList.remove("selected");
        newGame();
        // colors = generateRandomColors(numSquares);
        // pickedColor = colors[Math.floor(Math.random() * numSquares)];
        // colorDisplay.textContent = pickedColor.toUpperCase();
        // colorSquares();
    }
}

function generateRandomColors(num) {
    //make an array
    var colors = [];
    //add random colors to array
    for(var i=0; i<num; i++){
        colors[i] = randomColor();
    }
    //return array
    return colors;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        return "rgb("+ red + ", " + green + ", " + blue + ")";
}

function colorSquares() {
    //add initial colors to squares
    for(var i=0; i<squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function listen() {
    for(var i=0; i<squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab a color of clicked square
            var clickedColor = this.style.backgroundColor 
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                newGameButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}

function newGame() {
    colors = generateRandomColors(numSquares);
    pickedColor = colors[Math.floor(Math.random() * numSquares)];
    colorSquares();
    listen();
    colorDisplay.textContent = pickedColor.toUpperCase();
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    newGameButton.textContent = "New Game";
}
