const connection = require('./config/connection');

const query = `SELECT * FROM burgers;`;
connection.query(query, function (err, res) {
	if (err) throw err;
	console.log(res[0]);
	for (let i = 0; i < res.length; i++) {
		console.log(
			'ID: ' +
				res[i].id +
				' || Burger Name: ' +
				res[i].burger_name +
				' || Done: ' +
				res[i].done
		);
	}
});
