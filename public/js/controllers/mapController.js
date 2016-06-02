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
        console.log('finding nearest station');
        BikeMap.getDirections();
        $('#find-nearest-station').text('Reset Directions');
      } else {
        BikeMap.resetDirections();
        console.log('resetting station directions');
        $('#find-nearest-station').text('Station Nearest to Me!');
      }
    });
  };

  module.mapController = mapController;
})(window);
