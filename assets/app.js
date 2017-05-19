$(document).ready(function() {

var characters = ["Luke Skywalker", "Darth Vader", "Obi-Wan Kenobi", "Han Solo", "Leia", "Chewbacca", "Yoda", "Emperor Palpatine", "Boba Fett"];
var query = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "dc6zaTOxFJmzC";


// Takes strings from array and adds them as buttons to the HTML
function createButtons () {
	for (var i=0; i<characters.length; i++) {
		var button = $("<button>");
		button.html(characters[i]);
		button.addClass("chars-button btn btn-secondary");
		button.attr("data-name", characters[i]);
		$("#buttons").append(button);
	}
}

// Takes user input and creates new buttons in array
$("#add-char").on("click", function() {
	event.preventDefault();

	var newChar = $("#char-input").val();
	characters.push(newChar);
	$("#buttons").empty();
	createButtons();
})

// Establishes click event for button
$("#buttons").on("click", ".chars-button", function (){
	$("#gifs").empty();

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("data-name") + "&limit=10&api_key=dc6zaTOxFJmzC";
	// AJAX call
	$.ajax({
		url:queryURL,
		method: "GET"
	}).done(function(response){

		var results = response.data;
		console.log(response)

		
		for (var i = 0; i < results.length; i++) {
			var charDiv = $("<div class='item'>");
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);

			var charImg = $("<img>");
			charImg.attr("src", results[i].images.fixed_height_still.url);
			charImg.attr("data-still", results[i].images.fixed_height_still.url);
			charImg.attr("data-animate", results[i].images.fixed_height.url);
			charImg.attr("data-state", "still");
			charImg.addClass("imgclick");
			charDiv.append(charImg);
			charDiv.append(p);
			charDiv.addClass("gif-div");
			$("#gifs").prepend(charDiv);
		}
	})
})

createButtons();
})