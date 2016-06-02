(function(module) {
  var MapView = {};
  var infowindow;

  MapView.initMarkers = function() {
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
        BikeMap.map.setCenter(marker.getPosition());
        if (infowindow) {
          infowindow.close();
        }

        infowindow = new google.maps.InfoWindow({
          content: '<strong>Location: </strong>' + marker.title +
          '<br />' + '<strong>Bikes Available: </strong>' + marker.bikesAvailable +
          '<br />' + '<strong>Docks Available: </strong>' + marker.docksAvailable +
          '<br />' + '<strong>Last Updated: </strong>' + marker.lastUpdated
        });

        infowindow.open(BikeMap.map, marker);
      });
    });
  };

  MapView.renderRoute = function(origin,distanceArray) {
    // //Directions Api calls
    // var directionsService = new google.maps.DirectionsService;
    // var directionsDisplay = new google.maps.DirectionsRenderer;
    // directionsDisplay.setMap(BikeMap.map);
    //
    // directionsService.route({
    //   origin: pos.lat + ',' + pos.lng,
    //   destination: distanceArray[0].station.la + ',' + distanceArray[0].station.lo,
    //   travelMode: google.maps.TravelMode.BICYCLING,
    //   unitSystem: google.maps.UnitSystem.IMPERIAL
    // }, function(response, status){
    //   if(status === google.maps.DirectionsStatus.OK){
    //     directionsDisplay.setDirections(response);
    //   } else {
    //     window.alert('Directions request failed due to ' + status);
    //   }
    // });
  };

  module.MapView = MapView;
})(window);
