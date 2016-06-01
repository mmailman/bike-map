(function(module) {
  var chartView = {};

  chartView.dropDown = function(){
    Station.all.forEach(function(station,index){
      $('#station-select').append(function(){
        var template = Handlebars.compile($('#station-filter-template').text());
        return template(station);
      });
    });
  };
  module.chartView = chartView;
})(window);
