alert('testing javascript linking')


var url = "http://127.0.0.1:5000/data/jsondata";
var maindata = d3.json(url, function (json) {
    //code here
    console.log(json)
});

