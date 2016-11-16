(function () {

    //--------------------TEST--------------------//
    //    var $tdTiles = $("td");
    //    console.log($tdTiles);
    //    console.log($tdTiles[0].id);
    //    var tile1 = $tdTiles[0].id;
    //    console.log(tile1);
    //    console.log("Length of grid: " + $tdTiles.length);
    //    var emptytile = ($tdTiles[10].children[0].src);
    //    console.log(emptytile);
    //    console.log($tdTiles[10].children[0].src);
    //    console.log($tdTiles[10].id);

    //    var id = $("#cell13").attr("id");
    //    console.log(id);
    //    var row = id[4];
    //    console.log(row);
    //    var col = id[5];
    //    console.log(col);
    //    var cellNum = "cell" + row + col;
    //    console.log(cellNum);
    //
    //    var belowRow = 1 + parseInt(row);
    //    var belowCol = parseInt(col) + 1;
    //    var belowCell = "CellBelow= " + "cell" + belowRow + belowCol;
    //    console.log(belowCell);
    //--------------------------------------------//

    //--FindEmptyCell--//
    var i = 0;
    var $tiles = $("td");
    //console.log($tiles);
    for (i; i < $tiles.length; i++) {
        //--ImgSrc
        var imgSrc = $tiles[i].children[0].src;
        //console.log($tiles[i].children[0].src);
        //console.log(imgSrc);
        //--ImgID
        var imgID = $tiles[i].id;
        //console.log($tiles[i].id);
        var blankImg = "";
        var tileAbove = "";
        var tileBelow = "";
        var tileLeft = "";
        var tileRight = "";

        //--BlankCellID--//
        if (imgSrc === "http://127.0.0.1:5899/images/empty.jpg") {
            blankImg = imgID;
            //console.log("emptyCell: " + blankImg);

            //--FindBorderingyCells--//
            tileAbove = "cell" + (parseInt(blankImg[4]) - 1) + (parseInt(blankImg[5]));
            //console.log("tileAbove: " + tileAbove);

            tileBelow = "cell" + (parseInt(blankImg[4]) + 1) + (parseInt(blankImg[5]));
            //console.log("tileBelow: " + tileBelow);

            tileLeft = "cell" + (parseInt(blankImg[4])) + (parseInt(blankImg[5] - 1));
            //console.log("tileLeft: " + tileLeft);

            tileRight = "cell" + (parseInt(blankImg[4])) + (parseInt(blankImg[5]) + 1);
            //console.log("tileRight: " + tileRight);

        }
    };




    //--------------------------------------------//
    //--ClickEvent--AlertOnEmptyCell--UsingTD//
    var tileClick = $("td").on("click", function () {
        //console.log($(this));
        console.log(this);

        var imgSrc = $(this).children().attr("src");
        //console.log(imgSrc);

        var currentTileID = (this.id);
        console.log(currentTileID);
        //console.log(this.id);


        //console.log($tiles[tileAbove]);
        console.log("tileAbove onClick -- " + tileAbove);


        if (imgSrc === "images/empty.jpg") {
            alert("!");
        };

    });

    //    var tileClick = $("img").on("click", function () {
    //        var imgSrc = $(this).attr("src");
    //        console.log(this);
    //        console.log(imgSrc);
    //        if ($(this).attr("src") == "images/empty.jpg") {
    //            alert("!");
    //        };
    //    });








}());