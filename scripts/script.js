//general map state options
var map = L.map('map')
var southWest = L.latLng(40.00, 20.00),
northEast = L.latLng(55.00, 43.00),
bounds = L.latLngBounds(southWest, northEast);

map.setView([49.03, 31.50],6);
map.setMaxBounds(bounds);
map.setMinZoom(5);
map.setMaxZoom(11);

// create pane for showing labels on top the geojson file
map.createPane('labels_pane')
// This pane is above markers but below popups
map.getPane('labels_pane').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels_pane').style.pointerEvents = 'none';

// add basemap
L.tileLayer('https://api.mapbox.com/styles/v1/mykola-kozyr/cj47dr6zg117v2rlsm62ctk8x/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlrb2xhLWtvenlyIiwiYSI6ImNpemNzeHBhaDAwNHkycW8wZm40OHptdTMifQ.6q-bTx4fwm9Ch-knzk1i3Q', {
    maxZoom: 18,
    attribution: '<a href="http://cnap.in.ua/">Портал реформи адміністративних послуг</a> | ' + 
            '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
});//.addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
    });

    // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //     layer.bringToFront();
    // }

    info.update(layer.feature.properties);
}

var otgLayer;

function resetHighlight(e) {
    otgLayer.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
};
var regStyle = {
    radius: 8,
    fillColor: "blue",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.3   
};
otgLayer = L.geoJson(otg, {
    style: regStyle,
    onEachFeature: onEachFeature
}).addTo(map);


//add access real layer
var ar_layer = L.tileLayer('data/ar_3857/{z}/{x}/{y}.png', {
    minZoom: 5,
    // tms: true,
}).addTo(map);
//add access expert layer
var ae_layer = L.tileLayer('data/ae_3857/{z}/{x}/{y}.png', {
    minZoom: 5,
    // tms: true,
}).addTo(map)

// control that shows amalgamated community info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>Administrative Services Time Accessibility</h4>' +  (props ?
        '<b>' + props.OTG + '</b><br /> Total population ' + props.popul_text+ '<br /> Number of units: ' + props.num_units
        : 'Hover over an Amalgamated Community');
};

info.addTo(map);

//functions for lagends items
function getColor_ae(d) {
    return d == 30  ? '#ffdabf' :
    d == 20  ? '#ffb68e' :
    d == 10  ? '#ff6f2d' : 
    '';
}

function getColor_ar(d) {
    return d == 30  ? '#ffdfbf' :
    d == 20  ? '#ffc08e' :
    d == 10  ? '#ff822d' : 
    '';
}

// Legend for "ACCESS EXPERT (right) MAP"
var legend_ae = L.control({position: 'bottomright'});

legend_ae.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [10, 20, 30],
        labels = ['<strong> Time Accessibility. Proposals</strong><br>&nbsp<IMG STYLE="border: 5;" width=10 SRC="data/asc.png">&nbsp&nbsp&nbspProposed ASC'],
        data_list = [' - 29kk p. (74,1%), + 5,5%', ' - 36,1kk p. (92,4%), + 6,4%', '  - 38,6kk p. (98,8%), + 1,8%'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        data = data_list[i];

        labels.push(
            '<i style="background:' + getColor_ae(from) + '"></i> ' +
            from + ' minutes' + data);
        }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend_ae.addTo(map);

// Legend for "ACCESS REAL (left) MAP"
var legend_ar = L.control({position: 'bottomleft'});

legend_ar.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [10, 20, 30],
        labels = ['<strong> Time Accessibility. Current State </strong>'],
        data_list_ar = [' - 26,9kk p. (68,5%)', ' - 33,6kk p. (86%)', ' - 37,9kk p. (97%)'],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        data_ar = data_list_ar[i];

        labels.push(
            '<i style="background:' + getColor_ar(from) + '"></i> ' +
            from + ' minutes ' + data_ar);
        }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend_ar.addTo(map);   

//add slider for changing layer transparency
$(document).ready(function () {
    $("#basemapslider").slider({
        animate: true,
        value: 1,
        orientation: "vertical",
        min: 0,
        max: 1,
        step: 0.01,
        slide: function (event, ui) {
            ar_layer.setOpacity(ui.value),
            ae_layer.setOpacity(ui.value);
        }
    });
    $('#basemapslider').mouseup(function(){
        map.dragging.enable();
    })
    //add side by side control
    L.control.sideBySide(ar_layer, ae_layer).addTo(map)
})

L.tileLayer('https://api.mapbox.com/styles/v1/mykola-kozyr/cj4734xjt0snd2splhlf0z4c8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlrb2xhLWtvenlyIiwiYSI6ImNpemNzeHBhaDAwNHkycW8wZm40OHptdTMifQ.6q-bTx4fwm9Ch-knzk1i3Q', {
    maxZoom: 18,
    id: 'mapbox.labels',
    pane: 'labels_pane'
});//.addTo(map);

