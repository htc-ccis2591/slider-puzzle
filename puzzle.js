$(document).ready(function () {


	//not good, I had major hurdles with witing a loop to find the empty tile and dealing with the scope of THIS.

	$("td").on("click", tileClick);



	function tileClick() {

		//var tileId = ''
		if ($(this).children().attr("alt") === "empty") {

			alert("this is empty, click on a different tile");
			var tileId = "empty";
			console.log(tileId);

		} else {
			// get src
			var $imgAll = $(this).children();
			var imgSrc = $imgAll.attr("src");
			var imgAlt = $imgAll.attr("alt");

			// set image tag on clicked and asign to clicked tile
			//var imgSetEmpty 
			$(this).children().attr({
				src: "images/empty.jpg",
				alt: "empty"

			});




			//fimd the empty img and replace attribute with imgSrc and imgAlt
			//var emptyImg = $("img[src$='/images/empty.jpg'][alt='empty']");
			//$(emptyImg).attr(imgSrc);

			console.log("click");
			console.log(imgSrc);
			console.log(imgAlt);
			//console.log(imgSetEmpty);
			//console.log(emptyImg);

			//var tileId = $(this).children().attr("src");
			//var allTiles = $("img");
			//var emptyTile = $(allTiles).find("alt":"empty");
			//console.log(tileId);
			//console.log(allTiles);
			//console.log(emptyTile);



		}


		//return tileId;







	};


	//console.log(tileId);

});

/*var origImg = $("img").attr("alt");
	console.log(origImg);



	function tileClick() {
		//var imgTest = $(this).children();

		var getImgAlt = $(this).children().attr("alt");
		//console.log(getImgAlt);

		if ($(this).children().attr("alt") === "empty") {

			console.log("this is empty");

			//console.log(imgTest);

		} else {
			swapTiles();

			function swapTiles() {

			};
			//console.log("click");
			var imgAlt = $(this).children().attr("alt");
			var imgSrc = $(this).children().attr("src");
			var makeTag = "<img src=" + imgSrc;
			var makeBlank = ("<img src=" + "'empty'" + " " + "alt =" + "'empty'")
				//console.log(imgSrc);
				//console.log(makeTag);
				//console.log(origImg);
			$(this).children().attr("src", imgSrc);
			$(this).children().attr("alt", "empty");



		};
	};

});


//var $testAlt = ;

//ALERT!!!
//console.log($eachTile)
//("<img src=" + getImgSrc +' alt="' getImgAlt" //height="100" width="100">

/* var id = $("#cell24").attr("id");
console.log(id)
var row = id[4];
var below = 1 + parseInt(row);
console.log(below); 
	
<img src="images/11.jpg" alt="11" height="100" width="100">
	
*/


/* this

 for (i = 0; i < len; i++) {
     if image[i] !== i + 1
     else
 }*/