'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function() {
    $('.map-page').show().siblings().hide();
    $('.nearest').show();
    Station.requestData(Station.initStation);
    mapController.findNearestStationHandler();
  };

  mapController.findNearestStationHandler = function() {
    $('#find-nearest-station').on('click', function(e) {
      e.preventDefault();
      BikeMap.getDirections();
    });
  };

  module.mapController = mapController;
})(window);
