(function(module) {
  Station.all.forEach(function(station){
    $('#station-select').append(function(){
      var template = Handlebars.compile($('#station-filter-template').text());
      return template(station);
    });
  });
  // module.chartView = chartView;
})(window);
