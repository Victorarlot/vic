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
var format_Typesdetissusurbains_2 = new ol.format.GeoJSON();
var features_Typesdetissusurbains_2 = format_Typesdetissusurbains_2.readFeatures(json_Typesdetissusurbains_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Typesdetissusurbains_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Typesdetissusurbains_2.addFeatures(features_Typesdetissusurbains_2);
var lyr_Typesdetissusurbains_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Typesdetissusurbains_2, 
                style: style_Typesdetissusurbains_2,
                popuplayertitle: 'Types de tissus urbains',
                interactive: true,
    title: 'Types de tissus urbains<br />\
    <img src="styles/legend/Typesdetissusurbains_2_0.png" /> Centre urbain<br />\
    <img src="styles/legend/Typesdetissusurbains_2_1.png" /> Collectif haut discontinu<br />\
    <img src="styles/legend/Typesdetissusurbains_2_2.png" /> individuel dense<br />\
    <img src="styles/legend/Typesdetissusurbains_2_3.png" /> individuel peu dense<br />\
    <img src="styles/legend/Typesdetissusurbains_2_4.png" /> Mixte et dense<br />' });

lyr_FonddecarteDark_0.setVisible(true);lyr_AiredeBesanon_1.setVisible(true);lyr_Typesdetissusurbains_2.setVisible(true);
var layersList = [lyr_FonddecarteDark_0,lyr_AiredeBesanon_1,lyr_Typesdetissusurbains_2];
lyr_AiredeBesanon_1.set('fieldAliases', {'fid': 'fid', 'codgeo': 'codgeo', 'libgeo': 'libgeo', 'aav2020': 'aav2020', 'libaav2020': 'libaav2020', 'cateaav': 'cateaav', 'dep': 'dep', 'reg': 'reg', });
lyr_Typesdetissusurbains_2.set('fieldAliases', {'fid': 'fid', 'dens_bati': 'dens_bati', 'dens_vege': 'dens_vege', 'Densite_bati_actif': 'Densite_bati_actif', 'route_sum': 'route_sum', 'Hauteur_mean': 'Hauteur_mean', 'parcelle_mean': 'parcelle_mean', 'parcelle_count': 'parcelle_count', 'Cluster': 'Cluster', 'cluster6': 'cluster6', 'Cluster7': 'Cluster7', 'Tissus_urbains': 'Tissus_urbains', 'superficie': 'superficie', });
lyr_AiredeBesanon_1.set('fieldImages', {'fid': 'TextEdit', 'codgeo': 'TextEdit', 'libgeo': 'TextEdit', 'aav2020': 'TextEdit', 'libaav2020': 'TextEdit', 'cateaav': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', });
lyr_Typesdetissusurbains_2.set('fieldImages', {'fid': 'TextEdit', 'dens_bati': 'TextEdit', 'dens_vege': 'TextEdit', 'Densite_bati_actif': 'TextEdit', 'route_sum': 'TextEdit', 'Hauteur_mean': 'TextEdit', 'parcelle_mean': 'TextEdit', 'parcelle_count': 'Range', 'Cluster': 'Range', 'cluster6': 'Range', 'Cluster7': 'Range', 'Tissus_urbains': 'TextEdit', 'superficie': 'TextEdit', });
lyr_AiredeBesanon_1.set('fieldLabels', {'fid': 'no label', 'codgeo': 'no label', 'libgeo': 'no label', 'aav2020': 'no label', 'libaav2020': 'no label', 'cateaav': 'no label', 'dep': 'no label', 'reg': 'no label', });
lyr_Typesdetissusurbains_2.set('fieldLabels', {'fid': 'no label', 'dens_bati': 'no label', 'dens_vege': 'no label', 'Densite_bati_actif': 'no label', 'route_sum': 'no label', 'Hauteur_mean': 'no label', 'parcelle_mean': 'no label', 'parcelle_count': 'no label', 'Cluster': 'no label', 'cluster6': 'no label', 'Cluster7': 'no label', 'Tissus_urbains': 'no label', 'superficie': 'no label', });
lyr_Typesdetissusurbains_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});