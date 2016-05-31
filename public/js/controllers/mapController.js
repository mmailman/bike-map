'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    Station.requestData(Station.initStation);
  };

  module.mapController = mapController;
})(window);
