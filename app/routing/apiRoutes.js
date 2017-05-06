
var tableArray = require('../data/tableData.js');
var waitingArray = require('../data/waitinglistData.js');

module.exports = function (app) {

	app.get("/api/tables", function (req, res) {
		return res.json(tableArray);
	});

	app.get("/api/waitinglist", function (req, res) {
		return res.json(waitingArray);
	});
/////////////////////////////////////////////////
app.get("/api/tables/:customerName", function(req, res) {
	var chosen = req.params.customerName;
	console.log(chosen);

	for (var i = 0; i < tableArray.length; i++) {
		if (chosen === tableArray[i].customerName) {
			return res.json(tableArray[i]);
		}
	}
	return res.send("No customer table found...");
});
app.get("/api/waitinglist/:customerName", function(req, res) {
	var chosen = req.params.customerName;
	console.log(chosen);

	for (var i = 0; i < waitingArray.length; i++) {
		if (chosen === waitingArray[i].customerName) {
			return res.json(waitingArray[i]);
		}
	}
	return res.send("No waiting customer found...");
});
	////////////////////////////////////////////////

	app.post("api/new", function(req, res){
		var newcharacter = req.body;
		newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

		console.log(newcharacter);
		characters.push(newcharacter);
	});
}