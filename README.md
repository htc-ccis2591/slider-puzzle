# Slider Puzzle
Completing this assignment depends on knowing:

- jQuery!

## GitHub Repository
https://github.com/htc-ccis2591/slider-puzzle

You’ll want to begin each assignment by forking the repository and cloning it locally.  When you are done, you’ll push to GitHub and submit a pull request.

## Intro
In this assignment we will make an image slider puzzle using jQuery.  To begin, you will want to download the PuzzlePage starter project from D2L.  Open the HTML file in a browser and you’ll see the puzzle, but it doesn’t do anything yet.

1. Add a new puzzle.js file to the project and set it up using the module pattern.

2. Add a function called tileClick().  This method should be called each time one of the cells (td) in the puzzleGrid is clicked on.

3. The tileClick() method should:

  - Popup an alert if the user clicked on the “empty” image tile.  Because you will often need to check if a cell is the empty cell, this would make a good function.

  - If the user did not click on an empty cell, we need to determine which cell next to the image cell is the empty cell so we can swap the tiles.  (Is it above, below, right or left?) Note: To help with this, the cell ids are numbered to be coordinates.  The first row is numbered cell11, cell12, etc. The second row is numbered cell21, cell22, etc.  Use this pattern to determine the id of the cell you want to check.

4. When you have identified the location of the empty tile, swap the images between the two cells.  The logic to swap the tiles also makes a good function.  To swap the tiles, you move the image from one cell into the other.

5. Then you’ll need to do is determine if this solves the puzzle.  The puzzle is complete when the images show up in numeric order (see image file names).  You can use the each function in jQuery to loop over the images, and return false to exit the loop if one is bad and set a boolean flag variable to know that the game is not won.  (If you don’t use a variable, you won’t know the results - true game won or false, not won.)

6. If the puzzle is solved you should change the background image to have the Green border instead of the brown one and replace the empty image with image 16 so that the picture is complete.

## Additional Features
The following are extras that you can add to the working game to earn you up to 8 extra credit HW points.  If you’ve missed assignments or not done as well as you’d like, here is your chance to make some of that back up.  

### Reset
Add a button to the page so that the puzzle will reset back to the original layout.  There are a few different ways you might do this, and it is up to you to think up some options and decide what works best.  The button should look nice on the page, so this will require a little HTML/CSS too.

### Help
Add a help button to the page that will show/hide numbers over the images.  The image number is found in the alt text for the image.  Do NOT show anything for the empty image.  Again, the button should look nice on the page, so this will require a little HTML/CSS too.

### Extraordinary Win
Do something extra special when the puzzle is solved.  Something more than a “You win” message or flashing colors.  I’m thinking like floating balloons, applause, rainbows or confetti.  We haven’t really talked about these things, so you’ll have to do some research for this one.  If you add any additional images or sounds, please do not infringe on copyright.  Only use things you have rights to use freely.  If any attributions are required, you should add those to a footer in the HTML.  Otherwise, please add a comment to indicate where any additional resources are from.

### Additional Puzzle
Add additional images so that you can solve different puzzles.  You should have a way to list and choose between at least two other images for the puzzle.  This puzzle is made from a photo I took of my cats and chopped up using MS Paint - very low tech.  (Again, don't infringe on any copyrights here.  Use your "safe-for-work/school" images or ones that allow free non-commercial use.)
