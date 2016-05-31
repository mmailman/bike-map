'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    console.log('pulling data');
    Station.requestData(Station.initStation);
  };

  module.mapController = mapController;
})(window);
