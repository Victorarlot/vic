var wms_layers = [];


        var lyr_FonddecarteDark_0 = new ol.layer.Tile({
            'title': 'Fond de carte (Dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AiredeBesanon_1 = new ol.format.GeoJSON();
var features_AiredeBesanon_1 = format_AiredeBesanon_1.readFeatures(json_AiredeBesanon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AiredeBesanon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AiredeBesanon_1.addFeatures(features_AiredeBesanon_1);
var lyr_AiredeBesanon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AiredeBesanon_1, 
                style: style_AiredeBesanon_1,
                popuplayertitle: 'Aire de Besançon',
                interactive: false,
                title: '<img src="styles/legend/AiredeBesanon_1.png" /> Aire de Besançon'
            });
var format_Indicedebiodiversit_2 = new ol.format.GeoJSON();
var features_Indicedebiodiversit_2 = format_Indicedebiodiversit_2.readFeatures(json_Indicedebiodiversit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicedebiodiversit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicedebiodiversit_2.addFeatures(features_Indicedebiodiversit_2);
var lyr_Indicedebiodiversit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicedebiodiversit_2, 
                style: style_Indicedebiodiversit_2,
                popuplayertitle: 'Indice de biodiversité',
                interactive: true,
    title: 'Indice de biodiversité<br />\
    <img src="styles/legend/Indicedebiodiversit_2_0.png" /> très élevé<br />\
    <img src="styles/legend/Indicedebiodiversit_2_1.png" /> élevé<br />\
    <img src="styles/legend/Indicedebiodiversit_2_2.png" /> moyen<br />\
    <img src="styles/legend/Indicedebiodiversit_2_3.png" /> bas<br />\
    <img src="styles/legend/Indicedebiodiversit_2_4.png" /> très bas<br />\
    <img src="styles/legend/Indicedebiodiversit_2_5.png" /> nul<br />' });

lyr_FonddecarteDark_0.setVisible(true);lyr_AiredeBesanon_1.setVisible(true);lyr_Indicedebiodiversit_2.setVisible(true);
var layersList = [lyr_FonddecarteDark_0,lyr_AiredeBesanon_1,lyr_Indicedebiodiversit_2];
lyr_AiredeBesanon_1.set('fieldAliases', {'fid': 'fid', 'codgeo': 'codgeo', 'libgeo': 'libgeo', 'aav2020': 'aav2020', 'libaav2020': 'libaav2020', 'cateaav': 'cateaav', 'dep': 'dep', 'reg': 'reg', });
lyr_Indicedebiodiversit_2.set('fieldAliases', {'fid': 'fid', 'dens_bati': 'dens_bati', 'dens_vege': 'dens_vege', 'Densite_ba': 'Densite_ba', 'route_sum': 'route_sum', 'Hauteur_me': 'Hauteur_me', 'parcelle_m': 'parcelle_m', 'parcelle_c': 'parcelle_c', 'Cluster': 'Cluster', 'cluster6': 'cluster6', 'Cluster7': 'Cluster7', 'Tissus_urb': 'Tissus_urb', 'superficie': 'superficie', 'arehab': 'arehab', 'Dens_hab': 'Dens_hab', 'ZNIEFF': 'ZNIEFF', 'IND_biodiv': 'IND_biodiv', });
lyr_AiredeBesanon_1.set('fieldImages', {'fid': 'TextEdit', 'codgeo': 'TextEdit', 'libgeo': 'TextEdit', 'aav2020': 'TextEdit', 'libaav2020': 'TextEdit', 'cateaav': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', });
lyr_Indicedebiodiversit_2.set('fieldImages', {'fid': 'TextEdit', 'dens_bati': 'TextEdit', 'dens_vege': 'TextEdit', 'Densite_ba': 'TextEdit', 'route_sum': 'TextEdit', 'Hauteur_me': 'TextEdit', 'parcelle_m': 'TextEdit', 'parcelle_c': 'TextEdit', 'Cluster': 'TextEdit', 'cluster6': 'TextEdit', 'Cluster7': 'TextEdit', 'Tissus_urb': 'TextEdit', 'superficie': 'TextEdit', 'arehab': 'TextEdit', 'Dens_hab': 'TextEdit', 'ZNIEFF': 'TextEdit', 'IND_biodiv': 'TextEdit', });
lyr_AiredeBesanon_1.set('fieldLabels', {'fid': 'no label', 'codgeo': 'no label', 'libgeo': 'no label', 'aav2020': 'no label', 'libaav2020': 'no label', 'cateaav': 'no label', 'dep': 'no label', 'reg': 'no label', });
lyr_Indicedebiodiversit_2.set('fieldLabels', {'fid': 'hidden field', 'dens_bati': 'hidden field', 'dens_vege': 'hidden field', 'Densite_ba': 'hidden field', 'route_sum': 'hidden field', 'Hauteur_me': 'hidden field', 'parcelle_m': 'hidden field', 'parcelle_c': 'hidden field', 'Cluster': 'hidden field', 'cluster6': 'hidden field', 'Cluster7': 'hidden field', 'Tissus_urb': 'inline label - visible with data', 'superficie': 'hidden field', 'arehab': 'hidden field', 'Dens_hab': 'hidden field', 'ZNIEFF': 'hidden field', 'IND_biodiv': 'inline label - visible with data', });
lyr_Indicedebiodiversit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});