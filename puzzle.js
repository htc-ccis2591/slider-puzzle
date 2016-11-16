$(document).ready(function(){
    
 $("td img").click(function(){
     var emptyLocation;
     var moveTo;
     var right;
     var below;
     var above;
     var imgSource;
     var i;
     var winner;
     var cellcount = 0;
     
     //check if we clicked on the empty spot
     if (this.src.search("empty")!=-1){
        alert("you have clicked on the empty spot.  Please choose another"); 
     }
     else {
         var select = $(this).parent();
         var id = select.attr('id');
         var col = id[5];
         var row = id[4];
         emptyLocation = "";
         // check if the imag to the right is empty
         if (col < 4 ){
             if (col <4){
                 right = 1 + parseInt(col);
             } else {
                 right = parseInt(col);
             }
             moveTo = "#cell"+row+right;
             current = "#cell"+row+col+" img";
             swapPicture(row,right,this.src,current);
          }
         // check if the image below is empty
         if (row < 4 ){
             if (row < 4){
                 below = 1 + parseInt(row);
             } else {
                 below = parseInt(row);
             }
             moveTo = "#cell"+below+col;
             current = "#cell"+row+col+" img";
             swapPicture(below,col,this.src,current);
        }
         // check if the image above is empty
         if (row > 1){
             if (row > 1){
                above = parseInt(row)-1; 
             } else {
                above = parseInt(row);
             }
             moveTo = "#cell"+above+col;
             current = "#cell"+row+col+" img";
             swapPicture(above,col,this.src,current);
          }
         // check if the image to the left is empty
         if (col > 1){
             if (col> 1){
                left = parseInt(col) - 1;
             } else {
                left = parseInt(col); 
             }
             moveTo = "#cell"+row+left;
             current = "#cell"+row+col+" img";
             swapPicture(row,left,this.src,current);
         }
         WinnerCheck();
      }
    
 });
 
    // add a solver button
    createSolver();
    createReset();

    
});

function swapPicture($row,$column,$source,$current) {
  
if ($('#cell'+$row+$column+' img').attr("src").search("empty")>-1){
             emptySource = $('#cell'+$row+$column+' img').attr("src");
            // change the source of the empty one to the
            // source of the one that was clicked
             $('#cell'+$row+$column+' img').attr("src",$source);
             $(current).attr("src", emptySource);
         } 
};  

function createReset(){

  var $Reseter = $('<input type="button" value="Reset the puzzle" onclick="ResetPuzzle()" />');

  $Reseter.appendTo($("body"));

}

function createSolver(){

  var $solver = $('<input type="button" value="Solve the puzzle" onclick="solvePuzzle()" />');

  $solver.appendTo($("body"));

}

function ResetPuzzle(){
    $('#cell11 img').attr("src","images/07.jpg");
    $('#cell12 img').attr("src","images/06.jpg");
    $('#cell13 img').attr("src","images/14.jpg");
    $('#cell14 img').attr("src","images/11.jpg");
    $('#cell21 img').attr("src","images/12.jpg");
    $('#cell22 img').attr("src","images/16.jpg");
    $('#cell23 img').attr("src","images/05.jpg");
    $('#cell24 img').attr("src","images/13.jpg");
    $('#cell31 img').attr("src","images/08.jpg");
    $('#cell32 img').attr("src","images/10.jpg");
    $('#cell33 img').attr("src","images/empty.jpg");
    $('#cell34 img').attr("src","images/15.jpg");
    $('#cell41 img').attr("src","images/04.jpg");
    $('#cell42 img').attr("src","images/02.jpg");
    $('#cell43 img').attr("src","images/09.jpg");
    $('#cell44 img').attr("src","images/03.jpg");
    $("#puzzleGrid").css("background","url('images/BorderBrown.png')");  
}

function solvePuzzle(){
    var array = ["11","12","13","14","21","22","23","24","31","32","33","34","41","42","43","44"];
    var imgSource = "";

    for (var c = 1; c < 17; c++) {
        if (c<10){
            imgSource = "images/0"+(c)+".jpg";
        }
        else {
            imgSource = "images/"+(c)+".jpg";
        }
        $('#cell'+array[c-1]+' img').attr("src",imgSource);
}
   $("#puzzleGrid").css("background","url('images/BorderGreen.png')");     
}

function WinnerCheck(){
    $('td').each(function () { 

        id = $(this).attr('id');
        col = id[5];
        row = id[4];
        imgSource = $('#cell'+row+col+' img').attr("src");
        console.log(imgSource);
        i = $(this).index();
        console.log(row+","+(i+1));
        if (imgSource.search((i+1)+".jpg") != -1){
             if (cellcount == 16){
                winner = true;
                $("#puzzleGrid").css("background","url('images/BorderGreen.png')");  
                alert("Congratulations!! You have won the game!");
                cellcount = 0;
             }
            else {
                cellcount++;
            }
        } else {
             winner = false;
             cellcount++;
        }
         console.log("cellcount is "+ cellcount + "and winner is " + winner)  
        });        
   
}