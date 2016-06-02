'use strict';
(function(module) {
  var mapController = {};

  mapController.index = function(ctx, next) {
    Station.requestData(Station.initStation).done(function(){
      if(next) next();
    });
    // mapController.findNearestStationHandler();
  };

  // mapController.findNearestStationHandler = function() {
  //   $('#find-nearest-station').on('click', function(e) {
  //     e.preventDefault();
  //     BikeMap.getDirections();
  //   });
  // };

  module.mapController = mapController;
})(window);
