var express = require('express');
var app = express();
var path = require('path');
var data = require('./data');
var analytics = require('./analytics');
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000);

let model = new data("");
let analytic = new analytics();

app.get("/", (req,res) => {
	res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get("/directories", (req,res) => {
	var files = model.getFiles();
	res.json(files);
});

app.get("/init/:filename", (req,res) => {
	var fileName = req.params.filename;
	model.initDB(fileName);
});

app.get("/search", (req,res) => {
	res.sendFile(path.join(__dirname + '/public/search.html'));
});

app.post("/search/edit", (req,res) => {
	model.edit(req.body);
	res.send('Edit Complete');
});

app.get("/search/delete/:id", (req,res) => {
	model.del(req.params.id);
	res.send('Delete Complete');
});

app.get("/search/:value/:category", (req,res) => {
	var value = req.params.value;
	var category = req.params.category;
	res.json(model.searchTable(category,value));
});

app.get("/search/getQuerySize", (req,res) => {
	var size = model.getQuerySize();
	size = size.toString();
	res.send(size);
});


app.get("/getcategories", (req,res) => {
	var categories = model.getCategories();
	res.json(categories);
});

app.get("/getcategories/:category", (req,res) => {
	var c = req.params.category;
	var categories = model.getCategoryValues(c);
	res.json(categories);
});

app.get("/insert", (req,res) => {
	res.sendFile(path.join(__dirname + '/public/insert.html'));
});

app.post("/insert/add", (req,res) => {
	model.insert(req.body);
	res.send("Insert Complete");
});

app.get("/insert/headers", (req,res) => {
	res.json(model.getHeaders());
});

app.get("/analytics", (req,res) => {
	res.sendFile(path.join(__dirname + '/public/analytics.html'));
});

app.get("/analytics/:number", (req,res) => {
	var request = req.params.number;
	var results = analytic.getAnalytics(request, model.getData());
	res.json(results);
});

app.get("/backup", (req,res) => {
	model.backup();
	res.sendFile(path.join(__dirname + '/public/home.html'));
});