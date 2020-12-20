var NUM_ANALYTICS = 7;
var ANALYTICS_NAMES = ['Kickstarter Success by Category', '% Funded/Target Goal by State', 'Kickstarter Success by Month', 'Kickstarter Success by Country', 'Kickstarter Success by Currency' , 'Average Backers/Pledges by Category', 'Kickstarter Success by Duration'];

var bg_color = ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)','rgba(89, 198, 211, 0.2)','rgba(147, 113, 255, 0.2)','rgba(47, 125, 198, 0.2)','rgba(198, 45, 111, 0.2)','rgba(1, 64, 206, 0.2)','rgba(175, 235, 235, 0.2)','rgba(214, 132, 99, 0.2)', 'rgba(157, 102, 206,1)', 'rgba(235, 192, 162, 0.2)']

var border_color = ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(89, 198, 211, 1)','rgba(147, 113, 255, 1)','rgba(47, 125, 198, 1)','rgba(198, 45, 111, 1)','rgba(1, 64, 206, 1)','rgba(175, 235, 235, 1)','rgba(214, 132, 99, 1)','rgba(157, 102, 206, 1)','rgba(235, 192, 162, 1)']

class Analytics {
	constructor() {
	}

	getAnalytics(analyticsType) {
		var call_function = 'analytics_' + analyticsType;
		this[call_function]();
	}

	async analytics_0() {
		const response = await fetch('/analytics/0')
  		var jsonData = await response.json();

		var displayArea = document.getElementById("graphContent");
		while(displayArea.hasChildNodes()) {
       			displayArea.removeChild(displayArea.firstChild);
    		}

		var categories = Object.keys(jsonData);
		var states = Object.keys(jsonData[categories[0]]);

		for(var i=0; i<categories.length; i++) {
			var graph = document.createElement("canvas");
			var data = [];

			for(var j=0; j<states.length; j++) {
				data.push(jsonData[categories[i]][states[j]]);
			}

			var label = categories[i];

			var myChart = new Chart(graph, {
    				type: 'bar',
    				data: {
        				labels: states,
        			datasets: [{
           				label: label,
            				data: data,
            				backgroundColor: bg_color,
            				borderColor: border_color,
            				borderWidth: 1
        			}]
    			},
    				options: {
					legend: {
        					display: false
    					},
					title: {
            					display: true,
            					text: categories[i]
        				}
    				}
			});
			displayArea.appendChild(graph);
		}
	}

	async analytics_1() {
		const response = await fetch('/analytics/1')
  		var jsonData = await response.json();

		var displayArea = document.getElementById("graphContent");
		while(displayArea.hasChildNodes()) {
       			displayArea.removeChild(displayArea.firstChild);
    		}

		var states = Object.keys(jsonData);

		for(var i=0; i<states.length; i++) {
			var graph = document.createElement("canvas");
			var data = jsonData[states[i]];
			var label = states[i];
			var scatterChart = new Chart(graph, {
   				type: 'scatter',
    				data: {
					datasets: [{
            					label: label,
            					data: data
        				}]
    				},
    				options: {
        				scales: {
						yAxes: [{
                					ticks: {
                    						min: 0,
								max: 100,
								stepSize: 10
                					},
							scaleLabel: {
								display: true,
								labelString: '% Funded'
							}
            					}],
            					xAxes: [{
							scaleLabel: {
								display: true,
								labelString: 'Target Goal'
							}
						}]
					},
					legend: {
        					display: false
    					},
					title: {
            					display: true,
            					text: states[i]
        				}
    				}
			});
		displayArea.appendChild(graph);
		}
	}

	async analytics_2() {
		const response = await fetch('/analytics/2')
  		var jsonData = await response.json();

		var displayArea = document.getElementById("graphContent");
		while(displayArea.hasChildNodes()) {
       			displayArea.removeChild(displayArea.firstChild);
    		}

		var states = Object.keys(jsonData);
		var months = Object.keys(jsonData[states[0]]);

		for(var i=0; i<states.length; i++) {
			var graph = document.createElement("canvas");
			var data = [];

			for(var j=0; j<months.length; j++) {
				data.push(jsonData[states[i]][months[j]]);
			}

			var label = states[i];

			var myChart = new Chart(graph, {
    				type: 'line',
    				data: {
        				labels: months,
        			datasets: [{
           				label: label,
            				data: data,
					tension: 0,
					fill: false,
            				backgroundColor: [
                				'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)',
						'rgba(0, 0, 0, 0.2)'
            				],
            				borderColor: [
                				'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)',
						'rgba(0, 0, 0, 1)'

            				],
            				borderWidth: 1
        			}]
    			},
    				options: {
					legend: {
        					display: false
    					},
					title: {
            					display: true,
            					text: '# ' + states[i]
        				}
    				}
			});
			displayArea.appendChild(graph);
		}
	}

	async analytics_3() {
		const response = await fetch('/analytics/3')
  		var jsonData = await response.json();

		var displayArea = document.getElementById("graphContent");
		while(displayArea.hasChildNodes()) {
       			displayArea.removeChild(displayArea.firstChild);
    		}

		var countries = Object.keys(jsonData);
		var states = Object.keys(jsonData[countries[0]]);

		for(var i=0; i<countries.length; i++) {
			var graph = document.createElement("canvas");
			var data = [];

			for(var j=0; j<states.length; j++) {
				data.push(jsonData[countries[i]][states[j]]);
			}

			var label = countries[i] + ' Statistics';

			var myChart = new Chart(graph, {
    				type: 'bar',
    				data: {
        				labels: states,
        			datasets: [{
           				label: label,
            				data: data,
            				backgroundColor: bg_color,
            				borderColor: border_color,
            				borderWidth: 1
        			}]
    			},
    				options: {
       					scales: {
            					yAxes: [{
                					ticks: {
                    						beginAtZero: true
                					},
            					}]
        				},
					legend: {
        					display: false
    					},
					title: {
            					display: true,
            					text: countries[i] + ' statistics'
        				}
    				}
			});
			displayArea.appendChild(graph);
		}
	}

	async analytics_4() {
		const response = await fetch('/analytics/4')
  		var jsonData = await response.json();

		var displayArea = document.getElementById("graphContent");
		while(displayArea.hasChildNodes()) {
       			displayArea.removeChild(displayArea.firstChild);
    		}

		var currencies = Object.keys(jsonData);
		var states = Object.keys(jsonData[currencies[0]]);

		for(var i=0; i<currencies.length; i++) {
			var graph = document.createElement("canvas");
			var data = [];

			for(var j=0; j<states.length; j++) {
				data.push(jsonData[currencies[i]][states[j]]);
			}

			var label = states[i];

			var myChart = new Chart(graph, {
    				type: 'pie',
    				data: {
        				labels: states,
        			datasets: [{
           				label: label,
            				data: data,
            				backgroundColor: bg_color,
            				borderColor: border_color,
            				borderWidth: 1
        			}]
    			},
    				options: {
					legend: {
						position: 'left'
					},
					title: {
            					display: true,
            					text: currencies[i] + ' statistics'
        				}
    				}
			});
			displayArea.appendChild(graph);
		}
	}

	async analytics_5() {
		const response = await fetch('/analytics/5')
  		var jsonData = await response.json();

		var displayArea = document.getElementById("graphContent");
		while(displayArea.hasChildNodes()) {
       			displayArea.removeChild(displayArea.firstChild);
    		}

		var titles = Object.keys(jsonData);
		var categories = Object.keys(jsonData[titles[0]]);

		for(var i=0; i<titles.length; i++) {
			var graph = document.createElement("canvas");
			var data = [];

			for(var j=0; j<categories.length; j++) {
				data.push(jsonData[titles[i]][categories[j]]);
			}

			var label = titles[i];

			var myChart = new Chart(graph, {
    				type: 'bar',
    				data: {
        				labels: categories,
        			datasets: [{
           				label: label,
            				data: data,
            				backgroundColor: bg_color,
            				borderColor: border_color,
            				borderWidth: 1
        			}]
    			},
    				options: {
					scales: {
            					yAxes: [{
                					ticks: {
                    						min: 0,
								max: 500,
								stepSize: 50
                					},
            					}]
        				},
					legend: {
        					display: false
    					},
					title: {
            					display: true,
            					text: titles[i]
        				}
    				}
			});
			displayArea.appendChild(graph);
		}
	}

	async analytics_6() {
		const response = await fetch('/analytics/6')
  		var jsonData = await response.json();

		console.log(jsonData);
	}
}

window.onload = async function() {
	var selection = document.getElementById('selection');

	var selectList = document.getElementById('selectList');
	for(var i=0; i<NUM_ANALYTICS; i++) {
		var option = document.createElement("option");
		option.text = ANALYTICS_NAMES[i];
		option.value = i;
		selectList.add(option);
	}
};

let analytics = new Analytics();
analytics.analytics_0();