


var url = "http://127.0.0.1:5000/data/jsondata";
d3.json(url, function(maindata){
  var btn = document.querySelector('#sf');
    
  btn.onclick = function(){
    map.panTo(new L.LatLng(37.7749,-122.4194));
    createMarkers(maindata, "San Francisco", "cocktailbar", map)
    createMarkers(maindata, "San Francisco", "Mex_Food", map)
  };
  var btn2 = document.querySelector('#oak');
    
  btn2.onclick = function(){
    map.panTo(new L.LatLng(37.8044,-122.2711));
    createMarkers(maindata, "Oakland", "cocktailbar", map)
    createMarkers(maindata, "Oakland", "Mex_Food", map)
  };
  var btn3 = document.querySelector('#rem');
    
  btn3.onclick = function(){
    map.eachLayer(function (layer) {
      map.removeLayer(layer);
    });
  };
});
var tile = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 22,
  id: "mapbox.streets",
  accessToken: API_KEY
});
var map = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 12,
  layers: [tile]
});
function createMarkers(response, city, category, map) {
  
  var markers = [];
  for (var index = 0; index < response.length; index++) {
    var x = response[index];
    if (x.City === city && (x.Category === category)){
      var sfbar_marker = L.marker([x.Lat,x.Long])
        .bindPopup("<h3>" + x.Name + "<h3>");
        markers.push(sfbar_marker);
    };
    var layer = L.layerGroup(markers);
    map.addLayer(layer);
  };
  var baseMaps = {
    'Bay': tile
  };
  var overlayMaps = {
    "Bars": layer
    
  };
  newControl=L.control.layers(baseMaps,overlayMaps,{collapsed:false}).addTo(map);
};




