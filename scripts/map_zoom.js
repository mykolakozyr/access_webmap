// // ZOOM DEPENDANT STYLE
// function custom_rad(e) {
//     console.log(e)
//     var keys = Object.keys(e).forEach( function (key) {
//         if (typeof(e[key].feature) != 'undefined') {
//             console.log(e[key].options.radius);
//             if (e[key].feature.properties.level == 1) {
//                 console.log()
//                 return {
//                     radius: 50
//                 }
//             }
//             else if (e[key].feature.properties.level == 2) {
//                 return {
//                     radius: 60
//                 }
//             }
//             else if (e[key].feature.properties.level == 3) {
//                 return {
//                     radius: 100
//                 }
//             }
//         }
//     })
// }

map.on('zoomend', function(e) {
    map.getZoom()
    var cnap_lvl1 = L.featureGroup([cnap_gr01, cnap_gr11, cnap_gr21, cnap_gr31, cnap_gr41]);
    var cnap_lvl2 = L.featureGroup([cnap_gr02, cnap_gr12, cnap_gr22, cnap_gr32, cnap_gr42]);
    var cnap_lvl3= L.featureGroup([cnap_gr03, cnap_gr13, cnap_gr23, cnap_gr33, cnap_gr43]);
    var cnap_pcnt1= L.featureGroup([cnap_pcnt01, cnap_pcnt11, cnap_pcnt21, cnap_pcnt31, cnap_pcnt41]);
    var cnap_pcnt2= L.featureGroup([cnap_pcnt02, cnap_pcnt12, cnap_pcnt22, cnap_pcnt32, cnap_pcnt42]);
    var cnap_pcnt3= L.featureGroup([cnap_pcnt03, cnap_pcnt13, cnap_pcnt23, cnap_pcnt33, cnap_pcnt43]);
    if ( map.getZoom() <= 5 && map.getZoom() < 6){
        cnap_lvl1.setStyle({
            'radius': 3
        });
        cnap_lvl2.setStyle({
            'radius': 2
        });
        cnap_lvl3.setStyle({
            'radius': 1
        });
        cnap_pcnt1.setStyle({
            'radius': 5,
            'radiusX': 5,
            'radiusY': 5
        });
        cnap_pcnt2.setStyle({
            'radius': 4,
            'radiusX': 4,
            'radiusY': 4
        });
        cnap_pcnt3.setStyle({
            'radius': 2,
            'radiusX': 2,
            'radiusY': 2
        });
    }
    else if ( map.getZoom() <= 6 && map.getZoom() < 7){
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 5
        });
        cnap_lvl2.setStyle({
            'radius': 3
        });
        cnap_lvl3.setStyle({
            'radius': 1
        });
        cnap_pcnt1.setStyle({
            'radius': 7,
            'radiusX': 7,
            'radiusY': 7
        });
        cnap_pcnt2.setStyle({
            'radius': 5,
            'radiusX': 5,
            'radiusY': 5
        });
        cnap_pcnt3.setStyle({
            'radius': 2,
            'radiusX': 2,
            'radiusY': 2
        });
    }
    else if ( map.getZoom() <= 7 && map.getZoom() < 8){
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 6
        });
        cnap_lvl2.setStyle({
            'radius': 4
        });
        cnap_lvl3.setStyle({
            'radius': 2
        });
        cnap_pcnt1.setStyle({
            'radius': 8,
            'radiusX': 8,
            'radiusY': 8
        });
        cnap_pcnt2.setStyle({
            'radius': 6,
            'radiusX': 6,
            'radiusY': 6
        });
        cnap_pcnt3.setStyle({
            'radius': 4,
            'radiusX': 4,
            'radiusY': 4
        });
        console.log(cnap_pcnt1);
    }
    else if ( map.getZoom() <= 8 && map.getZoom() < 9){
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 7
        });
        cnap_lvl2.setStyle({
            'radius': 5
        });
        cnap_lvl3.setStyle({
            'radius': 3
        });
        cnap_pcnt1.setStyle({
            'radius': 9,
            'radiusX': 9,
            'radiusY': 9
        });
        cnap_pcnt2.setStyle({
            'radius': 7,
            'radiusX': 7,
            'radiusY': 7
        });
        cnap_pcnt3.setStyle({
            'radius': 5,
            'radiusX': 5,
            'radiusY': 5
        });
    }
    else if ( map.getZoom() <= 9 && map.getZoom() < 10){
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 8
        });
        cnap_lvl2.setStyle({
            'radius': 6
        });
        cnap_lvl3.setStyle({
            'radius': 4
        });
        cnap_pcnt1.setStyle({
            'radius': 10,
            'radiusX': 10,
            'radiusY': 10
        });
        cnap_pcnt2.setStyle({
            'radius': 8,
            'radiusX': 8,
            'radiusY': 8
        });
        cnap_pcnt3.setStyle({
            'radius': 6,
            'radiusX': 6,
            'radiusY': 6
        });
    }
    else if ( map.getZoom() <= 10 && map.getZoom() < 11) {
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 9
        });
        cnap_lvl2.setStyle({
            'radius': 7
        });
        cnap_lvl3.setStyle({
            'radius': 4
        });
        cnap_pcnt1.setStyle({
            'radius': 11,
            'radiusX': 11,
            'radiusY': 11
        });
        cnap_pcnt2.setStyle({
            'radius': 9,
            'radiusX': 9,
            'radiusY': 9
        });
        cnap_pcnt3.setStyle({
            'radius': 6,
            'radiusX': 6,
            'radiusY': 6
        });
    }
    else if ( map.getZoom() <= 11 && map.getZoom() < 12) {
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 11
        });
        cnap_lvl2.setStyle({
            'radius': 8
        });
        cnap_lvl3.setStyle({
            'radius': 5
        });
        cnap_pcnt1.setStyle({
            'radius': 13,
            'radiusX': 13,
            'radiusY': 13
        });
        cnap_pcnt2.setStyle({
            'radius': 10,
            'radiusX': 10,
            'radiusY': 10
        });
        cnap_pcnt3.setStyle({
            'radius': 7,
            'radiusX': 7,
            'radiusY': 7
        });
    }
    else if ( map.getZoom() > 12) {
        // console.log(map.getZoom())
        cnap_lvl1.setStyle({
            'radius': 12
        });
        cnap_lvl2.setStyle({
            'radius': 9
        });
        cnap_lvl3.setStyle({
            'radius': 6
        });
        cnap_pcnt1.setStyle({
            'radius': 14,
            'radiusX': 14,
            'radiusY': 14
        });
        cnap_pcnt2.setStyle({
            'radius': 11,
            'radiusX': 11,
            'radiusY': 11
        });
        cnap_pcnt3.setStyle({
            'radius': 8,
            'radiusX': 8,
            'radiusY': 8
        });
    }    
});

// Layers Control
var cnap_lvl1 = L.featureGroup([cnap_gr01, cnap_gr11, cnap_gr21, cnap_gr31, cnap_gr41]).addTo(map);
var cnap_lvl2 = L.featureGroup([cnap_gr02, cnap_gr12, cnap_gr22, cnap_gr32, cnap_gr42]).addTo(map);
var cnap_lvl3= L.featureGroup([cnap_gr03, cnap_gr13, cnap_gr23, cnap_gr33, cnap_gr43]).addTo(map);

var cnap_gr0 = L.featureGroup([cnap_gr01, cnap_gr02, cnap_gr03]).addTo(map);
var cnap_gr1 = L.featureGroup([cnap_gr11, cnap_gr12, cnap_gr13]).addTo(map);
var cnap_gr2 = L.featureGroup([cnap_gr21, cnap_gr22, cnap_gr23]).addTo(map);
var cnap_gr3 = L.featureGroup([cnap_gr31, cnap_gr32, cnap_gr33]).addTo(map);
var cnap_gr4 = L.featureGroup([cnap_gr41, cnap_gr42, cnap_gr43]).addTo(map);

var cnap_pcnt1 = L.featureGroup([cnap_pcnt01, cnap_pcnt11, cnap_pcnt21, cnap_pcnt31, cnap_pcnt41]);
var cnap_pcnt2 = L.featureGroup([cnap_pcnt02, cnap_pcnt12, cnap_pcnt22, cnap_pcnt32, cnap_pcnt42]);
var cnap_pcnt3 = L.featureGroup([cnap_pcnt03, cnap_pcnt13, cnap_pcnt23, cnap_pcnt33, cnap_pcnt43]);

var cnap_pcnt = L.featureGroup([cnap_pcnt1, cnap_pcnt2, cnap_pcnt3])

var groupedOverlays= {
    "LEGEND": {
        "Amalgamated Community": otgLayer,
        "Service Coverage": cnap_pcnt,
    },
    Levels: {
        "Level 1": cnap_lvl1,
        "Level 2": cnap_lvl2,
        "Level 3": cnap_lvl3,
    },
    Groups: {
        "Group 1": cnap_gr1,
        "Group 2": cnap_gr2,
        "Group 3": cnap_gr3,
        "Group 4": cnap_gr4,
        "No Group Data": cnap_gr0,
    }
};
var options = {
    //exclusiveGroups: ["otg"],
    // Show a checkbox next to non-exclusive group labels for toggling all
    groupCheckboxes: false
};

var layerControl = L.control.groupedLayers(null, groupedOverlays, options);
map.addControl(layerControl);