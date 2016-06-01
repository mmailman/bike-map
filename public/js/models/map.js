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

  BikeMap.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = BikeMap.map.getCenter();
    google.maps.event.trigger(BikeMap.map, 'resize');
    BikeMap.map.setCenter(center);
  });

  BikeMap.formatTimeStamp = function(timestamp){
    return new Date(timestamp).toGMTString();
  };

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
          content: '<strong>Location: </strong>' + marker.title + '<br />' + '<strong>Bikes Available: </strong>' + marker.bikesAvailable + '<br />' + '<strong>Docks Available: </strong>' + marker.docksAvailable + '<br />' + '<strong>Last Updated: </strong>' + marker.lastUpdated
        });

        infowindow.open(BikeMap.map, marker);
      });
    });
  };

  module.BikeMap = BikeMap;

})(window);
