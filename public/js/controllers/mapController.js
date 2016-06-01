'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    Station.requestData(Station.initStation);
    mapController.findNearestStationHandler();
    mapController.infoWindowDirectionsHandler();
  };

  mapController.findNearestStationHandler = function() {
    $('#find-nearest-station').on('click', function(e) {
      e.preventDefault();
      BikeMap.getDirections();
    });
  };

  module.mapController = mapController;
})(window);
