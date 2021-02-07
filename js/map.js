git /*Base Map*/

//OSM Maps
var osm = new ol.layer.Tile({
    title: 'OSM Map',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

//Bing Map
var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: 'AvHj0Y_2hK-QC3xzIDFTt2Lq_PQ78MJgyQR0PlRpy2g6myCGPs0rEl3bptQICcmK',
        imagerySet: 'Road'
    })
});

var bingAerial = new ol.layer.Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: 'AvHj0Y_2hK-QC3xzIDFTt2Lq_PQ78MJgyQR0PlRpy2g6myCGPs0rEl3bptQICcmK',
        imagerySet: 'Aerial'
    })
});

//Stamen Map
var stamenWatercolor = new ol.layer.Tile({
    title: 'Stamen Watercolor',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});

//Layers from my geoserver

/**
 * layers of group 12
 * */
var step0_GIS_lab_areas = new ol.layer.Image({
    title: 'GIS_lab_areas:group 12',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step0_GIS_lab_areas' }
    })
});

/**
 * layers of step1
 * */
var step1_ghsPop_clip_int_final = new ol.layer.Image({
    title: 'step1:ghsPop_clip_int_final',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step1_ghsPop_clip_int_final' }
    })
});
var step1_worldPop_clip_int_setnull_replace_final = new ol.layer.Image({
    title: 'step1:worldPop_clip_int_setnull_replace_final',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step1_worldPop_clip_int_setnull_replace_final' }
    })
});


/**
 * layers of step2
 * */
var step2_intercomp_diff_int = new ol.layer.Image({
    title: 'step2:intercomp_diff_int',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step2_intercomp_diff_int' }
    })
});

/**
 * layers of step3
 * */
var step3_difference_3scenarios_int = new ol.layer.Image({
    title: 'step3:difference_3scenarios_int',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step3_difference_3scenarios_int' }
    })
});
var step3_ghsPop_clip_int_final_rec_int = new ol.layer.Image({
    title: 'step3:ghsPop_clip_int_final_rec_int',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step3_ghsPop_clip_int_final_rec_int' }
    })
});
var step3_worldPop_clip_int_setnull_replace_final_rec_int = new ol.layer.Image({
    title: 'step3:worldPop_clip_int_setnull_replace_final_rec_int',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step3_worldPop_clip_int_setnull_replace_final_rec_int' }
    })
});

/**
 * layers of step4
 * */
var step4_dtm_Africa = new ol.layer.Image({
    title: 'step4:dtm_Africa',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS':'LabMapsGroup12:LabMapsGroup12:step4_dtm_Africa' }
    })
});
var step4_600_points = new ol.layer.Image({
    title: 'step4:600_points',
    visible: false,
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8082/geoserver/wms',
        params: { 'LAYERS': 'LabMapsGroup12:step4_600_points' }
    })
});


/**
 * query vector data
 * */
var vectorSource = new ol.source.Vector({
    loader: function (extent, resolution, projection) {
        //request the data from url
        var url = 'http://localhost:8082/geoserver/LabMapsGroup12/wms?service=WFS&'
            + 'version=2.0.0&request=GetFeature&typeName=LabMapsGroup12:step0_GIS_lab_areas&'
            + 'outputFormat=text/javascript&srsname=EPSG:4326&'
            + 'format_options=callback:loadFeatures';

        $.ajax({ url: url, dataType: 'jsonp' }); //data type
    }
});
//set data type:json
var geojsonFormat = new ol.format.GeoJSON();
//load features
function loadFeatures(response) {
    vectorSource.addFeatures(geojsonFormat.readFeatures(response));
}

//OL Map
var map = new ol.Map({
    target: document.getElementById('map'),
    layers: [
        // base map
        new ol.layer.Group({
            title: 'Base Maps',
            layers: [osm, bingAerial, bingRoads, stamenToner, stamenWatercolor]
        }),
        //step 4
        new ol.layer.Group({
            title: 'Step 4',
            layers: [step4_600_points, step4_dtm_Africa]
        }),
        //step 3
        new ol.layer.Group({
            title: 'Step 3',
            layers: [step3_difference_3scenarios_int,
                step3_ghsPop_clip_int_final_rec_int,
                step3_worldPop_clip_int_setnull_replace_final_rec_int]
        }),
        //step 2
        new ol.layer.Group({
            title: 'Step 2',
            layers: [step2_intercomp_diff_int]
        }),
        //step 1
        new ol.layer.Group({
            title: 'Step 1',
            layers: [step1_ghsPop_clip_int_final,
                step1_worldPop_clip_int_setnull_replace_final, step0_GIS_lab_areas]
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    }),
    controls: ol.control.defaults().extend([
        new ol.control.OverviewMap({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                })
            ],
        }),
        new ol.control.ScaleLine(),
        new ol.control.FullScreen(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326'
        })
    ]),
});

//Layer Switcher
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);