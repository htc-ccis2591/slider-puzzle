$(document).ready(function () {
    tileClick();
    
//        //button
//    $("#puzzle").append('<button id="replace">Reset</button>');
//    $("#puzzle").append('<button>Help</button>');
//    $('button').css({"margin": "25px 25px 25px 25px"});
//    
//    //Reset
//    $("#replace").on("click", function() {
//        $("#puzzleGrid").load("puzzle.html #puzzleGrid");
//        console.log($('td'));
//        tileClick();
//    });
    
	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//endtag    
});

function tileClick() {
    $('td').each(function() {
        $(this).on('click', function() {
            if ($(this).children().attr('alt') == "empty"){
                console.log("This is an empty cell");
                alert("You clicked on an empty image!");
            }
            else
            {
                var id = $(this).attr("id");
                var above = "cell" + (parseInt(id[4]) - 1 + id[5]);
                var below = "cell" + (1 + parseInt(id[4]) + id[5]);
                var $placeholder = $(this).children();
    //next
                if ($(this).next().children().attr('alt') == "empty") {
                    $(this).children().replaceWith($(this).next().children());
                    $(this).next().append($placeholder);   
                };
    //previous
                if ($(this).prev().children().attr('alt') == "empty") {
                    $(this).children().replaceWith($(this).prev().children());
                    $(this).prev().append($placeholder);
                };
    //up
                if ($('#' + above).children().attr('alt') == "empty") {
                    $(this).children().replaceWith($('#' + above).children());
                    $('#' + above).append($placeholder);
                };
    //down
                if ($('#' + below).children().attr('alt') == "empty") {
                    $(this).children().replaceWith($('#' + below).children());
                    $('#' + below).append($placeholder);
                };
    //check     
                var blnOK = new Boolean("true");
                for (var i = 1; i < 16; i++)
                {
                    var index =$('td').eq(i).children().attr('alt')
                    if (index != (i+1)) {
                        blnOK = false;
                        break;
                    }
                }
                if (blnOK){
                    $("#puzzleGrid").attr('id', 'puzzleGrid.win');
                    alert("Congratulations! You won");
                }
                else {
                    $("#puzzleGrid").attr('id', 'puzzleGrid');
                };             
            };
        });
    });
};