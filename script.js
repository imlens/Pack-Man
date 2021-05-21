// Declare directives.
"use advanced";
"render invisible";

// Declare a timer for the game.
var timer = 0;

// This will be the gameboard.
var biggestSquare = new Rectangle(canvas.width / 2, canvas.height / 2, 0, 0, "none", "blue");

// Declare 2 variables to make the position of the grid lines. 
var x = biggestSquare.x;
var y = biggestSquare.y + biggestSquare.height / 15;  

// Hold all the lines on the x axis.
var xLines = [];

// Declare the animate function.
function animate() {

   // Reset the background.
   background("black");

   // Make the square as big as possible.
   if (biggestSquare.y >= canvas.width / 15 && biggestSquare.x >= canvas.width / 15) {
      for (var i = 0; i < 2; i++) {
         biggestSquare.x--;
         biggestSquare.width += 2;
         biggestSquare.y--;
         biggestSquare.height += 2;
         x = biggestSquare.x;
         y = biggestSquare.y + biggestSquare.height / 15;
      }
   } else if (xLines.length <= 15 * 15 - 16) {

      // Add lines into the line array.
      xLines.push(new Line(x, y, x + biggestSquare.width / 15, y, "yellow"));

      // Make it cover the square.
      x += biggestSquare.width / 15;

      // If they go off the square reset the position.
      if (x + biggestSquare.width / 15 > biggestSquare.x + biggestSquare.width) {
         x = biggestSquare.x;
         y += biggestSquare.height / 15;
      }
   } else {

      // Draw the player
      circle(biggestSquare.x + biggestSquare.width / 30, biggestSquare.y + biggestSquare.height / 30, (biggestSquare.width / 30) - 3, {fill: "yellow"});  
   }

   // Draw the lines.
   for (var i = biggestSquare.x + biggestSquare.width / 15; i < biggestSquare.x + biggestSquare.width; i += biggestSquare.width / 15) {
      line(i, biggestSquare.y, i, biggestSquare.y + biggestSquare.height, {strokeColor: "blue"});

   }

   for (var i = biggestSquare.y + biggestSquare.height / 15; i < biggestSquare.y + biggestSquare.height; i += biggestSquare.height / 15) {

      line(biggestSquare.x, i, biggestSquare.x + biggestSquare.height, i, {strokeColor: "blue"});
   }

   // Draw the gameboard template.
   biggestSquare.draw();

   // Draw the real collision.
   for (var i = 0; i < xLines.length; i++) {
      xLines[i].draw();
   }

   // Increment the timer.
   timer++;

   // End of program.
}
