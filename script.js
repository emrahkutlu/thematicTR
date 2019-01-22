var mymap = L.map('mapid').setView([38.703,34.915], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);


L.marker([39.9215219, 32.8537929]).addTo(mymap)
    .bindPopup("<b>Ankara</b><br />Capitol");

var popup = L.popup();

L.circleMarker([39.9215219, 32.8537929], {radius: 10}).addTo(mymap);

function style(feature) {
  return {
    color: '#e5f5f9', 
    fillColor: 'turquoise',
    weight: '2'         
    }
};

function highlightFeature(e) {
var layer = e.target;

layer.setStyle({
    weight: 2,
    color: 'gold',
    dashArray: '',
    fillOpacity: 0.7
});

if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
}

//info.update(layer.feature.properties);
}
var geojson;

function resetHighlight(e) {
geojson.resetStyle(e.target);
//info.update();
}
/*
function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}
*/

function onEachFeature(feature, layer) {
layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    //click: zoomToFeature
});
}


//L.geoJson(trLvl3).addTo(mymap); //attrib: EN: © EuroGeographics for the administrative boundaries
//L.geoJson(trLvl4).addTo(mymap);
//L.geoJson(trStatSilk).addTo(mymap);
//L.geoJson(trGadm0).addTo(mymap);
//L.geoJson(trGadm2).addTo(mymap);
geojson = L.geoJson(trGadm1, {
    style: style, 
    onEachFeature: onEachFeature
}).bindPopup(function (trGadm1) {
return trGadm1.feature.properties.NAME_1}).addTo(mymap);


/*    function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
*/