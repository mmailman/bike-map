'use strict';

(function(module) {
  var BikeMap = {};

  var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { hue: '#002244' },
        { saturation: -40 }
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
    styles: styleArray,
    center: new google.maps.LatLng(47.618418, -122.350964),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoom: 15,
    zoomControl: true,
    zoomOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  BikeMap.formatTimeStamp = function(timestamp) {
    return new Date(timestamp).toLocaleString(navigator.language, {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  BikeMap.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  BikeMap.directionsService = new google.maps.DirectionsService;
  BikeMap.directionsDisplay = new google.maps.DirectionsRenderer;

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = BikeMap.map.getCenter();
    google.maps.event.trigger(BikeMap.map, 'resize');
    BikeMap.map.setCenter(center);
  });

  BikeMap.getDirections = function() {
    if (navigator.geolocation) {
      //Gets the origin point, the user's position is the origin point.
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        //Produces an array of station objects sorted by distance
        var distanceArray = Station.all.map(function(station) {
          return {
            distance: BikeMap.getDistance(pos.lat, pos.lng, station.la, station.lo),
            station: station
          };
        }).sort(function(a, b) {
          if (a.distance > b.distance) {
            return -1;
          }
          if (b.distance > a.distance) {
            return 1;
            return 0;
          }
        }).reverse();

        //Directions Api calls
        BikeMap.directionsDisplay.setMap(BikeMap.map);

        BikeMap.directionsService.route({
          origin: pos.lat + ',' + pos.lng,
          destination: distanceArray[0].station.la + ',' + distanceArray[0].station.lo,
          travelMode: google.maps.TravelMode.BICYCLING,
          unitSystem: google.maps.UnitSystem.IMPERIAL
        }, function(response, status){
          if(status === google.maps.DirectionsStatus.OK){
            BikeMap.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      });
    } else {
      alert('You must allow Google to use your location for this feature.');
    }
  };

  BikeMap.resetDirections = function() {
    if(MapView.infoWindow) {
      MapView.infoWindow.close();
    }
    BikeMap.directionsDisplay.setMap(null);
    BikeMap.map.setOptions({
      zoom: 15
    });
  };

  BikeMap.getDistance = function(originLat, originLng, destLat, destLng, unit) {
    var userLat = Math.PI * originLat / 180;
    var userLng = Math.PI * originLng / 180;
    var stationLat = Math.PI * destLat / 180;
    var stationLng = Math.PI * destLng / 180;
    var theta = originLng - destLng;
    var radTheta = Math.PI * theta / 180;
    var dist = Math.sin(userLat) * Math.sin(stationLat) + Math.cos(userLat) * Math.cos(stationLat) * Math.cos(radTheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.515;
    if (unit === 'K') {  //converts to km if K is passed as a unit parameter.
      dist = dist * 1.609344;
    };
    return dist;
  };

  module.BikeMap = BikeMap;

})(window);
