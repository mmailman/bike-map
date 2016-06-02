'use strict';
(function(module) {
  var ChartView = {};

  DataCollector.ref.on('value', function(snapshot) {
    DataCollector.snapshotVal = snapshot.val();
    statController.showCharts();
    DataCollector.bikesAvailableAll();
    DataCollector.docksAvailableAll();
    ChartView.dropDown();
    ChartAvail.displayAvailChart(DataCollector.condenseAverage(DataCollector.averageAllFilter(DataCollector.gba),12),DataCollector.condenseAverage(DataCollector.averageAllFilter(DataCollector.gda),12));
  }, function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });

  ChartView.dropDown = function() {
    Station.all.forEach(function(station,index) {
      $('#station-select').append(function() {
        var template = Handlebars.compile($('#station-filter-template').text());
        return template(station);
      });
    });
  };

  module.ChartView = ChartView;
})(window);
