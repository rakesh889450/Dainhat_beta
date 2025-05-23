var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DAINHAT_1 = new ol.format.GeoJSON();
var features_DAINHAT_1 = format_DAINHAT_1.readFeatures(json_DAINHAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAINHAT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAINHAT_1.addFeatures(features_DAINHAT_1);
var lyr_DAINHAT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAINHAT_1, 
                style: style_DAINHAT_1,
                popuplayertitle: "DAINHAT",
                interactive: true,
    title: 'DAINHAT<br />\
    <img src="styles/legend/DAINHAT_1_0.png" /> 1.04 - 1.5<br />\
    <img src="styles/legend/DAINHAT_1_1.png" /> 1.5 - 1.62<br />\
    <img src="styles/legend/DAINHAT_1_2.png" /> 1.62 - 1.74<br />\
    <img src="styles/legend/DAINHAT_1_3.png" /> 1.74 - 1.89<br />\
    <img src="styles/legend/DAINHAT_1_4.png" /> 1.89 - 2.07<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_DAINHAT_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_DAINHAT_1];
lyr_DAINHAT_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'WARD_NO_': 'Ward no.:', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ward_area': 'ward_area', 'Integrate': 'Integrate', 'BiPnorm': 'BiPnorm', 'cyclometri': 'cyclometri', 'beta': 'Beta', 'aalpha_beta_gama_eta_pi_Beta_': 'Beta', });
lyr_DAINHAT_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'WARD_NO_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ward_area': 'TextEdit', 'Integrate': 'TextEdit', 'BiPnorm': 'TextEdit', 'cyclometri': 'TextEdit', 'beta': 'TextEdit', 'aalpha_beta_gama_eta_pi_Beta_': 'TextEdit', });
lyr_DAINHAT_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'WARD_NO_': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ward_area': 'hidden field', 'Integrate': 'hidden field', 'BiPnorm': 'hidden field', 'cyclometri': 'hidden field', 'beta': 'inline label - always visible', 'aalpha_beta_gama_eta_pi_Beta_': 'hidden field', });
lyr_DAINHAT_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});