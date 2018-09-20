var url = "http://127.0.0.1:5000/data/jsondata";
var maindata = d3.json(url);


var tile = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.streets",
accessToken: API_KEY
});

var baseMaps = {
  "The Bay": tile
};

var overlayMaps = {
  "SF Bars": sfBars,
  "SF Mex" : sfMex,
  "Oak Bars" : oakBars,
  "Oak Mex" : oakMex
};

var map = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 12,
  layers: [tile]
});

// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(map);



var sfBars = [];
var sfMex = [];
var oakBars = [];
var oakMex = [];

function createMarkers(response) {

  

  for (var index = 0; index < response.length; index++) {
    var x = response[index];

    if (x.City = "San Francisco" && (x.Category = "cocktailbar")){
      var sfbar_marker = L.marker([x.Lat,x.Long])
      .bindPopup("<h3>" + x.Name + "<h3>");

      sfBars.push(sfbar_marker);

    }
    else if (x.City = "Oakland" && (x.Category = "cocktailbar")){
      var oakbar_marker = L.marker([x.Lat,x.Long])
      .bindPopup("<h3>" + x.Name + "<h3>");
      // console.log("Hello");
      oakBars.push(oakbar_marker);
    }
    else if (x.City = "San Francisco" && (x.Category = "Mex_Food")){
      var sfMex_marker = L.Marker([x.Lat,x.Long])
      .bindPopup("<h3>" + x.Name + "<h3>")

      sfMex.push(sfMex_marker);
    }
    else if (x.City = "Oakland" && (x.Category = "Mex_Food")){
      var oakMex_marker = L.Marker([x.Lat,x.Long])
      .bindPopup("<h3>" + x.Name + "<h3>")

      oakMex.push(oakMex_marker);
    }

  };

  
  // createMap(L.layerGroup(sfBars));
  // createMap(L.layerGroup(sfMex));
  // L.layerGroup(oakBars).addTo(map);
  // createMap(L.layerGroup(oakMex));

};


// const API_KEY = “pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ”;


// var myMap = L.map("map", {
//  center: [37.7749, -122.4194],
//  zoom: 12
// });


// var tile = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);



// var btn = document.querySelector('#sf');

// btn.onclick = function(){

//   myMap.panTo(new L.LatLng(37.7749,-122.4194));
//   // myMap.zoomIn();

//   var sfBars = [];
//   var sfMex = [];

//   maindata.forEach(function(response){
//     // loop through the cities array, create a new marker, push it to the cityMarkers array
//     if (response.City = 'San Francisco' && response.Category == 'cocktailbar')
//       sfBars.push(
//         L.marker([response.Lat,response.Long])
//       )
//     // cityMarkers.push(
//     //   L.marker(city.location).bindPopup("<h1>" + city.name + "</h1>")
//     // );
//   });

//   var sfBars_Layer = L.layerGroup(sfBars);

//   var baseMaps = {
//     "Map Tile Layer": tile
//   };

//   var overlayMaps = {
//     "SF Bars": sfBars_Layer
//   };

//   L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// };

// var btn = document.querySelector('#oak');

// btn.onclick = function(){

//   myMap.panTo(new L.LatLng(37.8044,-122.2711));
//   // myMap.zoomIn();


// };



// var myMap2 = L.map("map2", {
//   center: [37.7749, -122.4194],
//   zoom: 11
//  });
 
 
//  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//    maxZoom: 18,
//    id: "mapbox.streets",
//    accessToken: API_KEY
//  }).addTo(myMap2);