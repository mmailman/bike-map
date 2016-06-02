//controller for stats page
'use strict';

(function(module){
  var statController = {};
  statController.index = function(){
    $('.stats-page').show().siblings().hide();
    $('.nearest').hide();
    if(!Station.all.length){
      Station.requestData(Station.initStation);
    }
    ChartController.chartRender();
  };
  statController.showCharts = function(){
    $('.loading-hamster').hide();
    $('.data-charts').show();
  };
  module.statController = statController;
})(window);
