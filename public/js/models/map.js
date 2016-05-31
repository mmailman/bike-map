'use strict';

(function(module) {
  var BikeMap = {};

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

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  // Station.requestData(Station.initStation).done(function() {
  //   console.log('entered for each loop');

  BikeMap.initMarkers = function() {
    Station.all.forEach(function(station) {
      console.log('entered for each');
      var marker = new google.maps.Marker({
        position: {lat: station.la, lng: station.lo},
        map: map,
        title: station.s
      });
    });
  };

  module.BikeMap = BikeMap;

})(window);
