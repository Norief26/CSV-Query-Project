class Home {
	constructor() {
	}

	initDB(fileName) {
	console.log("Test");
		fetch('/init/' + fileName);
	}
}

window.onload = async function() {
	const response = await fetch('/directories');
	var headers = await response.json();
	var selectList = document.getElementById('dataset-list');
	var option = document.createElement("option");
	option.text = "<Select Dataset>";
	option.disabled = true;
    	option.selected = true;
	selectList.add(option);
	for(var i=0; i<headers.length; i++) {
		var option = document.createElement("option");
		option.text = headers[i];
		selectList.add(option);
	}
}

let home = new Home();