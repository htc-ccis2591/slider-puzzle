$(function () {

    var cells = $('td');
    var imgs = cells.children();


    var tileClick = function () {

        if (iscellEmpty($(this)) === true) {
            alert("you clicked an empty cell");
        }


        if (iscellEmpty($(this)) === false) {

            findEmptyCell($(this));


        }





    }

    var iscellEmpty = function (cell) {

        if (cell.children().attr("alt") === "empty") {

            return true;

        } else {
            return false;
        }

    }

    var findEmptyCell = function (cell) {

        var id = cell.attr("id");

        var row = id[4];

        var column = id[5];

        var rowbelow = 1 + parseInt(row);
        var rowabove = -1 + parseInt(row);

        var columntoRight = 1 + parseInt(column);
        var columntoLeft = -1 + parseInt(column);

        if (row !== "1") {

            var cellAboveID = "#cell" + rowabove + column;
            console.log("cell above id: " + cellAboveID);
            var cellAbove = $(cellAboveID);
            if (iscellEmpty(cellAbove) === true) {
                swapCells(cell, cellAbove);
            }

        }

        if (row != "4") {

            var cellBelowID = "#cell" + rowbelow + column;
            console.log("cell below id: " + cellBelowID);
            var cellBelow = $(cellBelowID);
            if (iscellEmpty(cellBelow) === true) {
                swapCells(cell, cellBelow);
            }


        }

        if (column != "1") {

            var cellToLeftID = "#cell" + row + columntoLeft;
            console.log("cell to left id: " + cellToLeftID);
            var cellToLeft = $(cellToLeftID);

            if (iscellEmpty($(cellToLeftID)) === true) {
                swapCells(cell, cellToLeft);
            }



        }

        if (column != "4") {

            var cellToRightID = "#cell" + row + columntoRight;
            console.log("cell to right id: " + cellToRightID);
            var cellToRight = $(cellToRightID);
            if (iscellEmpty(cellToRight) === true) {
                swapCells(cell, cellToRight);
            }


        }









        console.log("Row: " + row);

        console.log("Column: " + column);

        console.log("Row below: " + rowbelow);
        console.log("Row above: " + rowabove);






    }

    var swapCells = function (cell, emptyCell) {
        if (iscellEmpty(cell) == false && iscellEmpty(emptyCell) === true) {

            var emptyCellSrc = emptyCell.children().attr("src");
            var emptyCellAlt = emptyCell.children().attr("alt");
            var cellSrc = cell.children().attr("src");
            var cellAlt = cell.children().attr("alt");

            cell.children().attr("src", emptyCellSrc);
            cell.children().attr("alt", emptyCellAlt);

            emptyCell.children().attr("src", cellSrc);
            emptyCell.children().attr("alt", cellAlt);


        }


    }

    var isPuzzleSolved = function () {

        var puzzleSolved = true;

        imgs.each(function (index) {
            var image = $(this);
            console.log("image: " + image);
            var alt = $(image).attr("alt");
            var lastImageAlt = imgs.last().attr("alt");
            var lastImageSrc = imgs.last().attr("src");
            console.log("last images src: " + lastImageSrc);
            console.log(alt);
            console.log("last image alt: " + lastImageAlt);
            console.log("index: " + index + "image alt #: " + image.attr("alt"));

            if (alt !== index + 1 && lastImageAlt !== "empty" && lastImageSrc !== "images/empty.jpg") {
                puzzleSolved = false;



            } else {
                finishPuzzle();

            }









        });

        return puzzleSolved;
    }

    var finishPuzzle = function () {



        $('#puzzleGrid').addClass("win");
        $('#cell44').children().removeAttr("alt");
        $('#cell44').children().removeAttr("src");



        var newSRC = $('#cell44').children().attr("src", "images/16.jpg");
        var newAlt = $('#cell44').children().attr("alt", "16");


    }



    cells.on("click", tileClick);

    isPuzzleSolved();








});