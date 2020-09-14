$(document).ready(function () {
	// listen to the addburger text area for any change
	// $('#addburger').on('change', function () {
	// 	// make the button disable when nth is add in the textbox
	// 	if ($('#addburger').val().trim() != '') {
	// 		$('.addBurgerBTN').removeAttr('disabled');
	// 	} else {
	// 		$('.addBurgerBTN').attr('disabled', 'disabled');
	// 	}
	// });

	// send the form infomation to the server
	$('.create-form').on('submit', function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		const newBurger = {
			name: $('#addburger').val().trim(),
			done: 0,
		};
		console.log(newBurger);

		// send the post request
		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger,
		}).then(function () {
			console.log(`${newBurger.name} is added`);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	// Send the PUT request - change the burger done status
	$('.doneBTN').on('click', function (event) {
		var id = $(this).attr('id');
		var newDone = 1;
		console.log(id);

		var newDoneState = {
			done: newDone,
		};
		$.ajax('/api/burgers/' + id, {
			type: 'PUT',
			data: newDoneState,
		}).then(function () {
			console.log(`changed burger ${id} done status to ${newDone}`);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	// delete a burger
	$('.deleteBTN').on('click', function (event) {
		var id = $(this).attr('id');

		console.log(this);
		console.log(id);

		// Send the DELETE request.
		$.ajax('/api/burgers/' + id, {
			type: 'DELETE',
		}).then(function () {
			console.log('deleted burger', id);
			// Reload the page to get the updated list
			location.reload();
		});
	});
});
