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
      if ($('#find-nearest-station').text() === 'Station Nearest to Me!') {
        BikeMap.getDirections();
        $('#find-nearest-station').text('Reset Directions');
      } else {
        BikeMap.resetDirections();
        $('#find-nearest-station').text('Station Nearest to Me!');
      }
    });
  };

  module.mapController = mapController;
})(window);
