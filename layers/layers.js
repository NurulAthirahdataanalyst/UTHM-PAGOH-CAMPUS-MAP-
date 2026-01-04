ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([102.729019, 2.146932, 102.733376, 2.151978]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UTHMCAMPUSBUILDING_1 = new ol.format.GeoJSON();
var features_UTHMCAMPUSBUILDING_1 = format_UTHMCAMPUSBUILDING_1.readFeatures(json_UTHMCAMPUSBUILDING_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTHMCAMPUSBUILDING_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTHMCAMPUSBUILDING_1.addFeatures(features_UTHMCAMPUSBUILDING_1);
var lyr_UTHMCAMPUSBUILDING_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTHMCAMPUSBUILDING_1, 
                style: style_UTHMCAMPUSBUILDING_1,
                popuplayertitle: 'UTHM CAMPUS ( BUILDING )',
                interactive: true,
    title: 'UTHM CAMPUS ( BUILDING )<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_0.png" /> 2A<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_1.png" /> A1<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_2.png" /> BLOK B<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_3.png" /> BLOK C<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_4.png" /> BLOK D<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_5.png" /> BLOK E<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_6.png" /> BLOK F<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_7.png" /> BLOK H<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_8.png" /> BLOK J<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_9.png" /> BLOK K<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_10.png" /> G<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_11.png" /> J<br />\
    <img src="styles/legend/UTHMCAMPUSBUILDING_1_12.png" /> <br />' });
var format_UTHMCAMPUSNAME_2 = new ol.format.GeoJSON();
var features_UTHMCAMPUSNAME_2 = format_UTHMCAMPUSNAME_2.readFeatures(json_UTHMCAMPUSNAME_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTHMCAMPUSNAME_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTHMCAMPUSNAME_2.addFeatures(features_UTHMCAMPUSNAME_2);
var lyr_UTHMCAMPUSNAME_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTHMCAMPUSNAME_2, 
                style: style_UTHMCAMPUSNAME_2,
                popuplayertitle: 'UTHM CAMPUS ( NAME )',
                interactive: true,
    title: 'UTHM CAMPUS ( NAME )<br />\
    <img src="styles/legend/UTHMCAMPUSNAME_2_0.png" /> Laboratory<br />\
    <img src="styles/legend/UTHMCAMPUSNAME_2_1.png" /> Office/General<br />\
    <img src="styles/legend/UTHMCAMPUSNAME_2_2.png" /> Parking<br />\
    <img src="styles/legend/UTHMCAMPUSNAME_2_3.png" /> Surau<br />\
    <img src="styles/legend/UTHMCAMPUSNAME_2_4.png" /> Workshop<br />\
    <img src="styles/legend/UTHMCAMPUSNAME_2_5.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_UTHMCAMPUSBUILDING_1.setVisible(true);lyr_UTHMCAMPUSNAME_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UTHMCAMPUSBUILDING_1,lyr_UTHMCAMPUSNAME_2];
lyr_UTHMCAMPUSBUILDING_1.set('fieldAliases', {'fid': 'fid', 'BLOCK': 'BLOCK', 'CATEGORY': 'CATEGORY', 'KLUSTER': 'KLUSTER', 'LEVELS': 'LEVELS', });
lyr_UTHMCAMPUSNAME_2.set('fieldAliases', {'fid': 'fid', 'Room Kod': 'Room Kod', 'Room No.': 'Room No.', 'Room Name': 'Room Name', 'Kluster': 'Kluster', 'PIC 1': 'PIC 1', 'PIC 2': 'PIC 2', 'WEBSITE': 'WEBSITE', 'Type_Room': 'Type_Room', });
lyr_UTHMCAMPUSBUILDING_1.set('fieldImages', {'fid': 'TextEdit', 'BLOCK': 'TextEdit', 'CATEGORY': 'TextEdit', 'KLUSTER': 'TextEdit', 'LEVELS': 'TextEdit', });
lyr_UTHMCAMPUSNAME_2.set('fieldImages', {'fid': 'Hidden', 'Room Kod': 'TextEdit', 'Room No.': 'TextEdit', 'Room Name': 'TextEdit', 'Kluster': 'TextEdit', 'PIC 1': 'TextEdit', 'PIC 2': 'TextEdit', 'WEBSITE': 'ExternalResource', 'Type_Room': 'TextEdit', });
lyr_UTHMCAMPUSBUILDING_1.set('fieldLabels', {'fid': 'no label', 'BLOCK': 'inline label - always visible', 'CATEGORY': 'header label - visible with data', 'KLUSTER': 'inline label - always visible', 'LEVELS': 'inline label - always visible', });
lyr_UTHMCAMPUSNAME_2.set('fieldLabels', {'Room Kod': 'inline label - always visible', 'Room No.': 'inline label - always visible', 'Room Name': 'inline label - always visible', 'Kluster': 'inline label - always visible', 'PIC 1': 'inline label - always visible', 'PIC 2': 'inline label - always visible', 'WEBSITE': 'inline label - always visible', 'Type_Room': 'inline label - always visible', });
lyr_UTHMCAMPUSNAME_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});