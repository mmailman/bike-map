'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    Station.requestData(Station.initStation);
    BikeMap.getDirections();
  };

  module.mapController = mapController;
})(window);
