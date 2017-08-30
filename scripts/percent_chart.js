// function custom_rad(feature) {
//     if (feature.properties.level == 1) {
//         return {
//             radius: 1
//         }
//     }
//     else if (feature.properties.level == 2) {
//         return {
//             radius: 3
//         }
//     }
//     else if (feature.properties.level == 3) {
//         return {
//             radius: 5
//         }
//     }
// }
cnap_pcnt01 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == null && feature.properties.level == "1";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#E5E5E5'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#E5E5E5',
            radius: 6 // radius
        });
    },
});//.addTo(map);
cnap_pcnt02 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == null && feature.properties.level == "2";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#E5E5E5'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#E5E5E5',
            radius: 4 // radius
        });
    },
});//.addTo(map);
cnap_pcnt03 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == null && feature.properties.level == "3";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#E5E5E5'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#E5E5E5',
            radius: 2 // radius
        });
    },
});//.addTo(map);
cnap_pcnt11 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "1" && feature.properties.level == "1";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#1a9641'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#1a9641',
            radius: 6 // radius
        });
    },
});//.addTo(map);
cnap_pcnt12 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "1" && feature.properties.level == "2";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#1a9641'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#1a9641',
            radius: 4 // radius
        });
    },
});//.addTo(map);
cnap_pcnt13 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "1" && feature.properties.level == "3";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#1a9641'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#1a9641',
            radius: 2 // radius
        });
    },
});//.addTo(map);
cnap_pcnt21 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "2" && feature.properties.level == "1";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#a6d96a'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#a6d96a',
            radius: 6 // radius
        });
    },
});//.addTo(map);
cnap_pcnt22 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "2" && feature.properties.level == "2";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#a6d96a',
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#a6d96a',
            radius: 4 // radius
        });
    },
});//.addTo(map);
cnap_pcnt23 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "2" && feature.properties.level == "3";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#a6d96a',
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#a6d96a',
            radius: 2 // radius
        });
    },
});//.addTo(map);
cnap_pcnt31 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "3" && feature.properties.level == "1";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#ffff97'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#ffff97',
            radius: 6 // radius
        });
    },
});//.addTo(map);
cnap_pcnt32 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "3" && feature.properties.level == "2";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#ffff97',
                    displayOptions: null,
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#ffff97',
            radius: 4 // radius
        });
    },
});//.addTo(map);
cnap_pcnt33 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "3" && feature.properties.level == "3";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#ffff97',
                    displayText: false,
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#ffff97',
            radius: 2 // radius
        });
    },
});//.addTo(map);
cnap_pcnt41 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "4" && feature.properties.level == "1";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#d7191c'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#d7191c',
            radius: 6 // radius
        });
    },
});//.addTo(map);
cnap_pcnt42 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "4" && feature.properties.level == "2";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#d7191c'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#d7191c',
            radius: 4 // radius
        });
    },
});//.addTo(map);
cnap_pcnt43 = L.geoJson(cnap_data, {
    filter: function(feature, layer){
        return feature.properties.group == "4" && feature.properties.level == "3";
    },
    pointToLayer: function(feature, latlng) {
        return new L.RadialBarChartMarker(latlng, {
            data: {
                'dataPoint1': feature.properties.pop_perc,
            },
            chartOptions: {
                'dataPoint1': {
                    minValue: 0,
                    maxValue: 100,
                    maxHeight: 20,
                    fillColor: '#d7191c'
                }
            },
            rotation: 270,
            weight: 1,
            color: '#000000',
            fillOpacity: 1,
            fillColor: '#d7191c',
            radius: 2 // radius
        });
    },
});//.addTo(map);