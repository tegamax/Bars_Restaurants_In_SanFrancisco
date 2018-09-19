
// making sure data api is working..
var url2 = "http://127.0.0.1:5000/data/jsondata";
var maindata2 = d3.json(url2, function (json) {
    //code here
    console.log(json)
});

// isaac line chart



const ctx = document.getElementById("lineChart");


var jsonfile = {
    "jsonarray": [{
       "name": "Joe",
       "age": 12
    }, {
       "name": "Tom",
       "age": 14
    }]
 };
 
 var labels = jsonfile.jsonarray.map(function(e) {
    return e.name;
 });
 var data = jsonfile.jsonarray.map(function(e) {
    return e.age;
 });;
 
 var config = {
    type: 'line',
    data: {
       labels: labels,
       datasets: [{
          label: 'Graph Line',
          data: data,
          backgroundColor: 'rgba(0, 119, 204, 0.3)'
       }]
    }
 };
 console.log(config)
 var chart = new Chart(ctx, config);