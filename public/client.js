const nav_Home = document.getElementById('myButton1');
const nav_Search = document.getElementById('myButton2');
const nav_Insert = document.getElementById('myButton3');
const nav_Analytics = document.getElementById('myButton4');
const Insert = document.getElementById('Add');
const search = document.getElementById('search');
const Reset_Data = document.getElementById('Reset_Data');
const New_CSV = document.getElementById('New_CSV');
const select_csv = document.getElementById('selectedfile');
const save_changes = document.getElementById('save_changes');
const select_feature = document.getElementById('selectedfeature');


var bg_color = ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)','rgba(89, 198, 211, 0.2)','rgba(147, 113, 255, 0.2)','rgba(47, 125, 198, 0.2)','rgba(198, 45, 111, 0.2)','rgba(1, 64, 206, 0.2)','rgba(175, 235, 235, 0.2)','rgba(214, 132, 99, 0.2)', 'rgba(157, 102, 206,1)', 'rgba(235, 192, 162, 0.2)']

var border_color = ['rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(89, 198, 211, 1)','rgba(147, 113, 255, 1)','rgba(47, 125, 198, 1)','rgba(198, 45, 111, 1)','rgba(1, 64, 206, 1)','rgba(175, 235, 235, 1)','rgba(214, 132, 99, 1)','rgba(157, 102, 206, 1)','rgba(235, 192, 162, 1)']

nav_Home.addEventListener('click', function(e) {
  var home = document.getElementById("Home");
  var search = document.getElementById("Search");
  var insert = document.getElementById("Insert");
  var analytics = document.getElementById("analytics");

  home.style.display = "block";
  search.style.display = "none";
  insert.style.display = "none";
  analytics.style.display = "none";
  csvoptions()
});
csvoptions()

nav_Search.addEventListener('click', function(e) {
  var home = document.getElementById("Home");
  var search = document.getElementById("Search");
  var insert = document.getElementById("Insert");
  var analytics = document.getElementById("analytics");

  home.style.display = "none";
  search.style.display = "block";
  insert.style.display = "none";
  analytics.style.display = "none";

});

nav_Insert.addEventListener('click', function(e) {
  var home = document.getElementById("Home");
  var search = document.getElementById("Search");
  var insert = document.getElementById("Insert");
  var analytics = document.getElementById("analytics");

  home.style.display = "none";
  search.style.display = "none";
  insert.style.display = "block";
  analytics.style.display = "none";
});

nav_Analytics.addEventListener('click', function(e) {
  var home = document.getElementById("Home");
  var search = document.getElementById("Search");
  var insert = document.getElementById("Insert");
  var analytics = document.getElementById("analytics");

  home.style.display = "none";
  search.style.display = "none";
  insert.style.display = "none";
  analytics.style.display = "block";

});




search.addEventListener('click', function(e) {
  //var category = document.getElementById('S_category').value;
  var value = document.getElementById('Value').value;
  var s = document.getElementById('searchOptions');
  var category = s.options[s.selectedIndex].text
  var tempJson = {
    category : category,
    value    : value
  }
  //fetch('https://morning-bayou-04462.herokuapp.com/search',{
  fetch('http://localhost:5080/search',{
    method : "post",
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    body   :  JSON.stringify(tempJson),
  })
  .then(response => response.json())
  .then(data => {
    //console.log(data.status);
  var table = document.getElementById("myTableData");
  var rowCount = table.rows.length;
  for (var x=rowCount-1; x>0; x--) {
      table.deleteRow(x);
  }
  for (var i = 0; i < data.data.length; i++) {
    var button = document.createElement('input');
    const s1 = '✖' //é
    var setup = i +1;
    button.setAttribute('type', 'button');
    button.setAttribute('value', s1);
    button.setAttribute('id', setup);
    button.setAttribute('onclick', 'deleting(id)');

    var buttonEdit = document.createElement('input');
    const s2 = '✎' //é
    var setup = i +1;
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.setAttribute('value', s2);
    buttonEdit.setAttribute('id', setup);
    buttonEdit.setAttribute('onclick', 'Editing(id)');

    var tr = document.createElement('tr');


    tr.setAttribute("id", "row" + i);
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
    var td17 = document.createElement('td');

    var text1 = document.createTextNode(data.data[i].ID);
    var text2 = document.createTextNode(data.data[i].name);
    var text3 = document.createTextNode(data.data[i].category);
    var text4 = document.createTextNode(data.data[i].main_category);
    var text5 = document.createTextNode(data.data[i].currency,);
    var text6 = document.createTextNode(data.data[i].deadline);
    var text7 = document.createTextNode(data.data[i].goal);
    var text8 = document.createTextNode(data.data[i].launched);
    var text9 = document.createTextNode(data.data[i].pledged);
    var text10 = document.createTextNode(data.data[i].state);
    var text11 = document.createTextNode(data.data[i].backers);
    var text12 = document.createTextNode(data.data[i].country);
    var text13 = document.createTextNode(data.data[i].usd_pledged);
    var text14 = document.createTextNode(data.data[i].usd_pledged_real);
    var text15 = document.createTextNode(data.data[i].usd_goal_real);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    td6.appendChild(text6);
    td7.appendChild(text7);
    td8.appendChild(text8);
    td9.appendChild(text9);
    td10.appendChild(text10);
    td11.appendChild(text11);
    td12.appendChild(text12);
    td13.appendChild(text13);
    td14.appendChild(text14);
    td15.appendChild(text15);
    td16.appendChild(button);
    td17.appendChild(buttonEdit);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    tr.appendChild(td11);
    tr.appendChild(td12);
    tr.appendChild(td13);
    tr.appendChild(td14);
    tr.appendChild(td15);
    tr.appendChild(td16);
    tr.appendChild(td17);
    tr.onclick = (function(){
      let brandon = tr;
      return function(){
        selectedRowToInput(brandon);
      }
    })();
    table.appendChild(tr);
  }
  })
});


function Editing(id){
  console.log(id);
  var name = document.getElementById("Iname").value
  var category = document.getElementById("Icategory").value
  var main_category = document.getElementById("Imain_category").value
  var currency = document.getElementById("Icurrency").value
  var deadline = document.getElementById("Ideadline").value
  var goal = document.getElementById("Igoal").value
  var launched = document.getElementById("Ilaunched").value
  var pledged = document.getElementById("Ipledged").value
  var state = document.getElementById("Istate").value
  var backers = document.getElementById("Ibackers").value
  var country = document.getElementById("Icountry").value
  var usdpledged = document.getElementById("Iusdpledged").value
  var usd_pledged_real = document.getElementById("Iusd_pledged_real").value
  var usd_goal_real = document.getElementById("Iusd_goal_real").value
  var id = document.getElementById("myTableData").rows[id].cells.item(0).innerHTML;
  var tempJson = {
    id               : id,
    name             : name,
    category         : category,
    main_category    : main_category,
    currency         : currency,
    deadline         : deadline,
    goal             : goal,
    launched         : launched,
    pledged          : pledged,
    state            : state,
    backers          : backers,
    country          : country,
    usdpledged       : usdpledged,
    usd_pledged_real : usd_pledged_real,
    usd_goal_real    : usd_goal_real
  }
fetch('http://localhost:5080/edit',{
    method : "post",
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    body   :  JSON.stringify(tempJson),
  })
  .then(res => console.log(res))

}
function deleting(row){
  var id = document.getElementById("myTableData").rows[row].cells.item(0).innerHTML;
  var tempJson = {
    id : id
  }
fetch('http://localhost:5080/delete',{
    method : "post",
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    body   :  JSON.stringify(tempJson),
  })
  .then(res => console.log(res))



}

Insert.addEventListener('click', function(e) {
  var ID = document.getElementById('input_id').value;
  var name = document.getElementById('input_name').value;
  var category = document.getElementById('input_category').value;
  var main_category = document.getElementById('input_maincategory').value;
  var currency = document.getElementById('input_currency').value;
  var deadline = document.getElementById('input_deadline').value;
  var goal = document.getElementById('input_goal').value;
  var launched = document.getElementById('input_launched').value;
  var pledged = document.getElementById('input_pledged').value;
  var state = document.getElementById('input_state').value;
  var backers = document.getElementById('input_backers').value;
  var country = document.getElementById('input_country').value;
  var usdpledged = document.getElementById('input_usdpledged').value;
  var usd_pledged_real = document.getElementById('usd_pledged_real').value;
  var usd_goal_real = document.getElementById('usd_goal_real').value;

  var tempJson = {
    ID               : ID,
    name             : name,
    category         : category,
    main_category    : main_category,
    currency         : currency,
    deadline         : deadline,
    goal             : goal,
    launched         : launched,
    pledged          : pledged,
    state            : state,
    backers          : backers,
    country          : country,
    usdpledged       : usdpledged,
    usd_pledged_real : usd_pledged_real,
    usd_goal_real    : usd_goal_real
  }
  fetch('http://localhost:5080/Add',{
    method : "post",
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    body   :  JSON.stringify(tempJson),
  })
  .then(response => {
     if(response.status == 200 ){
      alert("Successfully added to the Database");
      return;
    }
    if(response.status == 400 ){
      alert("Something went wrong, could not add into Database");
      return;
    }
  })

});

function selectedRowToInput(tr){
      document.getElementById("Iname").value = tr.cells[1].innerHTML;
      document.getElementById("Imain_category").value = tr.cells[3].innerHTML;
      document.getElementById("Icurrency").value = tr.cells[4].innerHTML;
      document.getElementById("Ideadline").value = tr.cells[5].innerHTML;
      document.getElementById("Igoal").value = tr.cells[6].innerHTML;
      document.getElementById("Ilaunched").value = tr.cells[7].innerHTML;
      document.getElementById("Ipledged").value = tr.cells[8].innerHTML;
      document.getElementById("Istate").value = tr.cells[9].innerHTML;
      document.getElementById("Ibackers").value = tr.cells[10].innerHTML;
      document.getElementById("Icountry").value = tr.cells[11].innerHTML;
      document.getElementById("Iusdpledged").value = tr.cells[12].innerHTML;
      document.getElementById("Iusd_pledged_real").value = tr.cells[13].innerHTML;
      document.getElementById("Iusd_goal_real").value = tr.cells[14].innerHTML;
      document.getElementById("Icategory").value = tr.cells[2].innerHTML;

}

Reset_Data.addEventListener('click', function(e) {
  fetch('http://localhost:5080/Reset_Data')
  //fetch('https://morning-bayou-04462.herokuapp.com/Reset_Data',{
  .then(res =>{
     if(res.status == 200 ){
      alert("Successfully reverted database into origional Kickstarter csv");
      return;
    }
    if(res.status == 400 ){
      alert("Something went wrong, could not revert database");
      return;
    }}
  )
});


select_csv.addEventListener('click', function(e) {
  var s = document.getElementById('filetoinput');
  var file = s.options[s.selectedIndex].text;
  //console.log(file);
  var tempJson = {
  file : file
  }
  fetch('http://localhost:5080/import',{
    method : "post",
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    body   :  JSON.stringify(tempJson),
  })
  .then(res => {
     if(res.status == 200 ){
      alert("Successfully inserted file");
      return;
    }
    if(res.status == 400 ){
      alert("Could not inserted file");
      return;
    }})

});

save_changes.addEventListener('click', function(e) {
  fetch('http://localhost:5080/savechanges')
  .then(res => console.log(res))
});

function csvoptions(){
  var select = document.getElementById("filetoinput");
  select.options.length = 0;
  fetch('http://localhost:5080/csvoptions.txt')
  .then(res => res.text())
  .then(res => {
    var lines = res.split("\n");
    //console.log(lines);
    for (var i = 0; i < lines.length; i++) {
      select.options[select.options.length] = new Option(lines[i], '0');
    }
  })
}


select_feature.addEventListener('click', function(e) {
  var s = document.getElementById('features');
  var option = s.options[s.selectedIndex].text;
  //console.log(option);
  var number = 11;
  if (option == "Kickstarter success by category"){
    number =0;
  }
  if (option == "%Funded/Target Goal by State"){
    number =1;
  }
  if (option == "Kickstarter Success by Month"){
    number =2;
  }
  if (option == "Kicker Success by Country"){
    number =3;
  }
  if (option == "Kickstarter Success by Currency"){
    number =4;
  }
  if (option == "Average Backers/Pledges by Category"){
    number =5;
  }
  if (option == "Backers by currency type/pledges"){
    number =6;
  }
  if (option == "Number of subcategory for main category"){
    number =7;
  }
  if (option == "Kickstarter name length by success"){
    number =8;
  }
  if (option == "Kickstarter running time by success"){
    number =9;
  }
   var tempJson = {
    number : number
  }

    fetch('http://localhost:5080/analytics',{
    method : "post",
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    body   :  JSON.stringify(tempJson),
  })
  .then(response => response.json())
  .then(data => {

  if (option == "Kickstarter success by category"){
    analytics_0(data);
  }
  if (option == "%Funded/Target Goal by State"){
    analytics_1(data);
  }
  if (option == "Kickstarter Success by Month"){
    analytics_2(data);
  }
  if (option == "Kicker Success by Country"){
    analytics_3(data);
  }
  if (option == "Kickstarter Success by Currency"){
    analytics_4(data);
  }
  if (option == "Backers by currency type/pledges"){
    analytics_5(data);
  }
  if (option == "Average Backers/Pledges by Category"){
    analytics_6(data);
  }
  if (option == "Number of subcategory for main category"){
    analytics_7(data);
  }
  if (option == "Kickstarter name length by success"){
    analytics_8(data);
  }
  if (option == "Kickstarter running time by success"){
    analytics_9(data);
  }
  })



});

function analytics_0(data){
var jsonData = data;
    var displayArea = document.getElementById("mygraphs");
        while(displayArea.hasChildNodes()) {
                   displayArea.removeChild(displayArea.firstChild);
            }
        var categories = Object.keys(jsonData);
        console.log('categories: ' +categories);
        console.log(jsonData["Publishing"]);// look for why it works now wtfff
        var states = Object.keys(jsonData[categories[0]]);

        for(var i=0; i<categories.length; i++) {
            var graph = document.createElement("canvas");
            var data = [];

            for(var j=0; j<states.length; j++) {
                data.push(jsonData[categories[i]][states[j]]);
            }

            var label = categories[i];
            //console.log('data: ' + states);
            var myChart = new Chart(graph, {
                    type: 'bar',
                    data: {
                        labels: states,
                    datasets: [{
                           //label: label,
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

function analytics_1(data){
  var jsonData = data;

    var displayArea = document.getElementById("mygraphs");
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

function analytics_2(data){
  var jsonData = data;

    var displayArea = document.getElementById("mygraphs");
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

function analytics_3(data){
  var jsonData = data;

    var displayArea = document.getElementById("mygraphs");
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

function analytics_4(data){
  var jsonData = data;

    var displayArea = document.getElementById("mygraphs");
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

function analytics_5(data){
  var jsonData = data;

    var displayArea = document.getElementById("mygraphs");
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
                max: 2000,
                stepSize: 200
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

function analytics_6(data){
  var jsonData = data;

    var displayArea = document.getElementById("mygraphs");
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

function analytics_7(data){
var jsonData = data;
    var displayArea = document.getElementById("mygraphs");
        while(displayArea.hasChildNodes()) {
                   displayArea.removeChild(displayArea.firstChild);
            }
        var categories = Object.keys(jsonData);
        //console.log(jsonData["Publishing"]);// look for why it works now wtfff
        for(var i=0; i<categories.length; i++) {
            var graph = document.createElement("canvas");
            var data = [];
            var states = Object.keys(jsonData[categories[i]]);
            for(var j=0; j<states.length; j++) {
                data.push(jsonData[categories[i]][states[j]]);
            }

            var label = categories[i];
            var myChart = new Chart(graph, {
                    type: 'bar',
                    data: {
                        labels: states,
                    datasets: [{
                           //label: label,
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

function analytics_8(data){
  var jsonData = data;
    var displayArea = document.getElementById("mygraphs");
        while(displayArea.hasChildNodes()) {
                   displayArea.removeChild(displayArea.firstChild);
            }
        var categories = Object.keys(jsonData);
        console.log('categories: ' +categories);
      
            var graph = document.createElement("canvas");
            var data = [];
            var states = Object.keys(jsonData[categories[0]]);
        

            for(var i=0; i<categories.length; i++) {
                if(jsonData[categories[i]][states[2]] > 1){
                data.push(jsonData[categories[i]][states[2]]);
              
              }
              else {
                categories.splice(i, 1);
              }
            }
          var coloR = [];
          var coloB = [];
         for (var i=0; i<categories.length; i++) {
            coloR.push(dynamicColors());
            coloB.push(dynamicColors2())
         }
            var label = categories[i];
            var myChart = new Chart(graph, {
                    type: 'bar',
                    data: {
                        labels: categories,
                    datasets: [{
                           //label: label,
                            data: data,
                            backgroundColor: coloR,
                            borderColor: coloR,
                            borderWidth: 1
                    }]
                },
                    options: {

                    legend: {
                            display: false
                        },
                    title: {
                                display: true,
                                text: 'Kickstarter name size by success'
                        }
                    }
            });
            displayArea.appendChild(graph);
}

function analytics_9(data){
  var jsonData = data;
  var displayArea = document.getElementById("mygraphs");
  while(displayArea.hasChildNodes()) {
    displayArea.removeChild(displayArea.firstChild);
  }
  var categories = Object.keys(jsonData);
  var graph = document.createElement("canvas");
  var data = [];
  var states = Object.keys(jsonData[categories[0]]);
  for(var i=0; i<categories.length; i++) {
    if(jsonData[categories[i]][states[2]] > 1){
      data.push(jsonData[categories[i]][states[2]]);
    }
    else {
      categories.splice(i, 1);
    }
  }

  var coloR = [];
  var coloB = [];
  for (var i=0; i<categories.length; i++) {
    coloR.push(dynamicColors());
    coloB.push(dynamicColors2())
  }
  var label = categories[i];
  var myChart = new Chart(graph, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: [{
       //label: label,
        data: data,
        backgroundColor: coloR,
        borderColor: coloB,
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Success by week uptime'
      }
    }
  });
  displayArea.appendChild(graph);
}
function dynamicColors() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};
function dynamicColors2() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};