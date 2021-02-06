//document.getElementById("bmap").style.height = document.documentElement.clientHeight + "px";

var chartDom = document.getElementById('map');
var myChart = echarts.init(chartDom);

var option;
var option2;

option2 = {
    backgroundColor: 'transparent',
    title: {
        text: 'BMap',
        subtext: 'Data of Group 12',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    bmap: {
        center: [15, 0],
        zoom: 5,
        roam: false,
        mapStyle: {
            styleJson: [
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#044161"
                    }
                },
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#064f85"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#005b96",
                        "lightness": 1
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#00508b"
                    }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                        "color": "#056197",
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#029fd4"
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "all",
                    "stylers": {
                        "color": "#1a5787"
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                }
            ]
        }
    }
};
myChart.setOption(option2);

myChart.showLoading();
$.get('/WebTrial/USA.json', function (usaJson) {
    myChart.hideLoading();
    echarts.registerMap('Group_12', usaJson, {
    });

    option = {
        title: {
            text: 'Population Estimates (2015)',
            subtext: 'Data of Group 12',
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = ('COV:' + params.value).split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br />' + params.name + '_COV:' + params.value;
            }
        },
        visualMap: {
            left: 'right',
            min: -1,
            max: 1,

            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text: ['High', 'Low'],
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'Population of Group_12',
                type: 'map',
                roam: false,
                map: 'Group_12',
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { name: 'Tile00', value: 0.128014 },
                    { name: 'Tile01', value: -0.164468 },
                    { name: 'Tile02', value: 0.339923 },
                    { name: 'Tile03', value: 0.151661 },
                    { name: 'Tile04', value: 0.242995 },
                    { name: 'Tile05', value: 0.08203 },
                    { name: 'Tile06', value: 0.008944 },
                    { name: 'Tile07', value: 0.017038 },
                    { name: 'Tile08', value: 0.02598 },
                    { name: 'Tile09', value: 0.031208 },
                    { name: 'Tile10', value: -0.083433 },
                    { name: 'Tile11', value: -0.003977 },
                    { name: 'Tile12', value: 0.042674 },
                    { name: 'Tile13', value: 0.030815 },
                    { name: 'Tile14', value: 0.035623 },
                    { name: 'Tile15', value: 0.055319 },
                    { name: 'Tile16', value: 0.322529 },
                    { name: 'Tile17', value: 0.024681 },
                    { name: 'Tile18', value: 0.182944 },
                    { name: 'Tile19', value: 0.059076 },
                    { name: 'Tile20', value: 0.109634 },
                    { name: 'Tile21', value: 0.31957 },
                    { name: 'Tile22', value: 0.02799 },
                    { name: 'Tile23', value: 0.074442 },
                    { name: 'Tile24', value: 0.010651 },
                    { name: 'Tile25', value: 0.052923 },
                    { name: 'Tile26', value: 0.022463 },
                    { name: 'Tile27', value: 0.042073 },
                    { name: 'Tile28', value: 0.046134 },
                    { name: 'Tile29', value: 0.215946 },
                    { name: 'Tile30', value: 0.045526 },
                    { name: 'Tile31', value: 0.245176 }

                ]
            }
        ]
    };
    myChart.setOption(option);
});
