(function(module) {
  var mapView = {};
  var infowindow;

  mapView.initMarkers = function() {
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
  module.mapView = mapView;
})(window);
