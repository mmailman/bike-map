'use strict';

(function(module){
  function Station(data){
    for(var key in data){
      this[key] = data[key];
    }
  }

  Station.all = [];
  Station.timeStamp = '';

  Station.requestData = function(callback){
    $.getJSON('https://secure.prontocycleshare.com/data/stations.json')
    .done(function(data){
      return data;
    }).done(callback).done(MapView.initMarkers);
  };

  Station.initStation = function(data){
    Station.timeStamp = data.timestamp; //This timestamp value is in Epoch time format.
    Station.all = data.stations.map(function(ele) {
      return new Station(ele);
    });
    Station.all.forEach(function(a,b){
      a.id = b;
    });
  };

  module.Station = Station;
})(window);
