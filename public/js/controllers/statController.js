//controller for stats page
'use strict';

(function(module){
  var statController = {};
  statController.index = function(){
    $('.stats-page').show().siblings().hide();
    if(!Station.all){
      Station.requestData(Station.initStation);
    }
  };
  module.statController = statController;
})(window);
