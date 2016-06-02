'use strict';
(function(module) {
  var chartView = {};

  DataCollector.ref.on('value', function(snapshot) {
    DataCollector.snapshotVal = snapshot.val();
    // TODO:write overlay change call here
    console.log(snapshot.val());
    DataCollector.bikesAvailableAll();
    DataCollector.docksAvailableAll();
    chartView.dropDown();
    ChartAvail.displayAvailChart(DataCollector.condenseAverage(DataCollector.averageAllFilter(DataCollector.gba),12),DataCollector.condenseAverage(DataCollector.averageAllFilter(DataCollector.gda),12));
  }, function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });

  chartView.dropDown = function() {
    Station.all.forEach(function(station,index) {
      $('#station-select').append(function() {
        var template = Handlebars.compile($('#station-filter-template').text());
        return template(station);
      });
    });
  };

  module.chartView = chartView;
})(window);
