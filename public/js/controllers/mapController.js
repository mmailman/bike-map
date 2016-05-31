'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    Station.requestData(Station.initStation);
    google.maps.event.addListener('click', function(event){
      infoWindow.open(map, event);
    });
  };
  module.mapController = mapController;
})(window);
