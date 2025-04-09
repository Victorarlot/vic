var size = 0;
var placement = 'point';
function categories_Indicedebiodiversit_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'très élevé':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(202,0,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'élevé':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(236,132,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'moyen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(246,214,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'bas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(207,227,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'très bas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(118,180,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nul':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(5,113,176,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Indicedebiodiversit_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("IND_biodiv");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Indicedebiodiversit_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
