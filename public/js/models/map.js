'use strict';

(function(module) {

  var styleArray = [
    {
      featureType: "all",
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
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

  var marker = new google.maps.Marker({
    position: {lat: 47.618418, lng: -122.350964},
    map: map,
    title: 'test marker'
  });

})();
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy 
