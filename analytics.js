class Analytics {
	constructor() {
	}

	getAnalytics(analyticsType, data) {
		var call_function = 'analytics_' + analyticsType;
		var analyticsData = this[call_function](data);
		return analyticsData;
	}

	analytics_0(data) {
		var analyticsData = {};
		var states = {};
		for(var i=0; i<data.length; i++) {
			if (!states.hasOwnProperty([data[i]["state"]]) && data[i]["state"]) {
				states[data[i]["state"]] = 0;
			}
		}

		for(var i=0; i<data.length; i++) {
			if (!analyticsData.hasOwnProperty([data[i]["main_category"]]) && data[i]["main_category"]) {
				var newStates = {}
				Object.assign(newStates, states);
				analyticsData[data[i]["main_category"]] = newStates;
			}
		}

		var dataKeys = Object.keys(analyticsData);

		for(var i=0; i<data.length; i++) {
			if(data[i]['state']) {
				analyticsData[data[i]['main_category']][data[i]['state']] += 1;
			}
		}
		return analyticsData;
	}

	analytics_1(data) {
		var analyticsData = {};
		for(var i=0; i<data.length; i++) {
			if (!analyticsData.hasOwnProperty([data[i]["state"]]) && data[i]["state"]) {
				analyticsData[data[i]["state"]] = [];
			}
		}
		for(var i=0; i<data.length; i++) {
			if(data[i]["goal"] > 100 && data[i]["goal"] < 50000 && analyticsData[data[i]["state"]].length < 5000) {
				var project_goal = data[i]["goal"];
				var percent_funded = 100 * (data[i]["pledged"] / data[i]["goal"]);
				analyticsData[data[i]["state"]].push({x: project_goal, y: percent_funded});
			}
		}

		return analyticsData;
	}

	analytics_2(data) {
		var analyticsData = {};
		var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		for(var i=0; i<data.length; i++) {
			if (!analyticsData.hasOwnProperty([data[i]["state"]]) && data[i]["state"]) {
				analyticsData[data[i]["state"]] = {};
			}
		}

		var dataKeys = Object.keys(analyticsData);

		for(var i=0; i<dataKeys.length; i++) {
			for(var j=0; j<months.length; j++) {
				analyticsData[dataKeys[i]][months[j]] = 0;
			}
		}

		for(var i=0; i<data.length; i++) {
			if(data[i]['launched']) {
				var month = parseInt(data[i]['launched'].split('-')[1]) - 1;
				analyticsData[data[i]['state']][months[month]] += 1;
			}
		}

		return analyticsData;
	}

	analytics_3(data) {
		var analyticsData = {};
		var states = {};
		for(var i=0; i<data.length; i++) {
			if (!states.hasOwnProperty([data[i]["state"]]) && data[i]["state"]) {
				states[data[i]["state"]] = 0;
			}
		}

		for(var i=0; i<data.length; i++) {
			if (!analyticsData.hasOwnProperty([data[i]["country"]]) && data[i]["country"]) {
				var newStates = {}
				Object.assign(newStates, states);
				analyticsData[data[i]["country"]] = newStates;
			}
		}

		var dataKeys = Object.keys(analyticsData);

		for(var i=0; i<data.length; i++) {
			if(data[i]['state']) {
				analyticsData[data[i]['country']][data[i]['state']] += 1;
			}
		}

		return analyticsData;
	}

	analytics_4(data) {
		var analyticsData = {};
		var states = {};
		for(var i=0; i<data.length; i++) {
			if (!states.hasOwnProperty([data[i]["state"]]) && data[i]["state"]) {
				states[data[i]["state"]] = 0;
			}
		}

		for(var i=0; i<data.length; i++) {
			if (!analyticsData.hasOwnProperty([data[i]["currency"]]) && data[i]["currency"]) {
				var newStates = {}
				Object.assign(newStates, states);
				analyticsData[data[i]["currency"]] = newStates;
			}
		}

		var dataKeys = Object.keys(analyticsData);

		for(var i=0; i<data.length; i++) {
			if(data[i]['state']) {
				analyticsData[data[i]['currency']][data[i]['state']] += 1;
			}
		}

		return analyticsData;
	}

	analytics_5(data) {
		var analyticsData = {};
		var newData = {};
		var backersCount = {};
		var pledgesCount = {};
		var titles = ['Average # of backers by Category', 'Average pledge amount by Category']

		for(var i=0; i<titles.length; i++) {
			analyticsData[titles[i]] = {};
		}

		for(var i=0; i<data.length && data[i]["main_category"]; i++) {
			if (!newData.hasOwnProperty([data[i]["main_category"]])) {
				newData[data[i]["main_category"]] = 1;
				backersCount[data[i]["main_category"]] = 0;
				pledgesCount[data[i]["main_category"]] = 0;
			} else {
				newData[data[i]["main_category"]]++;
			}
			backersCount[data[i]["main_category"]] += parseInt(data[i]["backers"]);
			pledgesCount[data[i]["main_category"]] += parseInt(data[i]["pledged"]);
		}

		var dataKeys = Object.keys(newData);

		for(var i=0; i<dataKeys.length; i++) {
			analyticsData[titles[0]][dataKeys[i]] = backersCount[dataKeys[i]] / newData[dataKeys[i]];
			analyticsData[titles[1]][dataKeys[i]] = pledgesCount[dataKeys[i]] / backersCount[dataKeys[i]];
		}

		return analyticsData;
	}

	analytics_6(data) {
		var analyticsData = {};
		var date1 = '2014/10/21 15:13:06';
		var date2 = '2013/10/21';
		date1 = new Date(date1);
		date2 = new Date(date2);
		console.log(Math.abs(date2 - date1));
		return analyticsData;
	}
}

module.exports = Analytics;