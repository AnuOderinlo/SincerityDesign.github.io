// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color, button;

button = $('#submit');

button.click(function() {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	color = $('#colorPicker').val();
	makeGrid(height, width);

});



function makeGrid(height, width) {
	// console.log('grid is working');

	// creating the grid/table
	// $('tr').remove();
	for (var h = 1; h <= height; h++) {
		$('#pixelCanvas').append('<tr></tr>');
		for (var w = 1; w <= width; w++) {
			$('tr:last').append("<td></td>");

		}
	}

	// creating the color colorPicker

	$('td').click(function() {
		color = $('#colorPicker').val();

		if ($(this).attr('style')) {
			$(this).removeAttr('style');
		}else {
			$(this).attr('style', 'background-color: ' + color);
			
		}
	});


}
// Your code goes here!

