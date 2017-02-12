var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -7.427,
            lng: 109.24
        },
        zoom: 15,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false
    });
    var marker = new google.maps.Marker({
        position: {
            lat: -7.423929,
            lng: 109.240687
        },
        map: map,
        icon: '../img/icon.png'
    });
    var styles = [{
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{
                color: '#000'
            }]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                    color: "#131313"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                    color: "#8a8a8a"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                    visibility:'off'
                }
            ]
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                    color: "#232323"
                }
            ]
        },{
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                    color: "#2d2d2d"
                }
            ]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }
        , {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color:"#2d2d2d"
            }]
        }
        , {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color:"#363636"
            }]
        }
        , {
            featureType: "transit",
            elementType: "labels.text",
            stylers: [{
                visibility: "off"
            }]
        }
    ];
    map.setOptions({
        styles: styles
    });
}
