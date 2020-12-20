var fs = require('fs');
var data = null;
var datafileName = null;
var querySize = 0;
var MAX_QUERY = 2000;

class Data {
	constructor() {
		var files = this.getFiles();
		this.initDB(files[0])
	}

	initDB(filename) {
		var file = './model/' + filename + '.csv';
		datafileName = filename;
		data = fs.readFileSync(file, 'utf-8');
		this.csvToJSON();
	}

	getFiles() {
		var files = fs.readdirSync('./model');
		for(var i=0; i<files.length; i++) {
			files[i] = files[i].replace(/\..+$/, '');
		}
		return files;
	}

	getData() {
		return data;
	}

	getCategories() {
		var result = Object.keys(data[0]);
		return result;
	}

	getQuerySize() {
		return querySize;
	}

	getCategoryValues(category) {
		var query = "" + category;
		var result = {};
		for(var i=0; i<data.length; i++) {
			if (!result.hasOwnProperty([data[i][query]]) && data[i][query]) {
				result[data[i][query]] = 1;
			}
		}
		var values = Object.keys(result);
		return values;
	}

	csvToJSON() {
		var headers = data.split(/\r?\n/)[0].split(',');
		var size = data.split("\n").length;
		var lines = data.split("\n");
		var result = [];
		var obj = {};

		for(var i = 1; i < size; i++){
			var currLine = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		
			for(var k=0;k<headers.length;k++){
				obj[headers[k]] = currLine[k];
			}
			result.push(obj);
			obj = {};
		}

		data = result;
	}

	searchTable(category,value) {
		var results = [];
		querySize = 0;
		for(var i=0; i<data.length; i++){
			if(data[i][category] == value) {
				querySize++;
				if(results.length != MAX_QUERY) {
					results.push(data[i]);
				}
			}
		}
		return results;
	}

	edit(newData) {
		var headers = Object.keys(data[0]);
		for(var i=0; i<data.length; i++) {
			if(data[i][headers[0]] == newData[headers[0]]) {
				data[i] = newData;
				break;
			}
		}
	}

	insert(newData) {
		var headers = Object.keys(data[0]);
		for(var i=0; i<data.length; i++) {
			if(newData[headers[0]] == data[i][headers[0]]) {
				console.log("Item already exists");
				return;
			}
		}
		data.push(newData);
	}

	del(id) {
		for(var i=0; i<data.length; i++) {
			if(id == data[i]["ID"]) {
				console.log("Deleting item");
				data.splice(i,1);
				return;
			}
		}
	}

	backup() {
		var d = new Date();
		var date = '_' + d.getMonth() + '_' + d.getDate() + '_' + d.getFullYear() + '_' + d.getHours() + '_' + d.getMinutes() + '_' + d.getSeconds();
		var file_name = './model/' + datafileName + date + '.csv';
		
		var headers = Object.keys(data[0]);
		var newCSV = "";
		for(var i=0; i<headers.length-1; i++) {
			newCSV = newCSV + headers[i] + ",";
		}

		newCSV = newCSV + headers[headers.length-1] + "\n";

		for(var i=0; i<data.length-1; i++) {
			for(var j=0; j<headers.length-1; j++) {
				newCSV = newCSV + data[i][headers[j]] + ",";
			}
			newCSV = newCSV + data[i][headers[j]] + "\n";
		}

		fs.writeFile(file_name, newCSV, { flag: 'w' }, function(err) {
    			if (err) return console.error(err); 
		});
	}
}

module.exports = Data;