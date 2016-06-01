'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    Station.requestData(Station.initStation);
    // BikeMap.getDirections();
    mapController.findNearestStationHandler();
  };

  mapController.findNearestStationHandler = function() {
    $('#find-nearest-station').on('click', BikeMap.getDirections);
  };

  module.mapController = mapController;
})(window);
