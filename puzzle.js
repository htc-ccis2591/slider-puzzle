$(function () {

    //var $eachTile = $("td").children();

    function swapTiles() {


    }


    function tileClick() {
        var imgTest = $(this).children();
        console.log(imgTest);
        if ($(this).children().attr("alt") !== "empty") {

            swapTiles();
            console.log("click");


        } else {
            console.log("this is empty");
        };
    };

    //var $testAlt = ;

    $("td").on("click", tileClick);
    //console.log($eachTile)


    var id = $("#cell24").attr("id");
    console.log(id)
    var row = id[4];
    var below = 1 + parseInt(row);
    console.log(below);



});
/* this

 for (i = 0; i < len; i++) {
     if image[i] !== i + 1
     else
 }*/