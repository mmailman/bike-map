'use strict';

(function(module) {
  var BikeMap = {};

  var infowindow;

  var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { hue: '#00ffe6' },
        { saturation: -20 }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { lightness: 100 },
        { visibility: 'simplified' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 15,
    styles: styleArray,
    center: new google.maps.LatLng(47.618418, -122.350964),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  BikeMap.formatTimeStamp = function(timestamp){
    return new Date(timestamp).toGMTString();
  };

  BikeMap.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = BikeMap.map.getCenter();
    google.maps.event.trigger(BikeMap.map, 'resize');
    BikeMap.map.setCenter(center);
  });

  BikeMap.initMarkers = function() {
    Station.all.forEach(function(station) {
      var marker = new google.maps.Marker({
        position: {lat: station.la, lng: station.lo},
        map: BikeMap.map,
        icon: 'images/icons/parking_bicycle-2.png',
        title: station.s,
        bikesAvailable: station.ba,
        docksAvailable: station.da,
        lastUpdated: BikeMap.formatTimeStamp(station.lu)
      });

      marker.addListener('click', function() {
        if (infowindow) {
          infowindow.close();
        }
        BikeMap.map.setCenter(marker.getPosition());

        infowindow = new google.maps.InfoWindow({
          content: '<b>Location: </b>' + marker.title + '<br>' + '<b>Bikes Available: </b>' + marker.bikesAvailable + '<br>' + '<b>Docks Available: </b>' + marker.docksAvailable + '<br>' + '<b>Last Updated: </b>' + marker.lastUpdated
        });

        infowindow.open(BikeMap.map, marker);
      });
    });
    BikeMap.bikeLayer = new google.maps.BicyclingLayer();
    BikeMap.bikeLayer.setMap(BikeMap.map);
  };

  module.BikeMap = BikeMap;

})(window);
