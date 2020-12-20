var categories = null;

class Insert {
	constructor() {
	}

	async insert() {
		var data = {};

		for(var i=0; i<categories.length; i++) {
			data[categories[i]] = document.getElementById(categories[i]).value;
		}

  		await fetch('/insert/add',{
    			method : "post",
    			headers: {
           		     'Accept': 'application/json',
           		     'Content-Type': 'application/json',
        			},
    			body   :  JSON.stringify(data),
  		})

		window.location.reload();
	}
}

window.onload = async function() {
	const response = await fetch('/getcategories');
	var results = await response.json();
	categories = results;
	
	var formTextField = document.getElementById("form_text_field");
	var insertDataString = document.createElement('p');
	insertDataString.id = 'form_header';
	insertDataString.innerHTML = 'Insert Data';
	formTextField.appendChild(insertDataString);

	for(var i=0; i<categories.length; i++) {
		var input_field = document.createElement("input");
		input_field.id = categories[i];
		input_field.placeholder = categories[i];
		input_field.style.width = '100%';
		input_field.style.boxSizing = 'border-box';
		formTextField.appendChild(input_field);
	}

	var div = document.createElement('div');
	div.id = 'form_button';

	var submitInsertButton = document.createElement('button');
	var submitText = document.createTextNode("Insert into Database");
	submitInsertButton.append(submitText);
	submitInsertButton.setAttribute('onClick', 'insert.insert()');
	div.appendChild(submitInsertButton);

	formTextField.appendChild(div);
	
};

let insert = new Insert();