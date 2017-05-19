$(document).ready(function() {

var characters = ["Luke Skywalker", "Darth Vader", "Obi-Wan Kenobi", "Han Solo", "Leia", "Chewbacca", "Yoda", "Emperor Palpatine", "Boba Fett"];
var query = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "dc6zaTOxFJmzC";


// Takes strings from array and adds them as buttons to the DOM
function createButtons () {
	for (var i=0; i<characters.length; i++) {
		var button = $("<button>");
		button.html(characters[i]);
		button.addClass("chars-button btn btn-secondary");
		button.attr("data-name", characters[i]);
		$("#buttons").append(button);
	}
}

$("#add-char").on("click", function() {
	event.preventDefault();

	var newChar = $("#char-input").val();
	characters.push(newChar);
	$("#buttons").empty();
	createButtons();
})

createButtons();
})