var currRow = 0;

class Search {
	constructor() {
	}

	async catchJSON(url){
		const response = await fetch(url);
  		var jsonData = await response.json();
		var MAX_QUERY = jsonData.length;

		var querySize = 0;
		await fetch('/search/getQuerySize')
		.then(res => res.text())
		.then(res => querySize = res)

		var tableSection = document.getElementById('table')
		while(tableSection.hasChildNodes()) {
        		tableSection.removeChild(tableSection.firstChild);
    		}

		var displayTable = document.createElement("table");
		displayTable.id = 'displayTable';
		displayTable.align = 'center';
		tableSection.appendChild(displayTable);

    		var col = Object.keys(jsonData[0]);
		col.push("Edit");
		col.push("Delete");

    		var table_row = displayTable.insertRow(-1);
    		for(var i=0; i<col.length; i++) {
			var th = document.createElement('th');
			th.innerHTML = col[i];
			table_row.appendChild(th);
    		}

		var parseResults = document.getElementById("parseResults");
		parseResults.innerText = querySize + ' results found.';
		parseResults.style.color = '#ffffff';
		if(querySize != MAX_QUERY) { 
			parseResults.innerText += ' Displaying first ' + MAX_QUERY + ' results';
		}

    		for(var i=0; (i<jsonData.length && i<2000); i++) {
        		var table_row = displayTable.insertRow(-1);
        		for(var j=0; j<col.length-2; j++) {
            			var cell = table_row.insertCell(-1);
            			cell.innerHTML = jsonData[i][col[j]];
				cell.style.textAlign = 'center';
        		}
			var index = i+1;
			var edit = table_row.insertCell(-1);
			edit.innerHTML = '<input type="button" id="edit" onclick="search.edit(\''+(i+1)+'\')" value="✎">';
			var del = table_row.insertCell(-1);
			del.innerHTML = '<input type="button" id="delete" onclick="search.del(\''+(i+1)+'\')" value="✖">';
		}

	}

	searchTable() {
		var category = document.getElementById('input_category').value;
		var value = document.getElementById('input_value').value;	

    		var url = "search/"+value+"/"+category;	

		console.log(url);
		console.log("going to fetch...");

    		this.catchJSON(url);
	}

	edit(row) {
		currRow = row;

		var editDiv = document.getElementById("editDiv");
		var editTable = document.getElementById("editTable");
		while(editTable.hasChildNodes()) {
     	   		editTable.removeChild(editTable.firstChild);
    		}

		var table = document.getElementById("displayTable");
		var cols = table.rows[0].cells.length;
		var editHeaders = editTable.insertRow(-1);
		var editRow = editTable.insertRow(-1);

		var cellHead = editHeaders.insertCell(i);
		var cellVal = editRow.insertCell(i);
		cellHead.innerHTML = table.rows[0].cells[0].innerHTML;
		cellVal.innerHTML = table.rows[currRow].cells[0].innerHTML;

		for(var i=1; i<cols-2; i++) {
			cellHead = editHeaders.insertCell(i);
			cellVal = editRow.insertCell(i);
			cellHead.innerHTML = table.rows[0].cells[i].innerHTML;
			cellVal.innerHTML = '<input placeholder=\''+table.rows[currRow].cells[i].innerHTML+'\' style="width:100%">'
		}
  		editDiv.style.display = "block";
	}

	submitEdit() {
		var editDiv = document.getElementById("editDiv");

		var table = document.getElementById("editTable");
		var displayTable = document.getElementById("displayTable");
		var cols = table.rows[0].cells.length;

		var jsonObject = {};
		jsonObject[table.rows[0].cells[0].innerHTML] = table.rows[1].cells[0].innerHTML;

		for(var i=1; i<cols; i++) {
			if(table.rows[1].cells[i].children[0].value) {
				displayTable.rows[currRow].cells[i].innerHTML = table.rows[1].cells[i].children[0].value;
				jsonObject[table.rows[0].cells[i].innerHTML] = table.rows[1].cells[i].children[0].value;
			} else {
				var oldData = table.rows[1].cells[i].children[0].getAttribute("placeholder");
				jsonObject[table.rows[0].cells[i].innerHTML] = oldData;
			}
		}
	
		editDiv.style.display = "none";
		fetch('/search/edit/',{
    			method : "post",
   			headers: {
       	         		'Accept': 'application/json',
       		         	'Content-Type': 'application/json',
        		},
    			body  :  JSON.stringify(jsonObject),
  		});
	}

	del(row) {
		var table = document.getElementById('displayTable');
		var tableRow = document.getElementById('displayTable').rows[row];
		var id = tableRow.cells[0].innerHTML;
		while(tableRow.hasChildNodes()) {
      	  		tableRow.removeChild(tableRow.firstChild);
    		}
		console.log(table.rows.length);
		fetch("/search/delete/" + id);
	}

	async getSearchValues(category) {
		var url = '/getCategories/' + category;
		const response = await fetch(url);
		var values = await response.json();
		values = values.sort();

		var valueSection = document.getElementById('valueSection');
		while(valueSection.hasChildNodes()) {
     	   		valueSection.removeChild(valueSection.firstChild);
    		}

		if(values.length < 3000) {
			var selectList = document.createElement("select");
			selectList.className = 'fields';
			selectList.id = 'input_value';

			var option = document.createElement("option");
			option.text = "<Select Value>";
			option.disabled = true;
    			option.selected = true;
			selectList.add(option);
			for(var i=0; i<values.length; i++) {
				var option = document.createElement("option");
				option.text = values[i];
				selectList.add(option);
			}

			valueSection.appendChild(selectList);
		} else {
			var inputField = document.createElement('input');
			inputField.className = 'fields';
			inputField.id = 'input_value';
			inputField.placeholder = 'Value';
			valueSection.appendChild(inputField);
		}
	}
}

window.onclick = function(event) {
	var editDiv = document.getElementById("editDiv");
  	if (event.target == editDiv) {
    		editDiv.style.display = "none";
  	}
}

window.onload = async function() {
	const response = await fetch('/getcategories');
	var categories = await response.json();
	var selectList = document.getElementById('input_category');
	var option = document.createElement("option");
	option.text = "<Select Category>";
	option.disabled = true;
    	option.selected = true;
	selectList.add(option);
	for(var i=0; i<categories.length; i++) {
		var option = document.createElement("option");
		option.text = categories[i];
		selectList.add(option);
	}

	var valueSection = document.getElementById('valueSection');
	var selectList = document.createElement("select");
	selectList.className = 'fields';
	selectList.id = 'input_value';
	var option = document.createElement("option");
	option.text = "<Select Value>";
	option.disabled = true;
    	option.selected = true;
	selectList.add(option);

	valueSection.appendChild(selectList);

	var displayTable = document.getElementById("displayTable");
}

let search = new Search();